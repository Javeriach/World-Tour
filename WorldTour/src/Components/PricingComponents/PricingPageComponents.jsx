import styles from './PricingPageComponents.module.css';
import BuildingImage from '../../Images/BuildingImage.jpg';
function PricingPageComponents() {
  return (
  <>
      <div>
          <img
            className={styles.image}
            src={BuildingImage}
            alt="BuidingImages"
          />
      </div>
      
      
      <div className={`h-50 ${styles.image} ${styles.textSection}`} >
          <h2 className='text-center text-dark w-100'>
            Simple pricing. Just $10/month.
          </h2>
        <p className={styles.pricingText}>
        Unlock the full potential of World Tour Explorer for just $9 per month. This subscription offers unlimited access to our interactive map, personalized travel logs, and a comprehensive list of visited cities. Enjoy a seamless, ad-free experience and join a community of passionate travelers. Start your global adventure today!
         </p>
      </div>
  </>
     
   
 
  );
}

export default PricingPageComponents;
