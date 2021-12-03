CREATE DATABASE skilvul_book_store;

USE skilvul_book_store;

CREATE TABLE `penerbit` (
 `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `nama` VARCHAR(50) NULL,
 `kota` VARCHAR(50) NULL);

CREATE TABLE `penulis` (
 `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `nama` VARCHAR(50) NULL,
 `kota` VARCHAR(50) NULL);

CREATE TABLE `buku` (
 `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `ISBN` VARCHAR(50) NULL,
 `judul` VARCHAR(50) NULL,
 `penulis` INT(10) NULL,
 `penerbit` INT(10) NULL,
 `harga` INT(10) NULL,
 `stock` INT(10) NULL,
 CONSTRAINT `fk_penulis` FOREIGN KEY (`penulis`) REFERENCES `penulis`(`id`) ON UPDATE CASCADE ON DELETE CASCADE,
 CONSTRAINT `fk_penerbit` FOREIGN KEY (`penerbit`) REFERENCES `penerbit`(`id`) ON UPDATE CASCADE ON DELETE CASCADE);

 INSERT INTO `penerbit` VALUES 
 (NULL, 'Gramedia', 'Yogyakarta'),
 (NULL, 'Elexmedia', 'Jakarta'),
 (NULL, 'Mizan', 'Bali'),
 (NULL, 'Haru', 'Jakarta');

 INSERT INTO `penulis` VALUES
 (NULL, 'Lisa', 'Bali'),
 (NULL, 'Rara', 'Yogyakarta'),
 (NULL, 'Aliefa', 'Blora'),
 (NULL, 'Putri', 'Banjar'),
 (NULL, 'Sania', 'Bekasi');

 INSERT INTO `buku` VALUES
 (NULL, '999-876-125-100-1', '15 Resep Enak Khas Bali', 1, 3, 55000, 5),
 (NULL, '999-876-125-100-2', 'Laskar Pelangi', 2, 1, 80000, 20),
 (NULL, '999-876-125-100-3', 'Biologi', 3, 3, 100000, 30),
 (NULL, '999-876-125-100-4', 'Kimia', 2, 4, 40000, 10),
 (NULL, '999-876-125-100-5', 'Fisika', 4, 3, 50000, 190);

SELECT * FROM `buku` INNER JOIN `penerbit` ON buku.penerbit = penerbit.id;

SELECT * FROM `buku` LEFT JOIN `penerbit` ON buku.penerbit = penerbit.id;

SELECT * FROM `buku` RIGHT JOIN `penerbit` ON buku.penerbit = penerbit.id;

SELECT id, ISBN, judul, penulis, penerbit, MAX(harga) AS MAX_HARGA, stock FROM `buku` WHERE stock < 10;

SELECT id, ISBN, judul, penulis, penerbit, MIN(harga) AS MIN_HARGA, stock FROM `buku`;

SELECT COUNT(*) AS Buku_Kurang_dari_100 FROM `buku` WHERE harga < 100000;