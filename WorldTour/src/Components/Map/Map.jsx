import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, Popup, Marker, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';



import Styles from './Map.module.css';
import { useCities } from '../../Contexts/CitiesProvider';
import Buttons from "../Reuseable Fompoents/Buttons";
import {useGeolocation} from '../Hooks/useGeolocation';
import UserObject from '../UserObject/UserObject';


function Map() {

  const [serachParams, setParams] = useSearchParams();
  let maplat = serachParams.get('lat');
  let maplng = serachParams.get('lng');
  const Navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  let { citiesData } = useCities();

  let {
    position, getPosition
  }= useGeolocation();

  useEffect(() => {
    if (maplat && maplng)
    {
      setMapPosition([maplat, maplng]);
    }

  }, [maplat, maplng]);
  
  useEffect(() =>
  {
    if (position)
    {
      setMapPosition([position.lat, position.lng]);
      console.log(position);
    }

  }, [position])
  
  return (
    <div
      className={`${Styles.mapDiv}`}
    >
      
      <UserObject/>
      
        
     
      {
        !position &&
      <Buttons type="useYourLocation" onClick={getPosition}> Use Your Location</Buttons>
      }
      
      <MapContainer center={mapPosition}
        zoom={6} scrollWheelZoom={true}
        className={Styles.MapContainer}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        
        
        {
           
          citiesData.map((city) =>
          (
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
           <Popup>
                <h5> {city.cityName}</h5>
              </Popup>
              
         </Marker>
           
          ))
        }

        <ChangeMapCenter position={mapPosition} />

        <DetectMapClick/>
          </MapContainer>
          <div className={`${Styles.useLocation_div}`}>
      </div>
    </div>
  );
}

function ChangeMapCenter({position}) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectMapClick()
{
  const navigate = useNavigate();
  useMapEvents({
    click: (e) =>
    {
      //here will also pass the selected lat and lng to the form subpage
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);

    }
  })
}

export default Map;



