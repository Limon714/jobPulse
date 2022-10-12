
import React, { createContext, useState } from 'react' 
import OtherChild from './OtherChild';
import SuperChild from './SuperChild';
export const globalContext = createContext();
const Child = () => {
  // eslint-disable-next-line
  const [color, setColor] = useState("green");
  const [day, setDay] = useState('Sunday')

  const getDay = (item) => {
    setDay(item)
  }
  return (
    <globalContext.Provider value={{ AppColor: color, getDay:getDay }}>
      <div>
        <SuperChild />
        <OtherChild />
        <h1>{day}</h1>
      </div>
    </globalContext.Provider>
  );
}

export default Child
