import styles from './HomePage.module.css';
import Navbarr from '../../Components/Navbar/Navbar';
import LandingTextArea from '../../Components/LandingTextArea/LandingTextArea';
import OurSpecilities from '../../Components/WhatWeDo/OurSpecilities';
import LondonNights from "../../Images/LondonNights.jpg";
import Footer from '../../Components/Footer/Footer';

function HomePage() {
  return (
    <div>
      
      <div>
      <Navbarr />
      </div>
      
      <div  className={`${styles.firstSection}`}>
        
      <div className={`${styles.homePage}`}></div>
      <div className={`${styles.overlayHomePage}`}></div>
      <div className={`${styles.homeFullPage} `}>
        <LandingTextArea />
      </div>
      </div>
      <OurSpecilities/>
      <div class="p-2">
      <div class="row align-items-center">
        <div class="col me-1">
            <img className={`w-100 ${styles.image}`} src={LondonNights}  />
        </div>
        <div class={`col d-flex flex-column ${styles.contactContainer} align-items-center`}>
            <label className={styles.contactHeading}>Contact Us</label>
            <p className='text-dark w-100  text-center'>Any question or remarks?Just give us your email We will contact you.</p>
            <input type="text" placeholder='Name' className='w-75 mt-1' />
            <input type="text" placeholder='Email' className='w-75 mt-1'/>
            <textarea placeholder='Enter your message' className='p-2 w-75 h-50 mt-1'/>
            <div className='w-100 align-items-start'> 
            <button className={`${styles.submitBtn} py-2 px-5  bg-primary border-0  text-light mt-1`}>Send</button>

           </div>
          </div>
     
        </div>
      </div>
   
      <Footer/>


    </div>
  );
}

export default HomePage;
