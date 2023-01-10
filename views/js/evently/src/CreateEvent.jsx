import React, {useState} from 'react';
import './CreateEvent.css';
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
        {/* <fieldset style={{ backgroundColor: 'rgba(238, 97, 35)' }}>
          <h1>Event.ly</h1> 
        </fieldset> */}

        


        {/* Date form */}
        <form> 
        <fieldset width="10"> {/* Creates box around the text and input box */}
          <p>Date</p>
          <input date="date" /> {/* Creates a box that takes an input, saves it into date */}
        </fieldset> <br></br>

        {/* Time form */}
        <fieldset>
            <p>Time</p>
            <input time="time" />
         </fieldset> <br></br>

        {/* Upload an image */}
        {/* fieldset style creates a gray box */}
        <ul class="tableB">
          <li>
            <fieldset style={{ backgroundColor: 'rgba(217, 217, 217)', padding: '100px'}}>
              <h2> Choose an image:</h2>
              {/* Takes a file as input; onChange passes value to handleChange */}
              <input type = "file" onChange={handleChange} />
              <img src = {file} />
            </fieldset>
          </li>
        </ul>

        {/* Location form */}
        <fieldset>
            <p>Location</p>
            <input location="location" />
        </fieldset> <br></br>

        {/* Description form */}
        <fieldset>
            <p>Description</p>
            <input description="description" />
        </fieldset> <br></br>


        {/* # of attendees form */}
        <fieldset>
            <p># of attendees</p>
            <input numAttendees="numAttendees" />
        </fieldset> <br></br>

        {/* public/private form */}
        <fieldset>
             <p>Public/Private</p>
             <input isPrivate ="isPrivate" />
         </fieldset> <br></br>

        {/* Host name form */}
        <fieldset>
            <p>Host name</p>
            <input hostName="hostName" />
         </fieldset> <br></br>

        {/* Contact info form */}
        <fieldset>
            <p>Contact info</p>
            <input contact="contact" />
         </fieldset> <br></br>

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
