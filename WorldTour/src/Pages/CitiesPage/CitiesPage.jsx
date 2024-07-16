
import IsLoading from '../../Components/Reuseable Fompoents/IsLoading';
import styles from './CitiesPage.module.css';
import CityItem from '../../Components/CityItemCreater/CityItem';
import { useCities } from '../../Contexts/CitiesProvider';

function CitiesPage() {
  const {citiesData, isLoading} = useCities();
  return (
    
    <div className={`${styles.CitiesPage} `}>
    
      <div>
        {
          isLoading &&  <IsLoading/>
        }

      </div>

      <div>
        {!isLoading && citiesData.length === 0 ? <div className='h-100 w-100 d-flex justify-content-center align-items-center'> <p>No Cities Record Available</p> </div>:""}
      </div>

      {citiesData.length > 0 ? (
        <> 
        {citiesData.map((element, index) => (
        <CityItem city={element} key={index} />
        ))}
        </>
      ) : (
       ''
    )}
   </div>
 );
}

export default CitiesPage;
