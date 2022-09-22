import React, { Component } from 'react'

export default class Hunter extends Component {
    render() {
        const names = ["Rahim", "karim", "Jodu", "Modu"];
        const items = names.map((item, indx) => {
            return <li>{indx} - {item}</li>
        })
    return (
        <>
            <div>
                <strong>Students Name</strong>
                <div>{items}</div>
        </div>
        </>
    )
  }
}
