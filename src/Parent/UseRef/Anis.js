import React, { useRef } from "react";

const Anis = () => {
    const userRef = useRef();
    const passRef = useRef();
    const handlesubmit = (event) => {
        event.preventDefault();
        const userName = userRef.current.value;
        const userPas = passRef.current.value;
        console.log({userName, userPas});
    }
  return (
    <>
      <form action="" className="spa" onSubmit={handlesubmit}>
        <div>
                  <label htmlFor="Username">Username :</label>
                  <input type="text" name="" id="username" ref={userRef} />
        </div>
        <div>
          <label htmlFor="Password">Password :</label>
                  <input type="text" name="" id="userpassword" ref={passRef} />
              </div>
              <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Anis;
