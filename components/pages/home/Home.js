import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from '../courses/Courses'
import Community from '../community/Community'
import Plans from '../plans/Plans'



function Home() {
    const handleClick=()=>{
        window.open('https://youtube.com')
    }
  return (
    <><section>
    <div className="container">
        <div className="home-container">
            <div className="homecontent">
               <h2 className='section_title'>Learn Everything For Free !</h2>
               <p>Master trending technologies with OOLTRA TECH . Invest Your Time and return Skills</p>
               <div className="homebuttons">
                <button className='register-button' onClick={handleClick}>Get Start</button>
                <button className='register-button' onClick={handleClick}>watch Now</button>
               </div>
            </div>
            <div className="homeimage">
                 <div className="home-img-wrapper">
                    <div className="box-01">
                        <div className="box-img">
                            <img src={meta} alt="" />
                        </div>
                        <div className="whatsapp-container">
                            <h5>500+ students</h5>
                            <AiOutlineWhatsApp/>
                            
                        </div>
                        <div className="support">
                            <h5>Active Support</h5>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</section>
<Courses/>
<Community/>
<Plans/>
</>
    
  )
}

export default Home