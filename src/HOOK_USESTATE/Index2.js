import React, { useState } from 'react'
const Index2 = () => {
    const [count, setCount] = useState(0)
    const Handlei = () => {
      setCount(count + 5);
    };
  return (
    <>
      <div className="spa">
        <h1>Number is : {count}</h1>
        <button onClick={Handlei}>Increment</button>
      </div>
    </>
  );
}
export default Index2