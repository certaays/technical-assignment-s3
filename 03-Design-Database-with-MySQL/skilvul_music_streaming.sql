CREATE DATABASE skilvul_music_streaming;

USE skilvul_music_streaming;

CREATE TABLE `user` (
`user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(50),
`email` VARCHAR(50),
`password` VARCHAR(50)
);

CREATE TABLE `singer` (
`singer_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(50)
);

CREATE TABLE `album` (
`album_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(50),
`singer_id` INT NOT NULL,
CONSTRAINT `fk_album_singer` FOREIGN KEY (`singer_id`) REFERENCES `singer`(`singer_id`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `playlist` (
`playlist_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`tracks` VARCHAR(50),
`user_id` INT NOT NULL,
CONSTRAINT `fk_playlist_user` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE    
);

CREATE TABLE `track` (
`track_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(50),
`singer_id` INT NOT NULL,
`album_id` INT NOT NULL,
CONSTRAINT `fk_track_singer` FOREIGN KEY (`singer_id`) REFERENCES `singer`(`singer_id`) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT `fk_track_album` FOREIGN KEY (`album_id`) REFERENCES `album`(`album_id`) ON UPDATE CASCADE ON DELETE CASCADE    
);

CREATE TABLE `conjunction` (
`playlist_id` INT NOT NULL,
`track_id` INT NOT NULL,
CONSTRAINT `fk_conjunction_playlist` FOREIGN KEY (`playlist_id`) REFERENCES `playlist`(`playlist_id`) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT `fk_conjunction_track` FOREIGN KEY (`track_id`) REFERENCES `track`(`track_id`) ON UPDATE CASCADE ON DELETE CASCADE
);