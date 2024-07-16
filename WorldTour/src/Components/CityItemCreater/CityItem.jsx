import Styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { useCities } from '../../Contexts/CitiesProvider';

function CityItem({ city }) {
  let { currentCity , deleteHandler} = useCities();
  const formatDate = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(city.date));

  let deleteHandlerFun = (e) =>
  {
    e.preventDefault();
    deleteHandler(city.id);
  }

  return (
    <Link
      className={`${Styles.singleCityItem} ${currentCity.id === city.id  ? Styles.city_active:""} mb-1`}
      to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
    >
      <div className={Styles.City_dataDiv}>
      <div className='d-flex'>
        <h2>{city.emoji}</h2>
      <label className={`mt-1 ms-1 ${Styles.heading}`}>{city.cityName}</label>

      </div>
        <label className={`me-2 ${Styles.heading}`}>({formatDate})</label>
      </div>

      <div>
        <label className={Styles.deleleIcon} onClick={deleteHandlerFun}>x</label> 
      </div>

      
    </Link>
  );
}

export default CityItem;
