/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import useEffect from 'react'
import "../css/AboutSection.css"
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';

export default function AboutSection() {

    //Uses the portfolio button as a link to my portfolio.
    const buttonLink = ({ to, children }) => {
        return <Link to={to}><button>{children}</button></Link>;
    }


    return (
        <>

            <section>
            <div className="aboutWrapper">
                    <Fade bottom duration={1500}>


                        <img src="https://64.media.tumblr.com/006d2b18ea611546f9a38472e91e6772/tumblr_oh0liugTTL1r7i8nxo2_1280.jpg"
                        alt="about_woa" className="aboutBackground" />


                    <h1 className="aboutTitle">ABOUT THIS APP</h1>
                    <div className="aboutParagraphContainer">
                        <p className="aboutParagraph">Weather Of Arrakis is my first Front-End React App. It works in conjunction
                                with the OpenWeatherMap API to interpret and provide the current weather forecast of the desert filming
                                locations used in Dune: Part One and Two respectively. Here, you or any prospective client can let your
                                imaginations run wild by this data. It can help you picture what it would be like to walk the deserts of
                                Arrakis at this very moment.<br/><br/>You or the client may also picture other locations in the Dune universe by
                                searching for a city of your choosing using the city search function component. You can pick Cairo as a
                                stand-in for Arakeen, or a city in Italy to imagine yourself on Kaitain.
                        </p>
                        </div>
                    </Fade>

                    <p className="paragraphTwo">To access the Github repository for this and my other projects, visit my portfolio site below.</p>
                    <div className="buttonContainer">
                    <a href="https://harrisonthacker0451.dev">
                    <button type="button" className="portfolioButton" >My Portfolio</button>
                        </a>
                    </div>

            </div>
            </section>
        </>
    )
}