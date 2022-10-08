import {useRef} from 'react'
const UseRef = () => {
  const inputBox = useRef(null);

  const buttonClick = () => {
    inputBox.current.value = "Its Super cool"
  }
  return (
    <>
      <div>
        <input ref={inputBox} value= 'How is React?' type= 'text'/>
        <button onClick={buttonClick}> Click </button>
      </div>
    </>
  );
};

export default UseRef;
