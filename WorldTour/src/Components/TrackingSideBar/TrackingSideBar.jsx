import { Link, Outlet } from 'react-router-dom';
import Styles from './TrackingSideBar.module.css';
import icon from '../../Images/icon.png';
import { NavLink } from 'react-router-dom';

function TrackingSideBar() {
  return (
    <div className={Styles.trackingNavbar}>
      <Link className={`navbar-brand ${Styles.WorldWise}  mt-4`} to={'/'}>
        <h1>
          <img
            src={icon}
            className={`${Styles.travelLogo}`}
            alt="travelLogo"
          />{' '}
          WorldWise
        </h1>
      </Link>

      <ul className={`d-flex mt-3 ${Styles.Btns_Row}`}>
        <li>
          <NavLink
            className={`text-decoration-none ${Styles.Btns_Row_Link}`}
            to="cities"
          >
              Cities
          </NavLink>
        </li>

        <li>
          <NavLink
            className={`text-decoration-none ${Styles.Btns_Row_Link}`}
            to="country"
          
          >
           Country
            
          </NavLink>
        </li>
      </ul>

      <div className='d-flex flex-column justify-content-between  '>
      <div className={`${Styles.CitiesCountryBox}`}>
        <div>
          <Outlet />
        </div>
      </div>

      <div className={`${Styles.copyRight}`}>
        <p className='mb-0 text-center'>&copy;CopyRight.ght 2023 by WorldWise Inc</p>
        <p className={`mt-0 text-center ${Styles.developedBy}`}>Developed By Javeria Kanwal</p>
     </div>
      </div>
     
    </div>
  );
}

export default TrackingSideBar;
