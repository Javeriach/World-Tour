import { Link } from 'react-router-dom';
import styles from './LandingTextArea.module.css';
function LandingTextArea() {
  return (
    <div
      className={`d-flex flex-column align-items-center text-light ${styles.landingPage}`}
    >
    
      <p className={`text-center w-75 fw-bold ${styles.landingPageHeading}`}>
        Travel the World with World Tour
      </p>
      <p className={`text-center ${styles.paraText}`}>
      Discover a dynamic world map that logs each city you've visited. Relive your unforgettable experiences and share your global adventures with friends through this interactive map. 
      
        </p> <button className={`${styles.startTrackingBtn}`}>
        <Link className={`${styles.startTrackingLink}`} to={'/login'}>
          Start Tracking Now
        </Link>
      </button>
    
    
    </div>
  );
}

export default LandingTextArea;
