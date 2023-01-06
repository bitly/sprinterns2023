use comments;
CREATE TABLE IF NOT EXISTS `comment` (
`event_id` integer PRIMARY KEY AUTO_INCREMENT,
`date` text NOT NULL,
`time` text NOT NULL,
`comment_id` text NOT NULL,
`name` text NOT NULL,
`comment` text NOT NULL,
`created_at` timestamp NOT NULL default CURRENT_TIMESTAMP
) DEFAULT CHARSET=utf8;
