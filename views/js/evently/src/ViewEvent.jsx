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
                    <div className='title'> 
                        <h1>Title</h1> 
                    </div>
                    <h3>[Time and date]</h3>
                    <h3>[Description]</h3>
                    <h3>[Max attendees]</h3>
                    <br></br>
                    <h3>[Host name]</h3>
                    <h3>[Contact info]</h3>
                    <br></br>
                </div>
                <div className="image-container">
                    <img src={placeholder} className="image"></img>
                </div>
            </div>
            <div className='rsvp-button-container'>
                <button className="rsvp-button">
                    RSVP here
                </button>
            </div>
        </div>
        
    )
}

export default ViewEvent;