import React, { Component } from 'react'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Welcome to XOR of Finance!</h1>
          </div>
        </div>
      </main>
    )
  }
}

export default Landing
