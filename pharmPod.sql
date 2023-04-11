-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 11, 2023 at 11:57 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmPod`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` int(10) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `c_id` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `username`, `password`, `c_id`) VALUES
(1, 'min01', 'affe24b899e2d2a880bd5f1a54fc777efbcc6b2bfc55252e28798a4d905a10a4', 'min01');

-- --------------------------------------------------------

--
-- Table structure for table `client_Info`
--

CREATE TABLE `client_Info` (
  `c_id` varchar(200) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `c_contact` varchar(50) NOT NULL,
  `c_location` varchar(100) NOT NULL,
  `c_about` varchar(255) NOT NULL,
  `services` varchar(200) NOT NULL,
  `map_location` varchar(200) NOT NULL,
  `fees` int(10) NOT NULL,
  `form_Status` varchar(5) NOT NULL DEFAULT 'on',
  `autoReqAppl` varchar(5) NOT NULL DEFAULT 'on',
  `maxApply` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client_Info`
--

INSERT INTO `client_Info` (`c_id`, `c_name`, `c_contact`, `c_location`, `c_about`, `services`, `map_location`, `fees`, `form_Status`, `autoReqAppl`, `maxApply`) VALUES
('min01', 'mintu sharma', '9401069337', 'nagaon,assam,india', 'about Here! ', 'programmming, coding', 'nagaon', 500, 'false', 'false', 2);

-- --------------------------------------------------------

--
-- Table structure for table `cl_doctor`
--

CREATE TABLE `cl_doctor` (
  `doc_id` int(50) NOT NULL,
  `d_name` varchar(100) DEFAULT NULL,
  `time_table` varchar(100) DEFAULT NULL,
  `fees` int(5) DEFAULT NULL,
  `c_id` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cl_doctor`
--

INSERT INTO `cl_doctor` (`doc_id`, `d_name`, `time_table`, `fees`, `c_id`) VALUES
(1, 'Dr.mintu sharma', '10 am- 11 pm\r\n11am -16pm \r\n10 am -16pm', 500, 'min01');

-- --------------------------------------------------------

--
-- Table structure for table `Del_PS_data`
--

CREATE TABLE `Del_PS_data` (
  `p_name` varchar(30) NOT NULL,
  `p_OthInfo` varchar(50) NOT NULL,
  `p_doctor` varchar(30) NOT NULL,
  `p_aptDate` varchar(30) NOT NULL,
  `p_aptStatus` varchar(10) NOT NULL DEFAULT 'true',
  `id` int(20) NOT NULL,
  `p_number` varchar(10) NOT NULL,
  `c_id` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Del_PS_data`
--

INSERT INTO `Del_PS_data` (`p_name`, `p_OthInfo`, `p_doctor`, `p_aptDate`, `p_aptStatus`, `id`, `p_number`, `c_id`) VALUES
('mintu Sharma', 'like to hack', 'Dr.mintu sharma', '10/04/2023', 'true', 1, '9401069337', 'min01'),
('mintu Sharma', 'like to hack', 'Dr.mintu sharma', '10/04/2023', 'true', 2, '9401069337', 'min01'),
('mintu Sharma', 'like to hack', 'Dr.mintu sharma', '10/04/2023', 'true', 3, '9401069337', 'min01'),
('Mintu Sharma', 'dfva fdfac  abhwDBNT ', 'Dr.mintu sharma', '11/04/2023', 'true', 4, '941654652', 'min01'),
('Rahul Bora', 'dfvdva', 'Dr.mintu sharma', '11/04/2023', 'true', 5, '69846153', 'min01'),
('Amar Jit', 'dfvadvf', 'Dr.mintu sharma', '11/04/2023', 'true', 6, '9401069337', 'min01'),
('Dipankar Das', 'NOt Available', 'Dr.mintu sharma', '11/04/2023', 'true', 7, '9401069337', 'min01'),
('MIntu Sharma', 'ok man', 'Dr.mintu sharma', '11/04/2023', 'true', 8, '9401069337', 'min01'),
('<h1>mintu is my name </h1>', '', 'Dr.mintu sharma', '11/04/2023', 'true', 9, '74525727', 'min01'),
('MIntu Sharma', 'Low battery', 'Dr.mintu sharma', '11/04/2023', 'true', 10, '9401069337', 'min01'),
('Mintu Sharma ', 'None', 'Dr.mintu sharma', '11/04/2023', 'true', 11, '9401069337', 'min01'),
('Dipangkar Deka', 'adfvdfv', 'Dr.mintu sharma', '11/04/2023', 'true', 12, '985695748', 'min01'),
('Amar Jit', 'adfafs', 'Dr.mintu sharma', '11/04/2023', 'true', 13, '652493635', 'min01');

-- --------------------------------------------------------

--
-- Table structure for table `doc_profile`
--

CREATE TABLE `doc_profile` (
  `d_name` varchar(100) NOT NULL,
  `d_type` varchar(50) NOT NULL,
  `d_exp` varchar(50) NOT NULL,
  `d_dg` varchar(50) NOT NULL,
  `d_lang` varchar(20) NOT NULL,
  `d_rating` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(10) NOT NULL,
  `feedback` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `min01_PS_data`
--

CREATE TABLE `min01_PS_data` (
  `p_name` varchar(30) NOT NULL,
  `p_OthInfo` varchar(50) NOT NULL,
  `p_doctor` varchar(30) NOT NULL,
  `p_aptDate` varchar(30) NOT NULL,
  `p_aptStatus` varchar(10) NOT NULL DEFAULT 'true',
  `id` int(20) NOT NULL,
  `p_number` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `min01_PS_data`
--

INSERT INTO `min01_PS_data` (`p_name`, `p_OthInfo`, `p_doctor`, `p_aptDate`, `p_aptStatus`, `id`, `p_number`) VALUES
('mintu shaema', '41685465+9', 'dr. msi ', '01/03/2023', 'true', 1, '0'),
('panchanan deka', '41685465+9', 'dr. msi ', '01/03/2023', 'true', 2, '0'),
('kankana', '416854659', 'dr. msi ', '01/03/2023', 'true', 3, '0'),
('mhib ', '41685465+9', 'dr. msi ', '01/03/2023', 'true', 4, '0'),
('mintu shaema', '41685465+9', 'dr. msi ', '03/03/2023', 'true', 5, '0'),
('mintu bro', '41685465+9', 'dr. msi ', '03/03/2023', 'true', 6, '0'),
('mintu sea', '58496466', 'Dr. End', '03/03/2023', 'true', 7, '0'),
('mintu sharma', '9401568936', 'Dr. MSI', '03/03/2023', 'true', 8, '0'),
('dfbdf', 'dfvdfv', 'Dr.mintu sharma', '04/04/2023', 'true', 9, '0'),
('dasvasdvc', 'advsdc', 'Dr.mintu sharma', '04/04/2023', 'true', 10, '0'),
('adfv', 'adfvdfva', 'Dr.mintu sharma', '05/04/2023', 'true', 11, '0'),
('dfvaadfv', 'adfvdfvaadfvadfv', 'Dr.mintu sharma', '05/04/2023', 'true', 12, '0'),
('mintu sdsdc', 'adfvdfvaadfvadfv', 'Dr.mintu sharma', '05/04/2023', 'true', 13, '0'),
('mintu sdsdc', 'adfvsd', 'Dr.mintu sharma', '05/04/2023', 'true', 14, '0'),
('mintu sdsdc', 'adfvsd', 'Dr.mintu sharma', '05/04/2023', 'true', 15, '0'),
('mintu shar,a ', '9401069337', 'Dr.mintu sharma', '05/04/2023', 'true', 16, '0'),
('mintu ', '254245', 'Dr.mintu sharma', '06/04/2023', 'true', 17, '0'),
('mintu sharma', 'fgbfgvbfdv', 'mr robot', '1/20/2023', 'true', 18, '9401'),
('mintu sharma', 'fgbfgvbfdv', '', '05/04/2023', 'true', 20, '9401'),
('asda', 'sdv', 'kank', '08/04/2023', 'true', 21, 'ads'),
('asda', 'sdv', 'kank', '08/04/2023', 'true', 22, 'ads'),
('advfa', 'vadv', 'kank', '08/04/2023', 'true', 23, 'adsvaads'),
('mintu', 'dfvb', 'kank', '08/04/2023', 'true', 24, '9401069337'),
('fgbs', 'sfdgb', 'kank', '08/04/2023', 'true', 25, 'sfdb'),
('mintu Sharma', 'none', 'Dr.mintu sharma', '09/04/2023', 'true', 26, '9401069337'),
('', '', 'kank', '09/04/2023', 'true', 27, ''),
('Mintu Sharma', 'Now available lable', 'Dr.mintu sharma', '11/04/2023', 'true', 39, '9401069337'),
('Amar jit', 'Not available ', 'Dr.mintu sharma', '11/04/2023', 'true', 40, '9401069337');

-- --------------------------------------------------------

--
-- Table structure for table `rr_data`
--

CREATE TABLE `rr_data` (
  `id` int(11) NOT NULL,
  `c_id` varchar(50) NOT NULL,
  `rating` int(2) NOT NULL,
  `review` varchar(255) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rr_data`
--

INSERT INTO `rr_data` (`id`, `c_id`, `rating`, `review`, `userName`, `email`) VALUES
(1, 'min01', 5, 'i like this fucking clinic. ', '10526', ''),
(2, 'min01', 3, 'i love !', 'mintu', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `client_Info`
--
ALTER TABLE `client_Info`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `cl_doctor`
--
ALTER TABLE `cl_doctor`
  ADD PRIMARY KEY (`doc_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `Del_PS_data`
--
ALTER TABLE `Del_PS_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `min01_PS_data`
--
ALTER TABLE `min01_PS_data`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `rr_data`
--
ALTER TABLE `rr_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_id` (`c_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cl_doctor`
--
ALTER TABLE `cl_doctor`
  MODIFY `doc_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Del_PS_data`
--
ALTER TABLE `Del_PS_data`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `min01_PS_data`
--
ALTER TABLE `min01_PS_data`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `rr_data`
--
ALTER TABLE `rr_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth`
--
ALTER TABLE `auth`
  ADD CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `client_Info` (`c_id`);

--
-- Constraints for table `cl_doctor`
--
ALTER TABLE `cl_doctor`
  ADD CONSTRAINT `cl_doctor_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `client_Info` (`c_id`);

--
-- Constraints for table `rr_data`
--
ALTER TABLE `rr_data`
  ADD CONSTRAINT `rr_data_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `client_Info` (`c_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
