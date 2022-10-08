import { useRef } from "react"
import Child from './Child'
const Parent = () => {

  const ref = useRef()

  return (
    <>
      <div>
         <Child ref ={ref} />
     
        <h1>Parent Component</h1>
        <button onClick={()=> ref.current.hi()}>Click Me</button> 
      </div>
    </>
  )
}

export default Parent