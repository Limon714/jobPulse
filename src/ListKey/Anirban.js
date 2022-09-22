import React from 'react'

const Anirban = () => {
    const info = [
        {name: "Abir", age : "28"},
        {name: "Abim", age : "23"},
    ]
  return (
    <>
          {info.map((iname, inx) => {
              return (
                  <div key={inx}>
                      <h1>{iname.name}</h1>
                      <h1>{iname.age}</h1>
                      
              </div>
          )
      })}
    </>
  )
}

export default Anirban
