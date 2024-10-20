/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import "../css/SearchComponent.css"
import CitySubComponent from "../components/CitySubComponent.jsx"
import ForecastSubComponent from "../components/ForecastSubComponent.jsx"
import React, { useState } from 'react'
import Axios from "axios"

//Icons for different forms of weather. The respective matching one is chosen depending on the chosen city's weather.
 export const forecastIconVariants = {
     "01d": "../weatherIcons/sunny.svg",
     "01n": "../weatherIcons/night.svg",
     "02d": "../weatherIcons/day.svg",
     "02n": "../weatherIcons/cloudy-night.svg",
     "03d": "../weatherIcons/cloudy.svg",
     "03n": "../weatherIcons/cloudy.svg",
     "04d": "../weatherIcons/perfect-day.svg",
     "04n": "../weatherIcons/cloudy-night.svg",
     "09d": "../weatherIcons/rain.svg",
     "09n": "../weatherIcons/rain-night.svg",
     "10d": "../weatherIcons/rain.svg",
     "10n": "../weatherIcons/rain-night.svg",
     "11d": "../weatherIcons/storm.svg",
     "11n": "../weatherIcons/storm.svg",
};

//API Key made secure using an .env file. Made into a variable for use with the search link.
const API_KEY = import.meta.env.VITE_API_KEY

const SearchComponent = () => {

    const [cityComponent, updateCityComponent] = useState();
    const [forecastComponent, updateForecastComponent] = useState();
    //Axios const that uses the API link and key to update the Forecast component to that of the collected city data.
    const retrieveSearchWeather = async (e) => {
        e.preventDefault();
        const searchResult = await Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityComponent}&units=imperial&appid=${API_KEY}`           
        );
        updateForecastComponent(searchResult.data);
    };

    return (
        <>
            <div className="searchComponentContainer">
                {cityComponent && forecastComponent ? (

                    < ForecastSubComponent className="forecastSection" forecastComponent={forecastComponent} cityComponent={cityComponent}></ForecastSubComponent>
                ) : (
                    <CitySubComponent className="citySection" updateCityComponent={updateCityComponent} retrieveSearchWeather={retrieveSearchWeather}></CitySubComponent>
                )}

            </div>

        </>
    )
};

export default SearchComponent;