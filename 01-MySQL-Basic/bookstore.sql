SHOW DATABASES;

CREATE DATABASE bookstore;

USE bookstore;

SHOW TABLES;

CREATE TABLE `books` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `author1` VARCHAR(100) NOT NULL,
    `author2` VARCHAR(100),
    `author3` VARCHAR(100),
    `title` VARCHAR(100),
    `description` TEXT,
    `place_sell` CHAR(3),
    `stock` INT DEFAULT 0,
    `creation_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `books`
ADD `price` INT DEFAULT 0,
ADD `status` ENUM('available','out of stock','limited'),
DROP `place_sell`;

INSERT INTO `books` VALUES
(NULL, 'Intania', 'Putri', 'Annisa', 'Reach Your Dream', 'Buku ini menceritakan tentang kisah 3 remaja yang mengejar mimpi di masa muda mereka', 1000, DEFAULT, 90000, 'available'),
(NULL, 'Rahman', 'Rizky', 'Rizal', 'Si Kancil', 'Buku ini berisikan dongeng kisah si Kancil', 100, DEFAULT, 80000, 'out of stock'),
(NULL, 'Rania', 'Rara', 'Heri', '10 Resep Masakan Yogyakarta', 'Buku ini berisikan 10 resep masakan dari Yogyakarta', 5, DEFAULT, 50000, 'limited');

SELECT * FROM books;

SELECT id AS ID, author1 as A1, author2 as A2, author3 AS A3 FROM books;

SELECT * FROM books WHERE id = 2;

SELECT * FROM books WHERE stock > 25 AND price < 85000;

SELECT * FROM books WHERE status = 'available' OR price < 85000;

SELECT * FROM books WHERE NOT status = 'limited';

SELECT * FROM books ORDER BY id;

SELECT * FROM books LIMIT 2;

UPDATE books SET author1 = 'Indi', price = '100000' WHERE id = 2;

DELETE FROM books WHERE id = 2;