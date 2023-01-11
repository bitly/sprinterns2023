package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/models"
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
