import React, { Component } from 'react'
import { Table } from "react-bootstrap";
import { Link } from 'react-router'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Market extends Component {
  constructor(props) {  
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Market {this.props.params.id}</h1>

            

          </div>
        </div>
      </main>
    )
  }
}

export default Market
