-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Máj 17. 12:48
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `swipejobs`
--
CREATE DATABASE IF NOT EXISTS `swipejobs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `swipejobs`;

DELIMITER $$
--
-- Eljárások
--
DROP PROCEDURE IF EXISTS `add_new_job`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_new_job` (IN `title_in` VARCHAR(255), IN `worktype_in` ENUM('Fixed-price','Hourly'), IN `description_in` TEXT)   INSERT INTO jobs(`jobs`.`title`,`jobs`.`work_type`,`jobs`.`description`)
VALUES (title_in,worktype_in,description_in)$$

DROP PROCEDURE IF EXISTS `add_new_job_seeker_cv`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_new_job_seeker_cv` (IN `picture_in` VARCHAR(255), IN `bio_in` TEXT, IN `gender_in` ENUM('male','female','other'), IN `age_in` INT(11), IN `qualification_in` VARCHAR(255), IN `location_in` VARCHAR(255), IN `skills_in` VARCHAR(255))   insert into job_seekers_cv (`job_seekers_cv`.`picture`,
             `job_seekers_cv`.`bio`,
             `job_seekers_cv`.`gender`,
             `job_seekers_cv`.`age`,
             `job_seekers_cv`.`qualification`,
             `job_seekers_cv`.`location`,
             `job_seekers_cv`.`skills`)
VALUES (picture_in,bio_in,gender_in,age_in,qualification_in,location_in,skills_in)$$

DROP PROCEDURE IF EXISTS `add_new_user`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_new_user` (IN `First_nameIn` VARCHAR(255), IN `Last_nameIn` VARCHAR(255), IN `emailIn` VARCHAR(255), IN `passwordIn` VARCHAR(255), IN `user_typeIn` INT(2))   BEGIN
	IF user_typeIN = 1 
        THEN 
        INSERT INTO `users`(
`users`.`First_name`,
`users`.`Last_name`,
`users`.`email`,
`users`.`password`,
`users`.`user_type`)
	VALUES (First_nameIn,Last_nameIn,emailIn,passwordIn,user_typeIn);
	
        INSERT INTO `clients`(`clients`.`user_type`)
        VALUES(1);
    ELSEIF user_typeIN = 2 
        THEN 
        INSERT INTO `users`(
`users`.`First_name`,
`users`.`Last_name`,
`users`.`email`,
`users`.`password`,
`users`.`user_type`)
	VALUES (First_nameIn,Last_nameIn,emailIn,passwordIn,user_typeIn);
	
        INSERT INTO `job_seeker`(`job_seeker`.`user_type`)
        VALUES(2);
    ELSEIF user_typeIN = 3 
        THEN 
        INSERT INTO `users`(
`users`.`First_name`,
`users`.`Last_name`,
`users`.`email`,
`users`.`password`,
`users`.`user_type`)
	VALUES (First_nameIn,Last_nameIn,emailIn,passwordIn,user_typeIn);
	
        INSERT INTO `super_admins`(`super_admins`.`user_type`)
        VALUES(3);
    END IF;
END$$

DROP PROCEDURE IF EXISTS `login_user`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `login_user` (IN `emailIn` VARCHAR(50), IN `passwordIn` VARCHAR(50), OUT `result` VARCHAR(50))   BEGIN
IF EXISTS (SELECT * FROM `users` WHERE `users`.`email`=emailIn
AND `users`.`password`= passwordIn) THEN
SET result = 'Login successful';
ELSE
SET result='Invalid login';
END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(255) DEFAULT NULL,
  `tax_number` int(11) DEFAULT 1,
  `location` varchar(255) DEFAULT NULL,
  `user_type` int(11) NOT NULL DEFAULT 1,
  `JobsCount` int(11) NOT NULL DEFAULT 0,
  `jobs_count` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_type` (`user_type`)
) ENGINE=InnoDB AUTO_INCREMENT=3605 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `clients`
--

INSERT INTO `clients` (`id`, `company`, `tax_number`, `location`, `user_type`, `JobsCount`, `jobs_count`, `created_at`) VALUES
(3555, NULL, NULL, NULL, 1, 0, 0, '2023-05-15 17:11:01'),
(3604, NULL, NULL, NULL, 1, 0, 0, '2023-05-16 08:14:31');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `work_type` enum('Fixed-price','Hourly') NOT NULL,
  `costHUF` int(10) NOT NULL,
  `location` varchar(33) NOT NULL,
  `foglalkoztatas_jellege` varchar(33) NOT NULL,
  `description` text NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `jobs_ibfk_1` (`client_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `jobs`
