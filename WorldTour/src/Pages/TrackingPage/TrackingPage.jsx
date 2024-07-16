import Styles from './TrackingPage.module.css';
import TrackingSideBar from '../../Components/TrackingSideBar/TrackingSideBar';
import Map from '../../Components/Map/Map';
import Navbarr from '../../Components/Navbar/Navbar';
function TrackingPage() {
  return (
    <>
      <div className={Styles.Navbarr}>
      <Navbarr />

      </div>
      <div className={`${Styles.trackingPage}`}>
        <div>
          <TrackingSideBar />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
}

export default TrackingPage;
