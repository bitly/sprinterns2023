import React, {useState} from 'react';
import './CreateEvent.css';
// import Header from './header.css';
import Header from './header.js';

function CreateEvent() {
  const [file, setFile] = useState();
  function handleChange (e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

    return(
      <div className="wrapper"> 
        <Header/>
        <fieldset style={{ backgroundColor: 'rgba(238, 97, 35)' }}>
          <h1>Event.ly</h1> 
        </fieldset>

        {/* Date form */}
        <form> 
        <fieldset> {/* Creates box around the text and input box */}
          <p>Date</p>
          <input date="date" /> {/* Creates a box that takes an input, saves it into date */}
        </fieldset>

        {/* Time form */}
        <fieldset>
            <p>Time</p>
            <input time="time" />
         </fieldset>

        {/* Location form */}
        <fieldset>
            <p>Location</p>
            <input location="location" />
        </fieldset>

        {/* Description form */}
        <fieldset>
            <p>Description</p>
            <input description="description" />
        </fieldset>

        {/* # of attendees form */}
        <fieldset>
            <p># of attendees</p>
            <input numAttendees="numAttendees" />
        </fieldset>

        {/* public/private form */}
        <fieldset>
             <p>Public/Private</p>
             <input isPrivate ="isPrivate" />
         </fieldset>

        {/* Host name form */}
        <fieldset>
            <p>Host name</p>
            <input hostName="hostName" />
         </fieldset>

        {/* Contact info form */}
        <fieldset>
            <p>Contact info</p>
            <input contact="contact" />
         </fieldset>

        {/* Upload an image */}
        {/* fieldset style creates a gray box */}
        <fieldset style={{ backgroundColor: 'rgba(217, 217, 217' }}>
          <h2> Choose an image:</h2>
          {/* Takes a file as input; onChange passes value to handleChange */}
          <input type = "file" onChange={handleChange} />
          <img src = {file} />
        </fieldset>

        <fieldset>
          {/* Button to publish draft */}
          <button type="publish">Publish</button>

          {/* Button to save draft (if have time) */}
          <button type="save draft">Save draft</button>
        </fieldset>
        
        </form>
        
      </div>
    )
  }

export default CreateEvent;
