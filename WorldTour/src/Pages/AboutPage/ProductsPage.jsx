import Navbarr from '../../Components/Navbar/Navbar';
import styles from './ProductsPage.module.css';
import AboutWorldTour from '../../Images/AboutWorldTour.jpg';
function ProductsPage() {
  return (
    <div >
    <div className={styles.navbar}>
    <Navbarr />
    </div>
   

    <div className={`${styles.pricing_section} d-flex  flex-wrap w-100  justify-content-center ${styles.innersection} align-items-center `}>

        
        
    <div>
          <img
            className={styles.image}
            src={AboutWorldTour}
            alt="BuidingImages"
          />
      </div>
      
      
      <div className={`h-50 ${styles.image} ${styles.textSection}`} >
          <h2 className='text-center w-100'>
          About WorldWide
          </h2>
          <p className={styles.pricingText}>
          Welcome to World Tour Explorer, your ultimate travel companion! Our interactive map allows you to select any country and document your unforgettable journeys. Share your experiences and explore others' adventures. Track your travels as you compile a personalized list of all the cities you have visited. Start your global adventure with World Tour Explorer and make every trip a memorable story!
          </p>
        </div>
    </div>
    </div>
    
    
  );
}

export default ProductsPage;