--

INSERT INTO `jobs` (`id`, `client_id`, `title`, `work_type`, `costHUF`, `location`, `foglalkoztatas_jellege`, `description`, `created_at`) VALUES
(1, 3555, 'Festőt keresek', 'Fixed-price', 10000, 'Pécs', 'Részmunkaidő', 'Festőt keresek aki kifesti a házamat', '2023-05-15'),
(2, 3555, 'Programozó', 'Hourly', 2600, 'Home-office', 'Teljes munkaidő', 'programozót keresek! pályakezdőt is elfogadunk 10 év tapasztalattal.', '2023-05-15'),
(3, 3555, 'Állatkerti gondozó', 'Hourly', 1300, 'Pécs', 'Teljes munkaidő', 'Állatkerti gondozót keresünk a Pécsi állatkertbe.', '2023-05-15'),
(4, 3555, 'Üzletvezető', 'Hourly', 1900, 'Budapest', 'Teljes munkaidő', 'Budapesti üzletünkbe üzletvezetőt keresünk', '2023-05-15'),
(5, 3555, 'eladó', 'Hourly', 1300, 'Budapest', 'Teljes munkaidő', 'Budapesti üzletünkbe eladót keresünk', '2023-05-15'),
(6, 3604, 'programozó', 'Hourly', 2000, 'pécs', 'Teljes munkaidő', 'ülőmunkakör számitógépes munkavégzés', '2023-05-16'),
(7, 3604, 'Rendelőintézeti aszisztens', 'Hourly', 1790, 'Pécs', 'Teljes munkaidő', 'Aszisztenst keresünk a Pécsi rendelőnkbe!', '2023-05-16'),
(8, 3604, 'Asztalos', 'Hourly', 1800, 'Győr', 'Teljes munkaidő', 'Asztalost keresek a Győri műhelyembe! Minimum 5 év tapasztalat a pályán!', '2023-05-16');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `job_seeker`
--

DROP TABLE IF EXISTS `job_seeker`;
CREATE TABLE IF NOT EXISTS `job_seeker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` int(11) NOT NULL DEFAULT 2,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_type` (`user_type`)
) ENGINE=InnoDB AUTO_INCREMENT=3604 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `job_seeker`
--

INSERT INTO `job_seeker` (`id`, `user_type`, `created_at`) VALUES
(3553, 2, '2023-05-15 17:07:16'),
(3602, 2, '2023-05-15 17:36:16'),
(3603, 2, '2023-05-16 08:10:38');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `job_seekers_cv`
--

DROP TABLE IF EXISTS `job_seekers_cv`;
CREATE TABLE IF NOT EXISTS `job_seekers_cv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_seeker_id` int(11) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `job_seeker_id` (`job_seeker_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `job_seekers_cv`
--

