// SurveyNew shows SurveyForm and SurveyReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
  // this code is what makes the form dump the values when cancel is selected
  // its not expliclity telling redux to dump the values, but we are not explicitly
  // TELLING it to dump the values
  // dumping the values is Redux's default behavior
})(SurveyNew);