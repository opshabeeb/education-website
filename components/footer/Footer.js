import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'
function Footer() {
    const handleClick=()=>{
        window.scrollTo(0,0)
    }
  return (
    <footer className='footer'>
       <div className="container">
        <div className="footer_wraper">
            <div className="footer-box">
                <div className="logo">
                    <div className="logo-img">
                        <img src={footer}alt="" />
                    </div>
                    <h2>OOLTRA TECH</h2>
                </div>
                Nemo esse similique sequi voluptatem culpa tempore excepturi saepe cupiditate architecto sed, expedita voluptate mollit
            </div>
            <div className="footer-box">
                <h4 className='footer-title'>company</h4>
                <ul className='footer-links'>
                    <li> <Link to="/courses" onClick={handleClick}>Our Programs</Link></li>
                    <li> <Link to="/plan" onClick={handleClick}>Our plan</Link></li>
                    <li> <a href="">Become a member</a> </li>
                </ul>
            </div>
            <div className="footer-box">
            <h4 className='footer-title'>Quick-Links</h4>
                <ul className='footer-links'>
                    
                    <li> 
                    <Link to='/about-us' onClick={handleClick}>about-us</Link>
                         
                         </li>
                         <a href=''></a>
                   <li><Link to='/contact' onClick={handleClick}>conatct-us</Link>
                     </li>
                    <li> <Link to='/support' onClick={handleClick}>support-us</Link> </li>
                     
                </ul>
            </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer