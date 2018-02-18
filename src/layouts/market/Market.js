import React, { Component } from 'react'
import { Table, Button } from "react-bootstrap";
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
            <h3># Debtors: 5</h3>
            <h3># Creditors: 6</h3>

            <h2>Requests</h2>

            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Amount</th>
                  <th>Interest</th>
                  <th>Collateral Fee</th>
                  <th>Debtor Risk</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>434</td>
                  <td>5.7 DAI</td>
                  <td>9%</td>
                  <td>2%</td>
                  <td>5.6</td>
                  <td><Button bsStyle="primary">Offer Loan</Button></td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>5.7 DAI</td>
                  <td>9%</td>
                  <td>2%</td>
                  <td>5.6</td>
                  <td><Button bsStyle="primary">test</Button></td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>5.7 DAI</td>
                  <td>9%</td>
                  <td>2%</td>
                  <td>5.6</td>
                  <td><Button bsStyle="primary">test</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    )
  }
}

export default Market
