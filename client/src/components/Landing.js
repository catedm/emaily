import React, { Component } from 'react';
import _ from 'lodash';

const CALLOUTS = [
  {
    title: 'Make An Account For Free',
    paragraph: 'Sign up with Google today. No charge.',
    icon: 'account_circle'
  },
  {
    title: 'Purchase Credits',
    paragraph: '1 dollar = 1 credit. Simplicity is a beautiful thing, my friend.',
    icon: 'attach_money'
  },
  {
    title: 'Collect Feeback',
    paragraph: '1 credit = 1 survey. Send out surveys with up to 200,000 recipients!',
    icon: 'sentiment_very_satisfied'
  },
]

const callouts = _.map(CALLOUTS, ({ title, paragraph, icon }) => {
  return (
    <div className="col s12 m12 l4" style={{ marginBottom: '25px' }} key={title}>
      <i className="material-icons center medium">{icon}</i>
      <h5 style={{ marginBottom: '35px' }}>{title}</h5>
      <p style={{ margin: '0 45px' }}>{paragraph}</p>
    </div>
  );
});

class Landing extends Component {
  renderIntro() {
    return (
      <div className="section" style={{ textAlign: 'center' }}>
        <h1>Survey Wizard</h1>
        <h4>An easy way to gather feedback from your users.</h4>
        <a href="/auth/google" className="waves-effect waves-light btn-large" style={{ marginTop: '20px' }}>
          <i className="material-icons right">account_circle</i>
          Create a free account with Google
        </a>
      </div>
    )
  }

  renderCallouts() {
    return (
      <div className="blue-grey lighten-5">
        <div className="section row container" style={{ textAlign: 'center', marginTop: '35px' }}>
          <h4 style={{ marginBottom: '35px' }}>How It Works</h4>
          {callouts}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderIntro()}
        {this.renderCallouts()}
      </div>
    )
  }
}

export default Landing;
