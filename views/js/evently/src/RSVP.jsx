import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './App.css'
import './RSVP.css'
import logo from './bitly-logo.png';

function RSVP() {
  const [EventID, setEventID ] = useState("");
  const [ResponderName, setResponderName] = useState("");
  const [RSVP, setRSVP] = useState("");
  let { event_id } = useParams();
    const handleSubmit = async (e) => {
        console.log("Hello")
        e.preventDefault()
      try {
      var res = await fetch(`http://localhost:3000/api/event/${event_id}/rsvp`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
           event_id: parseInt(event_id) , name: ResponderName, rsvp: RSVP
        }),
      });
      }
       catch (err){console.log(err, "Error!");}
      let resJson = await res.json()
      if (res.status === 201) window.location.replace("/")
      }
    return(
    <div>
        <h2 class = "rsvp">RSVP</h2>
        <form class = "form-inline" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={ResponderName} onChange={(e) => setResponderName(e.target.value)} className="Name:" 
                required
            />

            <label>Are you coming?</label>
                <select value={RSVP} onChange={(e) => setRSVP(e.target.value)} className="dropdown">
                    <option>
                        Yes 
                    </option>
                    <option>
                        No 
                    </option>
                    <option>
                        Maybe 
                    </option>
                </select>
            <button type="submit">Submit</button>

        </form>
    </div>

    );
}


export default RSVP;

