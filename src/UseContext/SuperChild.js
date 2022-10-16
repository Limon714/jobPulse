import React,{useContext} from 'react'
import {globalContext} from './Child'
const SuperChild = () => {
    const { AppColor } = useContext(globalContext);
  return (
    <div>
      <h1 style={{ color: AppColor }}> Super Child Context API</h1>
    </div>
  );
}

export default SuperChild
