/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import "../css/Dashboard.css"
import Dashboard from './Dashboard'
import adWeather from './Dashboard'
import "../css/ADWeather.css"

const ADWeather = ({ adWeather }) => {

    //Weather Icon for Abu Dhabi weather component.
    const imgURL = `https://openweathermap.org/img/w/01d.png`;

    return (
        <div>
            {adWeather.weather ? (
                <div className="adWeatherContainer">
                    <div className="adSubWrapper">
                        <div className="flexColumnAD">
                            <div className="flexColumn2AD">
                                <div>
                                    <p className="widgetTitleAD">
                                        {"Abu Dhabi Desert"},
                                        {" UAE"}
                                    </p>
                                    <p className="weatherDescriptionAD">
                                        {adWeather.weather[0].
                                            description}
                                    </p>
                                </div>

                                <div>
                                    <h1 className="weatherTempAD">
                                        {adWeather.main.temp.
                                            toFixed()} Degrees F
                                    </h1>
                                </div>

                            </div>
                        </div>

                        <div className="widgetDetailsAD">
                            <div className="widgetSubDetailsAD">
                                <img src={imgURL} alt="" className="weatherImageAD" />
                            </div>
                            {adWeather.name !== undefined ? (
                                <div className="weatherSubHeaderAD">
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderAD">Humidity</p>
                                        <p>
                                            {adWeather.main.humidity} Degrees F
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderAD">Air Pressure</p>
                                        <p>
                                            {adWeather.main.pressure} hPa
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderAD">Feels Like</p>
                                        <p>
                                            {adWeather.main.feels_like.toFixed()} Degrees F
                                        </p>
                                    </div>
                                    <div className="flex-justify-between gap-x-8">
                                        <p className="infoHeaderAD">Wind Speed</p>
                                        <p>
                                            {adWeather.wind.speed.toFixed()} MPH
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



export default ADWeather