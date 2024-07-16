import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Buttons from '../Reuseable Fompoents/Buttons';
import Styles from './Form.module.css';
import { usePosition } from '../Hooks/usePosition';
import Message from '../Reuseable Fompoents/Message';
import { useEffect, useState } from 'react';
import { useCities } from '../../Contexts/CitiesProvider';
import toast from 'react-hot-toast';

function Form() {
 
  const Navigate = useNavigate();
  let { lat, lng } = usePosition();
  let BaseURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
  let [cityData, setCityData] = useState({
    cityName: '',
    country: '',
    countryName: '',
    countryCode: '',
    emoji: '',
    date: 0,
    notes:""
  });

  let [date, setDate] = useState(new Date());
  let { createNewCity } = useCities();
  let navigate = useNavigate();

  function convertToFlag(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  

  useEffect(() => {

    if (!lat && !lng) return;
    async function fetchCity() {
      console.log(lat, lng);
      try {
        let data = await fetch(`${BaseURL}?latitude=${lat}&longitude=${lng}`);
        let result = await data.json();
        let emoji = convertToFlag(result.countryCode);
        
        setCityData({
          cityName: result.city || result.locality,
          country: result.countryName,
          countryCode: result.countryCode,
          date: date,
          emoji: emoji,
          position: { lat: result.latitude, lng: result.longitude },
        });
      } catch (err)
      {
        toast.error("Something Went Wrong !!");
      }
     
    }

    fetchCity();
  }, [lat, lng]);




  async function handleSubmitForm(e)
  {
    e.preventDefault();
    await createNewCity(cityData);
    navigate("/tracking/cities");
  }


  // -----------------------------JSX--------------------------

  if (!lat && !lng) {
    return (
      <div className='d-flex justify-content-center  w-100'>
      <div className={`${Styles.message} ${Styles.form}`}>
        <Message
          message={'Please click anywhere on the map to select any city😊'}
        />
      </div>
      </div>
    );
  }

  if (!cityData.countryCode)
  {
    return (
      <div className='d-flex justify-content-center  w-100'>
      <div className={`${Styles.message} ${Styles.form}`}>
        <Message
          message={'It seems not be a city!! Please click somewhere else!😊'}
        />
      </div>
      </div>
    );
    }
  return (
    <div className='d-flex justify-content-center  w-100'>
    <form className={Styles.form} onSubmit={handleSubmitForm}>

      <div>
        <label htmlFor="" className="mb-1">
          City Name
        </label>
        <br />
        <div className='d-flex'>
          <input type="text" value={cityData.cityName}
            className={Styles.cityNameInput} onChange={(e)=>setCityData({...cityData,cityName:e.target.value,position:{lat,lng}})} />
       
          <div className={Styles.emoji_div}>
          <span className={`${Styles.emoji}`}>{cityData.emoji}</span>

          </div>

        </div>
      </div>

      <div className={`mt-2 ${Styles.date_div}`}>
        <label htmlFor="" className="mb-1">
          When did you go?
        </label>
        <br />
        {/* <input type="text" /> */}
        <DatePicker
          onChange={(date) => setDate(date)}
          selected={date}
          format="dd/MM/yyyy"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="" className="mb-1">
          Notes about your trip to
        </label>
        <br />
      </div>
      <div>
        <textarea
          name=""
          id=""
         
          placeholder="Enter your notes 😄"
          className={`ps-2 ${Styles.textarea}`}
          onChange={(e)=>setCityData({...cityData,notes:e.target.value})}
        ></textarea>
      </div>

      <div className="d-flex justify-content-between mt-2">
        <Buttons type="submit" >Add</Buttons>
        <Buttons
          type="Back"
          onClick={(e) => {
            // e.preventDefault();
            Navigate(-1);
          }}
        >
          &larr;Back
        </Buttons>
      </div>
    </form>
    </div>
  );
}

export default Form;
