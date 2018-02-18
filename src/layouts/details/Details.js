import React, { Component } from 'react'
import { Link } from 'react-router'
// import RideDetails from './RideDetails'

class Details extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>test</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Details
