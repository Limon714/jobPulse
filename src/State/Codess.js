import React from 'react'
export default class Learning extends React.Component{

    constructor(){
    super();
    this.state = {
        name: "learner",
        age: 24
    }
    }
    updateme = () => {
        this.setState({
            name: "Rahim",
            age: this.state.age + 1
            
    })
    }
    render() {
        return(
            <>
                <div className='spa'>
                    <h1>He is a {this.state.name}</h1>
                    <h1>He age {this.state.age}</h1>
                    <button onClick={this.updateme}> Update </button>
               </div>
            </>
      )
    }
}