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
            <Link to="/app" className="btn btn-danger">Request Loan</Link>
            <br/><br/>
            <h3># Debtors: 5</h3>
            <h3># Creditors: 6</h3>

            <br/><br/>

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
                  <td>4.6</td>
                  <td><Link to="/app" className="btn btn-primary">Offer Loan</Link></td>
                </tr>
                <tr>
                  <td>435</td>
                  <td>20 DAI</td>
                  <td>12%</td>
                  <td>3%</td>
                  <td>5.6</td>
                  <td><Link to="/app" className="btn btn-primary">Offer Loan</Link></td>
                </tr>
                <tr>
                  <td>436</td>
                  <td>16.7 DAI</td>
                  <td>14%</td>
                  <td>2%</td>
                  <td>2.3</td>
                  <td><Link to="/app" className="btn btn-primary">Offer Loan</Link></td>
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
