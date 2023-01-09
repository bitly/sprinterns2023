import React from "react";

function CreateEvent() {
    return(
      <div className="wrapper">      
        <h1>Event.ly</h1> 

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

        {/* Button to publish draft */}
        <button type="publish">Publish</button>

        {/* Button to save draft (if have time) */}
        <button type="publish">Save draft</button>
        </form>
      </div>
    )
  }

export default CreateEvent;
