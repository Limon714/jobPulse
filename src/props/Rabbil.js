// import React from 'react'

// const rabbil = (props) => {
//   return (
//     <div>
//       <h1>Today I learn {props.name} </h1>
//     </div>
//   )
// }
// export default rabbil

import React, { Component } from 'react'

export default class Rabbil extends Component {
  render() {
    return (
      <div>
        <h1>Today I learn {this.props.name} </h1>
      </div>
    );
  }
}



