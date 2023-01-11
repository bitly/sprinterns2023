package models

// Event contains information about a single event
type CreateEvent struct {
	NumRSVP       int    `json:"num_of_RSVP"`
	EventTitle    string `json:"event_title" binding:"required"`
	Date          string `json:"date" binding:"required"`
	Time          string `json:"time" binding:"required"`
	Location      string `json:"location" binding:"required"`
	HostName      string `json:"host_name" binding:"required"`
	Description   string `json:"description" binding:"required"`
	ContactInfo   string `json:"contact_info" binding:"required"`
	PublicPrivate string `json:"public_private" binding:"required"`
	MaxAttendees  int    `json:"max_attendees" binding:"required"`
}
