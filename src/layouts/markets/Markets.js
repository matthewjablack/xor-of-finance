import React, { Component } from 'react'
import { Table } from "react-bootstrap";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Markets extends Component {
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
            <h1>Markets</h1>

            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Risk</th>
                  <th># Debtors</th>
                  <th># Creditors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>3.2</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>5.4</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1.2</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>

          </div>
        </div>
      </main>
    )
  }
}

export default Markets
