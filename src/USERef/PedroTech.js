import React from 'react'
import { useRef } from "react";
const PedroTech = () => {
    const input = useRef(null);
    const onplaceholder = () => {
        input.current.value = "hello";
        input.current.focus();
    };
  return (
    <>
      <div className="spa">
        <input type="text" value="Whats up" ref={input} />
        <button onClick={onplaceholder}>Change Placeholder</button>
      </div>
    </>
  );
}

export default PedroTech