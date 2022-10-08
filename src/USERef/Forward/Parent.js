import React, {useRef} from 'react'
import Child from './Child'
const Parent = () => {
    const inputRef = useRef(null);

    const buttonClick = () => {
        inputRef.current.value = "Parent to Child";
    }
  return (
    <div>
          <h1>Forward Ref</h1>

          <Child ref={inputRef} />
          <button onClick={buttonClick}>Update</button>
    </div>
  )
}

export default Parent
