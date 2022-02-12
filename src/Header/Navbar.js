import {React,useState }from 'react';
import "../styles/styles.css"
import "../styles/responsive.css"
import {AiOutlineBars} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
function Navbar() {
  const [collapse,setCollapse] = useState(true);

  const toggle =()=>{
    setCollapse(!collapse);
  }
  return <>
       <nav className="navbar" >
            <ul className={collapse ? "menu-items" : "mobile-menu-items"}>

              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Investing</a>
              </li>
              <li>
                <a href="#">Market</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>

            </ul>
            <button className='mobile-menu-icon' onClick={toggle}>
             {collapse ? (<AiOutlineBars/>
             ) : <ImCross/>}
            </button>
 
            <ul className="menu-links" id='menu-links'>
              <li id="login">
                <a href="#" className="login-link">
                  Login
                </a>
              </li>
              <li id="dashboard">
                <a href="#" className="starred-link login-link">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          
  </>;
}

export default Navbar;
