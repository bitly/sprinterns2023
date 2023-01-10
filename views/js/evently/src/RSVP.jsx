import React from "react";

function RSVP() {
    return(
<form>
    <label>
    Event.ly <br></br>
    RSVP <br></br> <br></br>
    </label>


    <label>
        Name:
        <input type="text" name="Name:" /> <br></br> <br></br>

    </label>


    <label>
        Email:
        <input type="text" name="Email:" /> <br></br> <br></br>

    </label>


    <label> 
        Will you be attending?
        <select class="dropdown">
            <option>
                yes </option>
            <option>
                no </option>
            <option>
                maybe </option>
            {/* <button class="dropbtn"> </button>
            <div class="dropdown-content">
                <a href="#">Yes</a>
                <a href="#">No</a>
                <a href="#">Maybe</a>
            </div> */}
            
        </select>

    </label>

    <br></br><br></br>
    <label>
        Will you bring something to the event?
        <input type="text" name="Bringing anything?" /> <br></br> <br></br>

    </label>



 
  <button type="submit">Submit RSVP</button>
</form>

    
    )   
}
export default RSVP;  

