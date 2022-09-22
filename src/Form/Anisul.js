import React from 'react'
import { useState } from 'react'

const Anisul = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
     const formSubmit = (e) => {
         console.log("Form is Submit");
         let infor = {
             name,
             email
         }
         console.log(infor);
         e.preventDefault();
    }
    
  return (
    <>
      
      <div className='container'>
        <form action="" onClick={formSubmit}>
          <div>
            <label htmlfor="name">Name : </label>
            <input type="text" Placeholder="name" name="name" id='name' value={name} onChange={nameChange} required />
          </div> <br />
                  <div>
              <label htmlfor="email">Email : </label>
            <input type="email" Placeholder="Email" name="email" id='name' value={email} onChange={emailChange} required />  
              </div>
                  <div>
                      <button type='submit'> Submit</button>
                  </div>
              </form>
             
      </div>
    </>
  );
}

export default Anisul
