package handlers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"main.go/models"
	"net/http"
)

// creates a new event
func CreateEvent(c *gin.Context) {
	var event models.CreateEvent

	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&event); err != nil {
		c.IndentedJSON(http.StatusBadRequest, nil) //bad data
		return
	}

	_, err := dbmap.Query(
		"INSERT INTO event (title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
		event.EventTitle, event.Date, event.Time, event.Location, event.HostName, event.Description, event.ContactInfo, event.PublicPrivate, event.NumRSVP, event.MaxAttendees)
		
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}
	c.JSON(201, event) //success
}

func GetEvent(c *gin.Context) {
	var events []models.GetEvent

	see_row := c.Param("eventID")
	eventrow, err := dbmap.Query(
		"SELECT event_id, title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees FROM event WHERE event_id=?;",
		see_row)

	fmt.Printf("%+v", eventrow)
	
	for eventrow.Next() {
		var event models.GetEvent
        // for each row, scan into the event struct
		err = eventrow.Scan(&event.EventID, &event.EventTitle, &event.Date, &event.Time, &event.Location, &event.HostName, &event.Description, &event.ContactInfo, &event.PublicPrivate, &event.NumRSVP, &event.MaxAttendees)
		if err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}
        // append the event into events array
		events = append(events, event)
	}
	c.JSON(201, events) //success
}

func CreateRSVP(c *gin.Context) {
    var rsvp models.CreateRSVP

    // Call BindJSON to bind the received JSON to event +add error handling later
    if err := c.BindJSON(&rsvp); err != nil {
		fmt.Println(err)
        c.IndentedJSON(http.StatusBadRequest, nil) //bad data
        return
    }
	fmt.Println(rsvp)
    _, err := dbmap.Query(
        "INSERT INTO rsvp (event_id, name, rsvp) VALUES (?, ?, ?);",
        rsvp.EventID, rsvp.ResponderName, rsvp.RSVP)

    if err != nil {
		fmt.Println(err)
        c.IndentedJSON(http.StatusInternalServerError, nil) //server error
        return
    }
    c.JSON(201, rsvp) //success
}

func UpdateResponse(c *gin.Context) {
    var rsvp models.UpdateResponse
    var response []models.GetRSVP

	id := c.Param("RSVPID")
	rsvpinfo, err := dbmap.Query(
		"SELECT event_id, response_id, name, rsvp, contact_info FROM rsvp WHERE rsvp_id=?;",
		id)

	
	for rsvpinfo.Next() {
		var userResponse models.GetRSVP
        // for each row, scan into the event struct
		err = rsvpinfo.Scan(&rsvp.EventID, &rsvp.ResponderName, &rsvp.RSVP)
		if err != nil {
		fmt.Println(err)
		c.IndentedJSON(http.StatusInternalServerError, nil) //server error
		return
	}
        // append the event into events array
		response = append(response, userResponse)
	}

    // Call BindJSON to bind the received JSON to event +add error handling later
    if err = c.BindJSON(&rsvp); err != nil {
        c.IndentedJSON(http.StatusBadRequest, nil) //bad data
        return
    }
	
	if rsvp.ResponderName == ""{
		rsvp.ResponderName = response[0].ResponderName
	}
	if rsvp.ContactInfo == ""{
		rsvp.ContactInfo = response[0].ContactInfo
	}
	if rsvp.RSVP == ""{
		rsvp.RSVP = response[0].RSVP
	}

        _, err = dbmap.Query(
        "UPDATE rsvp SET name = ?, contact_info = ?, rsvp = ? WHERE rsvp_id = ?;",
    rsvp.ResponderName, rsvp.ContactInfo, rsvp.RSVP)

    if err != nil {
        c.IndentedJSON(http.StatusInternalServerError, nil) //server error
        return
    }

    c.JSON(200, rsvp) //success
}
func GetRSVP(c *gin.Context) {
	var rsvp1 []models.GetRSVP

	see_row := c.Param("responseID")
	RSVProw, err := dbmap.Query(
		"SELECT response_id, event_id, name, rsvp, comment_id FROM RSVP WHERE response_id=?;",
		see_row)

	fmt.Printf("%+v", RSVProw)

for RSVProw.Next() {
	var rsvp models.GetRSVP
	// for each row, scan into the event struct
	err = RSVProw.Scan(&rsvp.ResponseID, &rsvp.EventID, &rsvp.Name, &rsvp.RSVP, &rsvp.CommentID)
	if err != nil {
	fmt.Println(err)
	c.IndentedJSON(http.StatusInternalServerError, nil) //server error
	return
}
	// append the event into events array
	rsvp1 = append(rsvp1, rsvp)
}
	c.JSON(201, rsvp1) //success
}
