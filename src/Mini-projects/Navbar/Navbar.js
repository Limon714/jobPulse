import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
          <nav className="main-nav">
              {/* leftside-logo Part  */}
              <div className="logo">
                  <img src="/Images/Logo.png" alt="" />
              </div>
              {/* Menu-part  */}
              <div className="menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
              </div>

              {/* social-icon  */}

              <div className="social">
                  <ul>
                    <li><a href="#"></a><FaFacebookF/> </li>
                    <li><a href="#"></a><FaLinkedinIn/></li>
                    <li><a href="#"></a><FaTwitter/></li>
                    <li><a href="#"></a><FaInstagram/></li>
                  </ul>
              </div>
          </nav>
          {/* hero-Section  */}
          <section className='hero-section'>
              <h1>We Believe In <br /> Impressing That <br /> Last</h1>
              
          </section>
    </>
  )
}

export default Navbar
