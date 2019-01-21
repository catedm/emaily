import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card grey lighten-3" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action blue-grey darken-2">
            <a style={{ color: "#fff" }}>Yes: {survey.yes}</a>
            <a style={{ color: "#fff" }}>No: {survey.no}</a>
            <i
              style={{ cursor: 'pointer' }}
              className="material-icons right white"
              onClick={() => this.props.deleteSurvey(survey._id)}>
              delete
              </i>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '20px' }}>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);