/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import useEffect from 'react'
import "../css/Dashboard.css"
import Weather from './Weather'
import ADWeather from './ADWeather'
import WRWeather from './WRWeather'
import axios from 'axios'
import Fade from 'react-reveal/Fade'

export default function Dashboard() {


    const [isOpen, setIsOpen] = useState(false);
    const [isADOpen, setADOpen] = useState(false);
    const [isWROpen, setWROpen] = useState(false);
    const [data, setData] = useState({})
    const [adData, setADData] = useState({})
    const [wrData, setWRData] = useState({})
    const [location, setLocation] = useState("")

    //The API Key would be made secure and hidden when in a real world production app.
    const API_KEY = import.meta.env.VITE_API_KEY
    //Weather API latitude and longitude links for the respective three desert locations.
    const jordanDesert = `https://api.openweathermap.org/data/2.5/weather?lat=28.30&lon=41.00&units=imperial&appid=${API_KEY}`
    const adDesert = `https://api.openweathermap.org/data/2.5/weather?lat=24.47&lon=54.35&units=imperial&appid=${API_KEY}`
    const wrDesert = `https://api.openweathermap.org/data/2.5/weather?lat=29.53&lon=35.42&units=imperial&appid=${API_KEY}`

    //React Event Handler for when the Jordan desert button is clicked. Is complete with exception handling and the page only renders the component if clicked.
    const jordanClick = () => {
        axios.get(jordanDesert).then((response) => {
            setData(response.data)
            console.log(response.data);
            setLocation(jordanDesert)
            setIsOpen((isOpen) => !isOpen);
        })
            .catch((error) => {

                if (error.response) {
                    console.log(error.response.status);
                }

                else if (error.request) {
                    console.log(error.request);
                }

                else {
                    console.log('Error', error.message);
                }

                console.log(error.config);
            });
        
    };


    //React Event Handler for when the Abu Dhabi button is clicked. Is complete with exception handling and the page only renders the component if clicked.
    const adClick = () => {
        axios.get(adDesert).then((response) => {
            setADData(response.data)
            console.log(response.data);
            setLocation(adDesert)
            setADOpen((isADOpen) => !isADOpen);
        })

            .catch((error) => {

                if (error.response) {
                    console.log(error.response.status);
                }

                else if (error.request) {
                    console.log(error.request);
                }

                else {
                    console.log('Error', error.message);
                }

                console.log(error.config);
            });
    };


    //React Event Handler for when the Wadi Rum button is clicked. Is complete with exception handling and the page only renders the component if clicked.
    const wrClick = () => {
        axios.get(wrDesert).then((response) => {
            setWRData(response.data)
            console.log(response.data);
            setLocation(wrDesert)
            setWROpen((isWROpen) => !isWROpen);
        })

            .catch((error) => {

                if (error.response) {
                    console.log(error.response.status);
                }

                else if (error.request) {
                    console.log(error.request);
                }

                else {
                    console.log('Error', error.message);
                }

                console.log(error.config);
            });
    };



    return  (
        <>

            <div className="wrapper">
                <Fade bottom duration={1500}>


                <img src="https://cdnb.artstation.com/p/assets/images/images/073/599/075/large/alexander-winkler-dune-fanart2.jpg?1710044012"
                    alt="arrakis_landscape" className="background" />

                
                <h1 className="appTitle">WEATHER OF ARRAKIS</h1>
                <div className="paragraphContainer">
                <p className="weatherParagraph">Welcome! Have you ever wondered how it may feel to be in the Dune Universe at this very moment?
                    Well here you can get a sense of the current Arrakis weather, by looking at the forecasts for the desert filming locations used in the Dune movies.
    Thanks to OpenWeatherMap's API, your imagination is now a little more grounded in reality. Don't forget your stillsuit!</p>
                    </div>
                </Fade>
               
                        <div className="buttonGroup">
                    <button type="button" className="jordanDesert" onClick={jordanClick}>North Arab Desert, Jordan, Egypt</button>
                    <div className="divider" />
                    &nbsp;
                    &nbsp;
                    <button type="button" className="adDesert" onClick={adClick}>Abu Dhabi Desert, United Arab Emirates</button>
                    <div className="divider" />
                    &nbsp;
                    &nbsp;
                    <button type="button" className="wrDesert" onClick={wrClick}>Wadi Rum Desert, Jordan</button>
                </div>


                <div className="widgetContainer">
                {isOpen && <Weather className="arabWeather" arabWeather={data} />}
                &nbsp;
                &nbsp;
                 
                {isADOpen && <ADWeather className="adWeather" adWeather={adData} />}
                        &nbsp;
                        &nbsp;


                    {isWROpen && <WRWeather className="wrWeather" wrWeather={wrData} />}
                </div>

                <p className="widgetTip">Mobile Users: Please click on the location button again to close out the widget, before clicking on another location.</p>

               
            </div>

        </>
    )
}