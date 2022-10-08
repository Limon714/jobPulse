import React from 'react'
import { useImperativeHandle, forwardRef } from 'react'

const Child = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      hi:()=>hello()
    }
  })
  const hello = () => {
    console.log('I am from Child Component')
  }
  return (
    <>
      <div>
        
     </div>
    </>
  )
}

export default forwardRef(Child)