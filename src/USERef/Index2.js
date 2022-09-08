import React, {useState, useEffect, useRef} from 'react'

const FRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
      intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)
    
      return () => {
        clearInterval(intervalRef.current);
      }
    }, [])
    
  return (
    <>
      <div className="spa">
        <h1> Now time is : {timer} </h1>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Timer
        </button>
      </div>
    </>
  );
}

export default FRef