package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"main.go/handlers"
)

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})

	}

	// This endpoint will get and list all events
	// api.GET("/events", handlers.EventHandler)

	// This endpoint will be able to create events
	api.POST("/events", handlers.CreateEvent)

	api.GET("/event/:eventID", handlers.GetEvent)

	api.POST("/event/:eventID/rsvp", handlers.CreateRSVP)
	// Start and run the server
	router.Run(":3000")
}
