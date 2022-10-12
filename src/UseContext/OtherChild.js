import React,{useContext} from 'react'
import { globalContext } from './Child'

const OtherChild = () => {
    const { AppColor, getDay } = useContext(globalContext);
    const day = "Monday";
  return (
    <div>
          <h1 style={{ backgroundColor: AppColor }}>OtherChild Context</h1>
          <button onClick={()=>getDay(day)}>Get Day</button>
    </div>
  );
}

export default OtherChild
