import CountryItem from '../../Components/CountryItemCreater/CountryItem';
import Styles from './CountriesPage.module.css';
import {useCities} from '../../Contexts/CitiesProvider';

function Countries() {
  const {citiesData} = useCities();
  const countries = citiesData.reduce((countryData, element, index, array) => {
    if (!countryData.map((ele) => ele.country).includes(element.country)) {
      return [
        ...countryData,
        { country: element.country, emoji: element.emoji },
      ];
    } else return countryData;
  }, []);

  return (
    <div className={Styles.CountryData}>
      {countries.map((element, index) => (
        <CountryItem countryDataObj={element} key={index} />
      ))}
    </div>
  );
}

export default Countries;
