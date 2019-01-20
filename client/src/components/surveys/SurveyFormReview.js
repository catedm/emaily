import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({ name, label, icon }) => {
    return (
      <div key={name} style={{ marginBottom: '25px' }}>
        <i className="material-icons left">{icon}</i>
        <label>{label}</label>
        <input value={formValues[name]} disabled style={{ marginBottom: '5px', color: '#000' }} />
      </div>
    )
  });

  return (
    <div>
      <div style={{ marginBottom: "35px" }}>
        <h5>Please confirm your entries</h5>
        <i>Be careful! There's no going back from here.</i>
      </div>
      {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
      <button onClick={() => submitSurvey(formValues, history)} className="green btn-flat right white-text">
        Send Survey
      <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
