import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.custom = { count: 10 }
  }
  render() {
    return <div>
            <h1>Counter</h1>
            <p>current count: {this.state.count}</p>
            <p>current custom: {this.custom.count}</p>           
            <button onClick={() => this.setCustom({ count: this.custom.count + 1 })}>Custom ++</button>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
            <button onClick={() => this.setState({ count: this.state.count + 5 })}>+5</button>
          </div>
  }
}

export default Counter