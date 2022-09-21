import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Thapa = () => {
    const [myData, setData] = useState("");
    // const [count, setCount] = useState();

    const count = useRef(10);
    console.log(" 🚀 ~ file: UseRef.jsx ~ line 9 ~ count", count);
    useEffect(() => {
        // setCount(count + 1);
        count.current = count.current + 1
    },);
    
  return (
      <>
          <input type="text"
          value={myData}
          onChange ={(e) =>setData(e.target.value)}
          />
          <p>The Number of Times Render : {count.current}</p>
      
      </>
  )
}

export default Thapa