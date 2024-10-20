/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import "../css/Dashboard.css"
import Dashboard from './Dashboard'
import arabWeather from './Dashboard'
import "../css/Weather.css"

const Weather = ({ arabWeather }) => {

    const iconCode = arabWeather.weather[0].icon;
    //Weather icon for North Arab Desert location.
    const imgURL = `https://openweathermap.org/img/w/01d.png`;

    /**
     * Gathers the current weather forecast details for the North Arab Desert location.
     */

    return (
        <div>
            {arabWeather.weather ? (
                <div className="arabWeatherContainer">
                    <div className="arabSubWrapper">
                        <div className="flexColumn">
                            <div className="flexColumn2">
                                <div>
                                    <p className="widgetTitle">
                                        {"North Arab Desert"},
                                        {" Jordan"}
                                    </p>
                                    <p className="weatherDescription">
                                        {arabWeather.weather[0].
                                            description}  
                                    </p>
                                </div>

                                <div>
                                    <h1 className="weatherTemp">
                                        {arabWeather.main.temp.
                                            toFixed()} Degrees F
                                </h1>
                                </div>
               
                            </div>
                        </div>

                        <div className="widgetDetails">
                            <div className="widgetSubDetails">
                                <img src={imgURL} alt="" className="weatherImage" />
                            </div>
                            {arabWeather.name !== undefined ? (
                                <div className="weatherSubHeader">
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeader">Humidity</p>
                                        <p>
                                            {arabWeather.main.humidity} Degrees F
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeader">Air Pressure</p>
                                        <p>
                                            {arabWeather.main.pressure} hPa
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeader">Feels Like</p>
                                        <p>
                                            {arabWeather.main.feels_like.toFixed()} Degrees F
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeader">Wind Speed</p>
                                        <p>
                                            {arabWeather.wind.speed.toFixed()} MPH
                                        </p>
                                    </div>
                                 
                                </div>
                            ): null}
                        </div>

                    </div>

                </div>

            ): null}
        </div>
    )
}



export default Weather