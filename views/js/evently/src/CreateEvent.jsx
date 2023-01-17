import React, {useState} from 'react';
import './CreateEvent.css';

function CreateEvent() {
  const [file, setFile] = useState();
  function handleChange (e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
    return(
      <div className="wrapper"> 
        <div className = "container">
          <div className = "form-container">
            <h2> Enter the details of your event:</h2>
             
            <form> 
            {/* Event title form */}
            <fieldset className = "input-box-fieldset"> {/* Creates box around the text and input box */}
              <h4>Event title</h4>
              <input title="title" className = "input-boxes" /> {/* Creates a box that takes an input, saves it into title */}
            </fieldset> <br></br>

            {/* Date form */}
            <fieldset className = "input-box-fieldset"> 
              <h4>Date</h4>
              <input date="date" className = "input-boxes" placeholder='(mm/dd/yyyy)'/> 
            </fieldset> <br></br>

            {/* Time form */}
            <fieldset className = "input-box-fieldset">
                <h4>Time</h4>
                <input time="time" className = "input-boxes"/>
            </fieldset> <br></br>

            {/* Location form */}
            <fieldset className = "input-box-fieldset">
                <h4>Location</h4>
                <input location="location" className = "input-boxes"/>
            </fieldset> <br></br>

            {/* Description form */}
            <fieldset className = "input-box-fieldset">
                <h4>Description</h4>
                <input description="description" className = "input-boxes"/>
            </fieldset> <br></br>


            {/* # of attendees form */}
            <fieldset className = "input-box-fieldset">
                <h4>Max number of attendees</h4>
                <input numAttendees="numAttendees" className = "input-boxes"/>
            </fieldset> <br></br>

            {/* public/private form */}
            <fieldset className = "pub-priv-box-fieldset">
                <h4>Public/Private</h4>
                <select><option>Public</option><option>Private</option></select>
            </fieldset> <br></br>

            {/* Host name form */}
            <fieldset className = "input-box-fieldset">
                <h4>Host name</h4>
                <input hostName="hostName" className = "input-boxes"/>
            </fieldset> <br></br>

            {/* Contact info form */}
            <fieldset className = "input-box-fieldset">
                <h4>Contact info</h4>
                <input contact="contact" className = "input-boxes"/>
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
            </fieldset>
            <br></br><br></br> 
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
