import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  increseCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }
  decreseCount = () => {
    const { count } = this.state
    this.setState({
      count: count - 1
    })
  }
  render() {
    const { count } = this.state
    return (
      <div className='container'>
        <div className='d-flex gap-2 my-5 justify-content-center' >
          <button className='btn btn-info' onClick={this.increseCount}>+</button>
          <h3>{count}</h3>
          <button className='btn btn-danger' onClick={this.decreseCount}>-</button>
        </div>
      </div>
    )
  }
}

