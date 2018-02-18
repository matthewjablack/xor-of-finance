import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { Jumbotron } from 'react-bootstrap';
import './Landing.css';
import { Link } from 'react-router';

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="landing">
        <h1>Decentralized Open Loans</h1>
        <p>XOR Open Loan is a unique open source and completely decentralized system that makes loan contracts that are low cost for borrowers, high return for lenders, and contain end-to-end transparency and immutability on the blockchain, enabling them to be used as transparent underlying assets for derivatives and market making.</p>
        <p><Link to="/signup" className="btn btn-lg btn-danger">Join The Revolution</Link></p>
      </div>

    )
  }
}

export default Landing
