import React, {useState, useEffect} from 'react';
import './ViewEvent.css';
import Header from './header.js';
import placeholder from './placeholder-cat.jpg'



function ViewEvent() {
    const [result, setResult] = useState(0)
    const fetchParty = async ()=>{
        try {
            var res = await fetch("http://localhost:3000/api/event/" + "1", 
            {
              method: "GET",
              mode: "cors",
            })

            var party = await res.json()
            // console.log(party)
            setResult(party[0])
            // console.log(result)
            // console.log("Sharron" + JSON.parse(res))
    
            // setresult(res)
            } catch (err){
                console.log(err)
            }

    }

    useEffect(() => {
        fetchParty()
        

      }, []);
    //   useEffect(() => {
    //     console.log(result)
        

    //   }, [result]);

    //   var party = JSON.parse(result)
    //   console.log(party)
    
    // console.log(JSON.parse(result))    
    
    return(
        <div className="wrapper"> 
            <Header/>
            <div className="container">
                <div className="info-container">
                    <h1> You are invited! </h1>
                    <div className="title"> 
                        <h1>{result.event_title}</h1> 
                    </div>
                        <h3>at {result.time} on {result.date}</h3> 
                    <div> <br></br>
                        <h3>{result.description}</h3>
                        <h3>Max attendees: {result.max_attendees}</h3>
                        <br></br>
                        <h3>Hosted by: {result.host_name}</h3>
                        <h3>{result.contact_info}</h3>
                    </div>
                    <br></br>
                </div>
                <div className="image-container">
                    <img src={placeholder} className="image"></img>
                    <br></br>
                    <button className="rsvp-button">
                        RSVP here
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default ViewEvent;