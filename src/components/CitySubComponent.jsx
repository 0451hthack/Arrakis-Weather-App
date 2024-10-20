/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../css/CitySubComponent.css"
import React from 'react'

//City component for searching a city of your choice.
const CitySubComponent = (props) => {
    const { updateCityComponent, retrieveSearchWeather } = props;
    return (
        <>
            <img className="searchLogo" src="../weatherIcons/perfect-day.svg"></img>

            <label className="citySearchLabel">Search For A City</label>

            <form className="searchForm" onSubmit={retrieveSearchWeather}>

                <input type="text" placeholder="Search a city to find its weather." className="weatherSearchField" onChange={(e) => updateCityComponent(e.target.value)}></input>
                <button className="weatherSearchButton" type={"submit"}>Search
            </button>

            </form>


        </>
    )
};

export default CitySubComponent;