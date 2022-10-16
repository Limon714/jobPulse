import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../app/counterSlice";
const Toolkit = () => {
  // const [first, setfirst] = useState(0)
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  const decrementby50 = () => {
    dispatch(incrementByAmount(50));
  };

  return (
    <div>
      <h1>Counter : {counter} </h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={decrementby50}>Decrementby50</button>
    </div>
  );
};

export default Toolkit;
