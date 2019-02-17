import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "rgba(0, 0, 0, .05)", padding: "5px" }}>
        <p>Use this app for free by using VISA number 4242 4242 4242 4242 to buy credits!</p>
        <p>Make the sure the expiration date is in the future! :)</p>
      </div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;
