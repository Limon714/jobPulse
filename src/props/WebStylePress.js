import React from 'react'

const WebStylePress = ({name, platform, subs}) => {
  return (
    <div>
          <p>Name : {name}</p>
          <p>Platform : {platform}</p>
          <p>Status : {subs}</p>
    </div>
  )
}

export default WebStylePress
