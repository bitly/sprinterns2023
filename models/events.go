package models

// Event contains information about a single event
type Event struct {
	ID          int    `json:"id" binding:"required"`
	NumAtendees int    `json:"num_attendees"`
	EventTitle  string `json:"event_title" binding:"required"`
}
