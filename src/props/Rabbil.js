import React from 'react'


const rabbil = ({ name, hours }) => {
  //const { name,hours } = props; //it's from Anisul Islam Sir
  return (
    <div>
      <h1>
        Today I learn {name} for {hours}
      </h1>
    
      {/* <p>it's codename is {props.text.codename} </p> */}
    </div>
  );
};
export default rabbil

// import React, { Component } from 'react'

// export default class Rabbil extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Today I learn {this.props.name} </h1>
//       </div>
//     );
//   }
// }



