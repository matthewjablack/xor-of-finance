import React, { Component } from 'react'

class Markets extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  componentDidMount() {
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Markets</h1>
          </div>
        </div>
      </main>
    )
  }
}

export default Markets
