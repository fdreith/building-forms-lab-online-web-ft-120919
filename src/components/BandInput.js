// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })

  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return (
      <div>
        Band Input:
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
