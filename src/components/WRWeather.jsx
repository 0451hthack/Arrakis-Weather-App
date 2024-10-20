/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import "../css/Dashboard.css"
import Dashboard from './Dashboard'
import wrWeather from './Dashboard'
import "../css/WRWeather.css"

const WRWeather = ({ wrWeather }) => {

    //Weather Icon for Wadi Rum weather component.
    const imgURL = `https://openweathermap.org/img/w/01d.png`;

    /**
     * Gathers the current weather forecast details for the Wadi Rum location.
     */

    return (
        <div>
            {wrWeather.weather ? (
                <div className="wrWeatherContainer">
                    <div className="wrSubWrapper">
                        <div className="flexColumnWR">
                            <div className="flexColumn2WR">
                                <div>
                                    <p className="widgetTitleWR">
                                        {"Wadi Rum Desert"},
                                        {" Jordan"}
                                    </p>
                                    <p className="weatherDescriptionWR">
                                        {wrWeather.weather[0].
                                            description}                              
                                    </p>
                                </div>

                                <div>
                                    <h1 className="weatherTempWR">                                   
                                        {wrWeather.main.temp.
                                            toFixed()} Degrees F
                                    </h1>
                                </div>

                            </div>
                        </div>

                        <div className="widgetDetailsWR">
                            <div className="widgetSubDetailsWR">
                                <img src={imgURL} alt="" className="weatherImageWR" />
                            </div>
                            {wrWeather.name !== undefined ? (
                                <div className="weatherSubHeaderWR">
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderWR">Humidity</p>
                                        <p>                             
                                            {wrWeather.main.humidity} Degrees F
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderWR">Air Pressure</p>
                                        <p>
                                            {wrWeather.main.pressure} hPa
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderWR">Feels Like</p>
                                        <p>                                           
                                            {wrWeather.main.feels_like.toFixed()} Degrees F
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderWR">Wind Speed</p>
                                        <p className="font-bold w-28">
                                            {wrWeather.wind.speed.toFixed()} MPH
                                        </p>
                                    </div>

                                </div>
                            ) : null}
                        </div>

                    </div>

                </div>

            ) : null}
        </div>
    )
}



export default WRWeather