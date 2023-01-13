import React, {useState} from 'react';
import './ViewEvent.css';
import Header from './header.js';
import placeholder from './placeholder-cat.jpg'

function ViewEvent() {
    return(
        <div className="wrapper"> 
            <Header/>
            <div className="container">
                <div className="info-container">
                    <fieldset className="title">
                        <h1> [Title] </h1>
                    </fieldset>
                </div>
                <div className="image-container">
                    <img src={placeholder} className="image"></img>
                </div>
            </div>
            <button className="rsvp-button">
                RSVP here
            </button>
            
        </div>
        
    )
}

export default ViewEvent;