// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import _ from 'lodash';
// this can be thought of as really similar to the connect helper from react
// its wired up the exact same way!
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name, icon }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} icon={icon} />
    });
  }

  render() {
    return (
      <div>
        {/* handleSubmit is given to us by the reduxForm connector at the bottom of
        this file */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} style={{ marginTop: '25px' }}>
          {this.renderFields()}
          <button type="submit" className="teal btn-flat right white-text">
            Next
          <i className="material-icons right">done</i></button>
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  errors.from = validateEmails(values.from || '');

  _.each(formFields, ({ name, formErrorValue }) => {
    if (!values[name]) {
      errors[name] = `${formErrorValue}`
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  // this will make sure Redux form does not dump the values when the component is unmounted
  // this allows us to click "back" from the review screen and still have all of the values
  destroyOnUnmount: false
})(SurveyForm);