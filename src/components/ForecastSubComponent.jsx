/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import "../css/ForecastSubComponent.css"
import { forecastIconVariants } from "../components/SearchComponent.jsx";


//Displays the section icons for the city search results.
export const weatherSectionIcons = {
    Feels_Like: "../weatherIcons/temp.svg",
    Humidity: "../weatherIcons/humidity.svg",
    Pressure: "../weatherIcons/pressure.svg",
    Wind: "../weatherIcons/wind.svg",
};

const CityWeatherComponent = (props) => {
    const { name, value } = props;
    return (
        <div className="Component1Container">
            <img className="Component1Icon" src={weatherSectionIcons[name]} />
            <span className="Component1Label">
                {value}
                <span>{name}</span>
            </span>

</div>
    )
}

const ForecastSubComponent = (props) => {
    const { forecastComponent } = props;
    return (
        <>

            <div className="searchWeatherDetails">

                <span className="weatherSpan">{`${Math.floor(forecastComponent?.main.temp)} Degrees F`}
                    {` | ${forecastComponent?.weather[0].description}`}
                </span>
                <img className="weatherLogo" src={forecastIconVariants[forecastComponent?.weather[0].icon]}></img>

            </div>

            <span className="weatherCitySpan">{`${forecastComponent?.name}, ${forecastComponent?.sys?.country}`}</span>

            <span className="weatherSpanHeader">Weather Details:</span>

            <div className="detailsSectionContainer">

                <CityWeatherComponent name={"Feels_Like"} value={forecastComponent?.main?.feels_like.toFixed()} />
                <CityWeatherComponent name={"Humidity"} value={forecastComponent?.main?.humidity} />
                <CityWeatherComponent name={"Pressure"} value={forecastComponent?.main?.pressure} />
                <CityWeatherComponent name={"Wind"} value={forecastComponent?.wind?.speed} />


            </div>

        </>
    )
};

export default ForecastSubComponent;