INSERT INTO `job_seekers_cv` (`id`, `job_seeker_id`, `picture`, `bio`, `gender`, `age`, `qualification`, `location`, `skills`, `created_at`) VALUES
(1, 3553, NULL, 'Nagyon szeretek festeni', 'male', 25, 'festő', 'Pécs', 'menő', '2023-05-15 17:07:16'),
(2, 3602, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-15 17:36:16'),
(3, 3603, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-16 08:10:38');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `matches`
--

DROP TABLE IF EXISTS `matches`;
CREATE TABLE IF NOT EXISTS `matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) DEFAULT NULL,
  `job_seekers_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `client_applied` bit(1) DEFAULT b'0',
  `is_matched` bit(1) DEFAULT NULL,
  `job_seeker_applied` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_seekers_id` (`job_seekers_id`,`client_id`),
  KEY `client_id` (`client_id`),
  KEY `job_id` (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `matches`
--

INSERT INTO `matches` (`id`, `job_id`, `job_seekers_id`, `client_id`, `created_at`, `client_applied`, `is_matched`, `job_seeker_applied`) VALUES
(1, 1, 3602, 3555, '2023-05-15 17:36:30', NULL, b'0', b'1'),
(2, 1, 3603, 3555, '2023-05-16 08:13:09', NULL, b'0', b'1');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_type` int(1) NOT NULL,
  `registration_date` date NOT NULL DEFAULT current_timestamp(),
  `email_verification_status` bit(1) NOT NULL,
  `email_verification_token` varchar(255) DEFAULT NULL,
  `encrypted_password` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_type` (`user_type`)
) ENGINE=InnoDB AUTO_INCREMENT=3605 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `user_type`, `registration_date`, `email_verification_status`, `email_verification_token`, `encrypted_password`, `user_id`) VALUES
(3553, 'Tamás', 'Kiss', 'tomikakiss@gmail.com', NULL, 2, '2023-05-15', b'0', NULL, '$2a$10$NtnjUbsNajKjxQtT4edFT.sw1LcsYaSZtki1Bwab1C5p7kv5u9mwm', 'rnAF8kXHm4wdGhfqXhSV9auorcfL4v'),
(3555, 'Roland', 'Horváth', 'horvathroli@gmail.com', NULL, 1, '2023-05-15', b'0', NULL, '$2a$10$I8M3..LDU1lfU0kRkO4pneSphWHwaBL9/rM6KyAYvp3j54W/KkhQi', 'bpilNDhIR3wrcn5GBmPue9xEMw29GK'),
(3602, 'József', 'Szilágyi', 'szilijozsika@gmail.com', NULL, 2, '2023-05-15', b'0', NULL, '$2a$10$UG7vk3VV1wcLURwOKTkZ8OdTjQbJVxAfrELhpY1Hva8YRefdUZBOS', 'DNV1lF8zgC7VKf0KTScXwK8iSf3jdT'),
(3603, 'Miklós', 'Kiss', 'kissmiklos@gmail.com', NULL, 2, '2023-05-16', b'0', NULL, '$2a$10$I3muRu.a.KPVRkFRZeBE2u2FdtvL4it72tTmESjkF2aO5f4xRiAQu', 'kLf86PQiVmTkfhc9nuDF28jyn1L1GQ'),
(3604, 'Gabriella', 'kovács', 'kovigabi@gmail.com', NULL, 1, '2023-05-16', b'0', NULL, '$2a$10$funRHR.By8uuCfeT3ShlEOzO97YGCZIqRuJhihfkBIHwg91lj5xZ.', 'Q1ddiQftNwSCpsSKEaDLgOjnVUA84I');

--
-- Eseményindítók `users`
--
DROP TRIGGER IF EXISTS `insert_client_or_job_seeker`;
DELIMITER $$
CREATE TRIGGER `insert_client_or_job_seeker` AFTER INSERT ON `users` FOR EACH ROW BEGIN
   IF NEW.user_type = 1 THEN
        INSERT INTO clients (id, company, tax_number, location, created_at) 
        VALUES (NEW.id, NULL, NULL, NULL, NOW());
   ELSEIF NEW.user_type = 2 THEN
        INSERT INTO job_seeker (id, user_type, created_at) 
        VALUES (NEW.id, NEW.user_type, NOW());
        INSERT INTO job_seekers_cv(job_seeker_id, created_at) VALUES (NEW.id, NOW());
   
   END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
CREATE TABLE IF NOT EXISTS `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(3701);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_type`
--

DROP TABLE IF EXISTS `user_type`;
CREATE TABLE IF NOT EXISTS `user_type` (
  `user_type` int(1) NOT NULL,
  `user_type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `user_type`
--

INSERT INTO `user_type` (`user_type`, `user_type_name`) VALUES
(1, 'Client'),
(2, 'Job_seeker');

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `user_type` (`user_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `job_seeker`
--
ALTER TABLE `job_seeker`
  ADD CONSTRAINT `job_seeker_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `user_type` (`user_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `job_seekers_cv`
--
ALTER TABLE `job_seekers_cv`
  ADD CONSTRAINT `job_seekers_cv_ibfk_1` FOREIGN KEY (`job_seeker_id`) REFERENCES `job_seeker` (`id`);

--
-- Megkötések a táblához `matches`
--
ALTER TABLE `matches`
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`job_seekers_id`) REFERENCES `job_seeker` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `matches_ibfk_3` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`);

--
-- Megkötések a táblához `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `user_type` (`user_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
