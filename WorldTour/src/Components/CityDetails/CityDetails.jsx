import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { useCities } from '../../Contexts/CitiesProvider';
import Styles from "./CityDetails.module.css";
import BackButton from '../Reuseable Fompoents/BackButton';
import IsLoading from '../Reuseable Fompoents/IsLoading';
import { usePosition } from '../Hooks/usePosition';

function CityDetails() {
  // ---------Hooks

  //Now we have to read the data stored in the url from its parent

  let { id } = useParams();
  let { getCity, currentCity: CityDetail, isLoading } = useCities();
 

  let navigate = useNavigate();


  // ------------time formating
  let date = new Intl.DateTimeFormat("en", {
    weekday:"long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date());

  // Use Effects

  useEffect(() => {
    getCity(id);
  }, []);

  return <div className='w-100 d-flex justify-content-center'>
  <div className={Styles.cityDetails}>

  
    <div className={Styles.loading}>
    {
       isLoading &&  <IsLoading />
    }
    </div>
  
    <div>
           <p className={`${Styles.specialFont} mb-1 p-0`}>CITYNAME</p>
        <p className={Styles.cityName}>{CityDetail.emoji} {CityDetail.cityName}</p>
        
    </div>

    <div className='mt-1'>
           <p className={`${Styles.specialFont}  mb-1 p-0`}>YOU WENT TO {CityDetail.cityName ? CityDetail.cityName.toUpperCase() :""} ON</p>
           <p>{date}</p>
    </div>


    <div className='mt-1'>
           <p className={`${Styles.specialFont}  mb-1 p-0`}>YOUR NOTES</p>
      <p className={`${Styles.text} `}>{CityDetail.notes ? CityDetail.notes :"Notes not available"}</p>
    </div>
    
    <div className='mt-1'>
            
            <a className={Styles.wikePediaURL} href='#'>Check Out {CityDetail.cityName} on WikiPedia &rarr;</a>
    </div>

    <div className='mt-2'>
      <BackButton onClick={() =>
      {
        navigate(-1);
      }}/>

      
    </div>
    </div>
    </div>
}

export default CityDetails;
