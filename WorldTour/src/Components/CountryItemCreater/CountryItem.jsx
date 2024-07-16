import Styles from './CountryItem.module.css';
function CountryItem({ countryDataObj }) {
  return (
    <li  className={`${Styles.singleCountryItem} mb-1 `}>

      <h2>{countryDataObj.emoji}</h2>
      <label className='mb-2 ms-1 pe-1 '>{countryDataObj.country}</label>

    </li>
  );
}

export default CountryItem;
