import React, { Component } from 'react'
export default class Index1 extends Component {
    constructor(props) {
      super(props)
        this.state = {
          count: 0,
      }
  }
  Handlei = () => {
    this.setState({
      count : this.state.count + 5
    })
  }
    render() {
        const { count } = this.state;
    return (
      <>
        <div className="spa">
          <h1>Number is : {count}</h1>
          <button onClick={this.Handlei}>Increment</button>
        </div>
      </>
    );
  }
}
