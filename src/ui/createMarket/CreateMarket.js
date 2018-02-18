import React, { Component } from 'react'

class CreateMarket extends Component {
  constructor(props) {
    super(props)

    this.state = {
      risk: ''
    }
  }

  onRiskChange(event) {
    this.setState({ risk: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onCreateMarket(this.state.risk)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">Initial Risk</label>
          <input id="risk" type="text" value={this.state.risk} onChange={this.onRiskChange.bind(this)} placeholder="Risk" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Confirm Driver Met</button>
        </fieldset>
      </form>
    )
  }
}

export default CreateMarket
