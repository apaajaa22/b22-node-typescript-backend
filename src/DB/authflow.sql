-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2021 at 09:02 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `authflow`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `codePassword` int(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `codePassword`, `createdAt`, `updatedAt`) VALUES
(2, 'asdas', 'asdas', 'asd', NULL, '2021-09-07 15:06:27', '0000-00-00 00:00:00'),
(10, 'rahadian reza', 'reza@email.com', '$2b$10$B7pvbqE3BoPKw5I4/tkyAeEhq1wVa865GnfD.T8hmWn8x.ULVU96C', NULL, '2021-09-07 16:00:51', '2021-09-10 13:49:06'),
(11, 'rahadian reza', 'rafi@email.com', '$2b$10$G7vRjjE7aqgYu5NTk5KISOyaW1MYzviHF.UF8FpomWeFqBCp5CJwC', NULL, '2021-09-07 16:02:22', '0000-00-00 00:00:00'),
(12, 'rahadian reza', 'userdummy1@email.com', '$2b$10$VKUgP5ePIYu/RrANCJ0n6OayYIuSDym18K/juWge0p5PAZhxGnb3u', NULL, '2021-09-07 16:09:27', '0000-00-00 00:00:00'),
(13, 'budi', 'budi@email.com', '$2b$10$x00rdscUIy5CSCKISg9ALugBoee3dWJxRZq3u71Dv2wQ3oZH9RAqe', NULL, '2021-09-10 04:29:01', '2021-09-10 04:29:01'),
(14, 'juki', 'juki@email.com', '$2b$10$IJlOaVL0usfyIjztfGGD4OxKTS6wXGu.RxvWs6ibatxYBrZg2XNta', NULL, '2021-09-10 13:24:36', '2021-09-10 13:24:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codePassword` (`codePassword`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
