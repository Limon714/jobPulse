import React, { Component } from 'react'

class ClassTimer extends Component {
    Interval 
    constructor(props) {
      super(props)
    
      this.state = {
         timer : 0,
      }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState =>({timer:prevState.timer + 1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
  render() {
    return (
      <>
       
        <div className="spa">
          <h1> Now time is : {this.state.timer} </h1>
          <button onClick={() => clearInterval(this.interval)}>
            Clear Timer
          </button>
        </div>
      </>
    );
  }
}

export default ClassTimer