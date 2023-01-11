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
        <div className = "container">
          <div className = "form-container">
            <h3> Enter the details of your event:</h3>
             
            <form> 
            {/* Event title form */}
            <fieldset> {/* Creates box around the text and input box */}
              <p>Event title</p>
              <input title="title" /> {/* Creates a box that takes an input, saves it into title */}
            </fieldset> <br></br>

            {/* Date form */}
            <fieldset> 
              <p>Date</p>
              <input date="date" /> 
            </fieldset> <br></br>

            {/* Time form */}
            <fieldset>
                <p>Time</p>
                <input time="time" />
            </fieldset> <br></br>

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
            </fieldset> <br></br><br></br>

            </form>
          </div>
          <div className='upload-container'>
            {/* Upload an image */}
            {/* fieldset style creates a gray box */}
            <fieldset style={{ backgroundColor: 'rgba(217, 217, 217)', padding: '200px'}}>
              <h2> Choose an image:</h2>
              {/* Takes a file as input; onChange passes value to handleChange */}
              <input type = "file" onChange={handleChange} />
              <img src = {file} />
            </fieldset><br></br><br></br>
              <div>
                {/* Button to publish draft */}
                <button type="publish" className = "publish-button">Publish</button>

                {/* Button to save draft (if have time) */}
                <button type="save draft" className = "save-button">Save draft</button>
              </div>
          </div>
        </div>
      </div>
    )
  }

export default CreateEvent;
