import React from 'react';

import { createSubscription } from '../../api_util';

class Subscribe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {email: ""}

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update() {
    return (e) => {
      this.setState({email: e.currentTarget.value});
    }
  }

  submit() {
    createSubscription(this.state.email);
  }

  render() {
    return(
      <div id="subscribe">
        <h1 id="subscribe-header">SUBSCRIBE TO NEWSLETTER</h1>
        <div id="subscribe-form">
          <input onChange={this.update()} id="subscribe-input" type="text" placeholder="Your Email"></input>
          <div onClick={this.submit} id="subscribe-button"><h4 id="subscribe-button-text">Subscribe</h4></div>
        </div>
      </div>
    )
  }
}

export default Subscribe;
