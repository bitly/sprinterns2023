use events;
CREATE TABLE IF NOT EXISTS `event` (
	`event_id` integer PRIMARY KEY AUTO_INCREMENT,
	`title` text NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
    `location` text NOT NULL,
    `host_name` text NOT NULL,
    `description` text NOT NULL,
    `contact_info` text NOT NULL,
    `public_private` text NOT NULL,
    `#_of_RSVP` int NOT NULL,
    `max_attendees` int NOT NULL,
	`created_at` timestamp NOT NULL default CURRENT_TIMESTAMP
) DEFAULT CHARSET=utf8;
