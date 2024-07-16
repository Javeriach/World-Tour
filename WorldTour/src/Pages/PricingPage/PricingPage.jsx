import PricingPageComponents from '../../Components/PricingComponents/PricingPageComponents';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './PricingPage.module.css';
function PricingPage() {
  
       
  // <div className={`d-flex  flex-wrap w-75 justify-content-center ${styles.innersection} align-items-center `}>

  return (
    <div >
      <div className={styles.navbar}>
      <Navbar />
      </div>
     
  
      <div className={`${styles.pricing_section} d-flex  flex-wrap w-100  justify-content-center ${styles.innersection} align-items-center `}>
      <PricingPageComponents />
      </div>
    </div>
  );
}

export default PricingPage;
