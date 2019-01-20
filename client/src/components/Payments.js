import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5.00 for 5 email credits"
        // this is the amount in US cents
        amount={500}
        // this is expecting to recieve a callback function
        // it will be called after we recieve a authorization token from the Stripe API
        // token is a bad name for this, but it expects a callback function
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      <button className="btn white black-text">Add credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments);