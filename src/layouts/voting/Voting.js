import React, { Component } from 'react'
import { Table } from "react-bootstrap";
import { Link } from 'react-router'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Voting extends Component {
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
            <h1>Voting</h1>

            <br/><br/>

            <h3>Market information</h3>

            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Voting Block</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to="/markets/2">2</Link></td>
                  <td>5116493 (14 days)</td>
                </tr>
                <tr>
                  <td><Link to="/markets/3">3</Link></td>
                  <td>5117988 (22 days)</td>
                </tr>
                <tr>
                  <td><Link to="/markets/1">1</Link></td>
                  <td>5114100 (7 hours)</td>
                </tr>
                <tr>
                  <td><Link to="/markets/5">5</Link></td>
                  <td>5115400 (6 days)</td>
                </tr>
                <tr>
                  <td><Link to="/markets/8">8</Link></td>
                  <td>5119969 (16 days)</td>
                </tr>
                <tr>
                  <td><Link to="/markets/9">9</Link></td>
                  <td>5119369 (24 days)</td>
                </tr>
                <tr>
                  <td><Link to="/markets/10">10</Link></td>
                  <td>5112971 (3 days)</td>
                </tr>
              </tbody>
            </Table>

            <br/><br/>

          </div>
        </div>
      </main>
    )
  }
}

export default Voting
