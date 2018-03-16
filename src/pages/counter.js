import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0, count01: 12 }
  }
  render() {
    return <div>
            <h1>Counter</h1>
            <p>current count: {this.state.count}</p>
            <p>current count01: {this.state.count01}</p>           
            <button onClick={() => this.setState({ count01 : this.state.count01 + 1 })}>Custom ++</button>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
            <button onClick={() => this.setState({ count: this.state.count + 5 })}>+5</button>
          </div>
  }
}

export default Counter