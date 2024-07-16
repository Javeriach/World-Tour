import Styles from './OurSpecilites.module.css';

import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import MapIcon from '@mui/icons-material/Map';

function OurSpecilities() {
 
  return (
    <div className={`${Styles.container} d-flex justify-content-center flex-column align-items-center`}>
       <h2 className={`${Styles.title} `}>Why Choose Us</h2>
       <div class={`row justify-content-center align-items-center  text-dark h-75 `}>
          <div class="col d-flex justify-content-center">
              
        <div className={`${Styles.block}`}>
          <div className={`${Styles.icon} `}>
            <MapIcon color="primary" sx={{ fontSize: 50 }} />
          </div>
          <h3 className={`${Styles.heading}  w-100 text-center text-primary`}>
            Diverse Location
          </h3>
          <p className={`${Styles.paragraph} text-dark`}>
            Easy, interactive map for marking locations, countries and adding
            notes, accessible for all users.
          </p>
        </div>
      </div>
      <div class="col  d-flex justify-content-center">
       
              <div className={`${Styles.block}`}>
          <div className={`${Styles.icon} w-100`}>
            <label>
              <SecurityIcon color="primary" sx={{ fontSize: 50 }} />{' '}
            </label>
          </div>
          <h3 className={`${Styles.heading}  w-100 text-center text-primary`}>
            Diverse Location
          </h3>

          <p className={`${Styles.paragraph} text-dark`}>
            Strong data security and reliable storage ensure that our user
            information is safe , secure and accessible.
          </p>
        </div>
      </div>
      <div class="col  d-flex justify-content-center">
        <div className={`${Styles.block}`}>
          <div className={`${Styles.icon} w-100`}>
            <label htmlFor="">
              <SettingsIcon color="primary" sx={{ fontSize: 50 }} />{' '}
            </label>
          </div>
          <h3 className={`${Styles.heading}  w-100 text-center text-primary`}>
            Diverse Location
          </h3>

          <p className={`${Styles.paragraph} text-dark`}>
            Personalized maps and notes with various customization options for a
            unique user experience.
          </p>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default OurSpecilities;
