package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"main.go/models"
)

// We'll create a list of jokes
// var events = []models.Event{
// 	models.Event{1, 20, "Diana's 35th Birthday Party"},
// 	models.Event{2, 55, "Grace's End of Finals Bash"},
// 	models.Event{3, 67, "Ange's Holiday Party!"},
// 	models.Event{4, 37, "Makayla's NYE Celebration"},
// }

// EventHandler retrieves a list of available events
// func EventHandler(c *gin.Context) {
// 	c.Header("Content-Type", "application/json")
// 	c.JSON(http.StatusOK, events)
// }

// creates a new event
func CreateEvent(c *gin.Context) {
	var event models.CreateEvent

	// Call BindJSON to bind the received JSON to event +add error handling later
	if err := c.BindJSON(&event); err != nil {
		return
	}

	_, err := dbmap.Query(
		"INSERT INTO event (title, date, time, location, host_name, description, contact_info, public_private, num_of_RSVP, max_attendees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
		event.EventTitle, event.Date, event.Time, event.Location, event.HostName, event.Description, event.ContactInfo, event.PublicPrivate, event.NumRSVP, event.MaxAttendees)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(event)

	c.JSON(201, event)
	// Add the new album to the slice.
	// albums = append(albums, newAlbum)
	// c.IndentedJSON(http.StatusCreated, newAlbum)
}
