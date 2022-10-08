import React,{useContext} from 'react'
import {globalContext} from './Child'
const SuperChild = () => {
    const { AppColor } = useContext(globalContext);
  return (
    <div>
      <h1 style={{ color: AppColor }}>SuperChild Context</h1>
    </div>
  );
}

export default SuperChild
