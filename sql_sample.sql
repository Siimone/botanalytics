-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 02, 2018 alle 18:24
-- Versione del server: 10.1.26-MariaDB
-- Versione PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
-- Struttura della tabella `stats`
--

CREATE TABLE `stats` (
  `id` int(11) NOT NULL,
  `date` int(10) UNSIGNED NOT NULL,
  `action` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `stats`
--

INSERT INTO `stats` (`id`, `date`, `action`, `user_id`) VALUES
(1, 1509354678, '/start', 6666),
(5, 1509358723, '/info', 6666),
(6, 1509357582, '/banana', 6666),
(7, 1509358832, '/banana', 6666),
(8, 1509358836, '/pepe', 6666),
(9, 1509358793, '/formaggio', 6666),
(14, 1509357582, '/info', 6666),
(15, 1509358742, '/info', 6666),
(17, 1509358793, '/pepe', 6666),
(18, 1509358836, '/start', 6666),
(24, 1509357582, '/formaggio', 6666),
(25, 1509358723, '/formaggio', 6666),
(26, 1509358793, '/info', 6666),
(27, 1509358832, '/banana', 6666),
(28, 1509357573, '/fragola', 6666),
(29, 1509358742, '/banana', 6666),
(30, 1509358836, '/fragola', 6666);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `stats`
--
ALTER TABLE `stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=257;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
