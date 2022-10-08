
import React, { createContext, useState } from 'react' 
import SuperChild from './SuperChild';
export const globalContext = createContext();
const Child = () => {
  // eslint-disable-next-line
  const [color, setColor] = useState("green");
  return (
    <globalContext.Provider value={{ AppColor: color }}>
      <div>
        <SuperChild />
      </div>
    </globalContext.Provider>
  );
}

export default Child
