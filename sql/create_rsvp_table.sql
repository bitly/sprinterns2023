use events;

CREATE TABLE IF NOT EXISTS 'rsvp' (
       'response_id' integer PRIMARY KEY AUTO_INCREMENT.
       'event_id' integer NOT NULL,
       'name' text NOT NULL,
       'rsvp' text NOT NULL, /*yes, no, maybe*/
       'comment_id' text, 
       'created_at' timestamp NOT NULL default CURRENT_TIMESTAMP
) DEFAULT CHARSET=utf8;
       
       
       
