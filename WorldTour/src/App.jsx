import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'bootstrap';
import { Toaster } from 'react-hot-toast';
import ProtectRoute from './ProtectRoutes/ProtectRoute';
import { AuthUserProvider } from './Contexts/AuthUserProvider';
import { CitiesProvider } from './Contexts/CitiesProvider';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ProductsPage from './Pages/AboutPage/ProductsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PricingPage from './Pages/PricingPage/PricingPage';
import TrackingPage from './Pages/TrackingPage/TrackingPage';
import CitiesPage from "./Pages/CitiesPage/CitiesPage";
import CountriesPage from "./Pages/CountriesPage/CountriesPage";
import Form from './Components/CityForm/Form';
import CityDetails from "./Components/CityDetails/CityDetails";
function App() {
  return (
    <AuthUserProvider>

      <CitiesProvider>
        <BrowserRouter>
          <Toaster/>
          <Routes>
            <Route index element={<HomePage />}></Route>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/tracking"
              element={
                <ProtectRoute>
                  <TrackingPage />
                </ProtectRoute>
              }
            >
                  <Route index element={<Navigate replace to="cities" />} />

                  <Route path="cities" element={<CitiesPage />}></Route>

                  {/* It i s  passing the id as a params from the city to the new Router*/}
                  <Route path="cities/:id" element={<CityDetails />}></Route>

                  <Route path="form" element={<Form />} />

                  <Route path="country" element={<CountriesPage />} />

            </Route>
            
            <Route path="/*" element={<h1>Page Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthUserProvider>
  );
}

export default App;
