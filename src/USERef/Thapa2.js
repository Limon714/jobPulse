import React, { useState, useRef } from "react";

const Thapa2 = () => {
  const [myData, setData] = useState("");

  const inputElem = useRef("");
  
  
    const onChangeStyle = () => {
        inputElem.current.style.backgroundColor = "#fff"; 
        // inputElem.current.style.color = "#fff"; 
        // inputElem.current.focus();
   
    }

  return (
    <>
        <input
        ref={inputElem}
        type="text"
        value={myData}
        onChange={(e) => setData(e.target.value)}
          />
          <br />
          <br />
      <button onClick={onChangeStyle}>Submit</button>
    </>
  );
};

export default Thapa2;
