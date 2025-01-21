import React, { Children, useState, useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  let base_url = "https://world-tour-zeta.vercel.app";

  let initialState = {
    citiesData: [],
    currentCity: [],
    isLoading: false,
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case 'citiesData':
        return { ...state, citiesData: action.payLoad };

      case 'loading':
        return { ...state, isLoading: action.payLoad };

      case 'cur_city':
        return { ...state, currentCity: action.payLoad };
      
      case "cities/createCity":
        return {...state,currentCity:action.payLoad,citiesData: [...state.citiesData, action.payLoad]}
    
      default:
        throw new Error("Unknown action type!!");
    
    }
  };

  let [{ citiesData, currentCity, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchData() {
    try {
      dispatch({ type: 'loading', payLoad: true });
      let data = await fetch(`${base_url}/cities`);
      let result = await data.json();
      dispatch({ type: 'citiesData', payLoad: result });
    } catch (error) {
      toast.error("Internet Connectivity Problem");
      throw new Error("Some error occured while fetching cities");   
    } finally {
      dispatch({ type: 'loading', payLoad: false });
    }
  }

  useEffect(() => {
    

    fetchData();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: 'loading', payLoad: true });
      let data = await fetch(`${base_url}/cities/${id}`);
      let result = await data.json();
      console.log(result);

      dispatch({ type: 'cur_city', payLoad: result });

    }
    catch (error) {
      toast.error("Some thing Went Wrong");
      throw new Error(error.message);
    }
    finally {
      dispatch({ type: 'loading', payLoad: false });
    }
  }

  async function createNewCity(newCity) {
    const updatedCity = { ...newCity, id: crypto.randomUUID() };
    try {
      dispatch({ type: 'loading', payLoad: true });
      const result = await fetch(`${base_url}/cities`, {
        method: 'POST',
        body: JSON.stringify(updatedCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await result.json();
      dispatch({ type: 'cities/createCity', payLoad: newCity });
      dispatch({ type: 'cur_city', payLoad: updatedCity });
      fetchData();
      toast.success("City Created Successfully!");
    } catch (error) {
      toast.error("Something went wrong");
      throw new Error(`There is some error in posting new data and fetching data from
      the api`);
    } finally {
      dispatch({ type: 'loading', payLoad: false });
    }
  }

  async function deleteHandler(id) {
    try {
      dispatch({ type: 'loading', payLoad: true });
      await fetch(`${base_url}/cities/${id}`, {
        method: 'DELETE',
      });
      dispatch({
        type: 'citiesData',
        payLoad: citiesData.filter((City) => id != City.id),
      });
      toast.success("City Removed !");
    } catch {
      toast.error("Removing City Failed");
      alert('There is some error in deleting the selectind cities');
    } finally {
      dispatch({ type: 'loading', payLoad: false });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        citiesData,
        currentCity,
        getCity,
        isLoading,
        createNewCity,
        deleteHandler,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const citiesData = useContext(CitiesContext);
  return citiesData;
}

// export default {CitiesProvider , useCities};
export { CitiesProvider, useCities };
