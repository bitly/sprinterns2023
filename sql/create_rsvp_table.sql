use events;
CREATE TABLE IF NOT EXISTS `rsvp` (
       `response_id` integer PRIMARY KEY AUTO_INCREMENT,
       `event_id` integer NOT NULL,
       `name` text NOT NULL,
       `rsvp` text NOT NULL,
       `comment_id` text, 
       `created_at` timestamp NOT NULL default CURRENT_TIMESTAMP,
       FOREIGN KEY (event_id) REFERENCES event(event_id)
) DEFAULT CHARSET=utf8;
       
