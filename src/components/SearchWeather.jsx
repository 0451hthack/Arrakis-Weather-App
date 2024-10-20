/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "../css/SearchWeather.css"
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import ReactDOM from 'react-dom'
import SearchComponent from "../components/SearchComponent.jsx"
import ReactAnimatedWeather from 'react-animated-weather'
import { useEffect, useState } from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';


/**
 * API Key for Weather app. In a real world production app, this would be made secure and hidden.
 */
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchWeather() {
        

    return (
        <>
        <section>
                <div className="searchContainer">
                    <Fade bottom duration={1500}>

                    <img src="https://cdnb.artstation.com/p/assets/images/images/025/300/839/large/marcin-basta-1front.jpg?1585340882"
                        alt="caladan_landscape" className="searchBackground" />

                <h1 className="searchHeader">Looking For Other Places?</h1>
                <div className="searchParagraphContainer">
                    <p className="searchParagraph">Need a change of scenery? Perhaps you want to look at Norway to picture yourself on Caladan.
                        Or maybe check various cities in Italy, to get a sense of what life would be like on Kaitain, the capital of House Corrino.
                            Either way, you can search for whichever cities you desire, for the Dune Universe is as vast as our own. Refresh the page to enter
                        a new location.</p>
                        </div>        
                    </Fade>
                </div>
                
                <div className="reactWeatherContainer">

                    <SearchComponent className="searchComponent" />
                

                </div>
            </section>
        </>
    ) 
}