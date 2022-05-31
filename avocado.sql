-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 22-05-30 22:20
-- 서버 버전: 8.0.18
-- PHP 버전: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `avocado`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `card`
--

CREATE TABLE `card` (
  `cardCode` int(11) NOT NULL,
  `userCode` int(11) NOT NULL,
  `cardDetail` json DEFAULT NULL,
  `deleteFlag` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `card`
--

INSERT INTO `card` (`cardCode`, `userCode`, `cardDetail`, `deleteFlag`) VALUES
(111, 1, '{\"name\": \"Moonsung\", \"brief\": \"I lead IT service industry\", \"email\": \"ceo@avocado.com\", \"phone\": \"+61412345678\", \"skype\": \"avo123\", \"title\": \"CEO\", \"company\": \"Avocado\"}', 0),
(112, 2, '{\"name\": \"Lion\", \"brief\": \"I\'m SD in company Apple\", \"email\": \"sd@apple.com\", \"phone\": \"+61411122233\", \"skype\": \"app123\", \"title\": \"Senior Developer\", \"company\": \"Apple\"}', 0),
(113, 3, '{\"name\": \"Tiger\", \"brief\": \"I\'m working hard like tiger1\", \"email\": \"tiger@orange.com\", \"phone\": \"+61454455566\", \"skype\": \"tiger123\", \"title\": \"Junior Developer\", \"company\": \"Orange\"}', 0),
(114, 4, '{\"name\": \"Cat\", \"brief\": \"I\'m creative web deigner\", \"email\": \"meow@mango.com\", \"phone\": \"+61499988877\", \"skype\": \"meow99\", \"title\": \"Designer\", \"company\": \"Mango\"}', 0),
(120, 15, '{\"name\": \"Eagle4\", \"brief\": \"This is short explaination\", \"email\": \"Email\", \"phone\": \"Phone Number\", \"skype\": \"Skype\", \"title\": \"Hunter\", \"company\": \"Avengers\"}', 1),
(121, 15, '{\"name\": \"Tony Iron\", \"brief\": \"I am Iron man.\", \"email\": \"tony@stark.com\", \"phone\": \"+61412345678\", \"skype\": \"tony_stark11\", \"title\": \"Techo King\", \"company\": \"Tesla Industry \"}', 0),
(122, 16, '{\"name\": \"Bear\", \"brief\": \"I like honey\", \"email\": \"Email\", \"phone\": \"Phone Number\", \"skype\": \"Skype\", \"title\": \"Traveler\", \"company\": \"TA\"}', 0);

-- --------------------------------------------------------

--
-- 테이블 구조 `log`
--

CREATE TABLE `log` (
  `logCode` int(11) NOT NULL,
  `logIp` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session` json DEFAULT NULL,
  `userName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `logTime` datetime NOT NULL,
  `action` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `log`
--

INSERT INTO `log` (`logCode`, `logIp`, `session`, `userName`, `userType`, `logTime`, `action`) VALUES
(1, '192.168.1.223', NULL, 'Guest', 'user', '2022-03-30 15:18:34', '{\"api\": \"/api/guest/login\", \"method\": \"GET\", \"parameter\": null}'),
(2, '192.168.1.223', NULL, 'Guest', 'user', '2022-03-30 15:18:35', '{\"api\": \"/api/pocket/:list\", \"method\": \"GET\", \"parameter\": \"[{code: \'111\', note: \'nice man\'}, {code: \'112\', note: \'good man\'}, {code: \'113\', note: \'work well\'}]\"}'),
(3, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 1, \"curReqTime\": \"2022-05-27 03:00:23.597\", \"lastReqTime\": \"2022-05-27 03:00:20.809\", \"lastResetTime\": \"2022-05-27 03:00:20.809\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:00:24', '\"{ api : \'/user/login\' }\"'),
(4, '192.168.35.244', '{\"box\": {\"ip\": \"192.168.35.244\", \"count\": 1, \"curReqTime\": \"2022-05-27 03:01:41.250\", \"lastReqTime\": \"2022-05-27 03:01:33.304\", \"lastResetTime\": \"2022-05-27 03:01:33.170\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:01:41', '\"{ api : \'/user/login\' }\"'),
(5, '192.168.35.244', '{\"box\": {\"ip\": \"192.168.35.244\", \"count\": 0, \"curReqTime\": \"2022-05-27 03:03:42.994\", \"lastReqTime\": \"2022-05-27 03:03:42.993\", \"lastResetTime\": \"2022-05-27 03:03:42.994\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:03:44', '\"{ api : \'/user/login\' }\"'),
(6, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 0, \"curReqTime\": \"2022-05-27 03:04:05.757\", \"lastReqTime\": \"2022-05-27 03:04:05.756\", \"lastResetTime\": \"2022-05-27 03:04:05.757\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:04:06', '\"{ api : \'/user/login\' }\"'),
(7, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 3, \"curReqTime\": \"2022-05-27 03:04:16.294\", \"lastReqTime\": \"2022-05-27 03:04:10.466\", \"lastResetTime\": \"2022-05-27 03:04:05.757\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-27 03:04:16', '\"{ api : \'/user/logout\' }\"'),
(8, '192.168.35.244', '{\"box\": {\"ip\": \"192.168.35.244\", \"count\": 5, \"curReqTime\": \"2022-05-27 03:04:40.285\", \"lastReqTime\": \"2022-05-27 03:03:50.972\", \"lastResetTime\": \"2022-05-27 03:03:42.994\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:04:40', '\"{ api : \'/user/login\' }\"'),
(9, '192.168.35.244', '{\"box\": {\"ip\": \"192.168.35.244\", \"count\": 11, \"curReqTime\": \"2022-05-27 03:05:00.105\", \"lastReqTime\": \"2022-05-27 03:04:47.688\", \"lastResetTime\": \"2022-05-27 03:03:42.994\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:05:00', '\"{ api : \'/user/login\' }\"'),
(10, '192.168.35.244', '{\"box\": {\"ip\": \"192.168.35.244\", \"count\": 16, \"curReqTime\": \"2022-05-27 03:05:12.574\", \"lastReqTime\": \"2022-05-27 03:05:09.477\", \"lastResetTime\": \"2022-05-27 03:03:42.994\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Bird', 'user', '2022-05-27 03:05:13', '\"{ api : \'/user/logout\' }\"'),
(11, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 0, \"curReqTime\": \"2022-05-27 03:06:57.712\", \"lastReqTime\": \"2022-05-27 03:06:57.711\", \"lastResetTime\": \"2022-05-27 03:06:57.712\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:06:58', '\"{ api : \'/user/login\' }\"'),
(12, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 2, \"curReqTime\": \"2022-05-27 03:07:14.608\", \"lastReqTime\": \"2022-05-27 03:06:58.976\", \"lastResetTime\": \"2022-05-27 03:06:57.712\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Bird', 'user', '2022-05-27 03:07:15', '\"{ api : \'/user/info\' }\"'),
(13, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 3, \"curReqTime\": \"2022-05-27 03:07:25.601\", \"lastReqTime\": \"2022-05-27 03:07:14.608\", \"lastResetTime\": \"2022-05-27 03:06:57.712\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Bird', 'user', '2022-05-27 03:07:26', '\"{ api : \'/user/update\' }\"'),
(14, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 5, \"curReqTime\": \"2022-05-27 03:07:41.900\", \"lastReqTime\": \"2022-05-27 03:07:26.947\", \"lastResetTime\": \"2022-05-27 03:06:57.712\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Bird', 'user', '2022-05-27 03:07:42', '\"{ api : \'/user/logout\' }\"'),
(15, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 0, \"curReqTime\": \"2022-05-27 03:07:49.535\", \"lastReqTime\": \"2022-05-27 03:07:49.535\", \"lastResetTime\": \"2022-05-27 03:07:49.535\"}, \"user\": {\"usercode\": 15, \"username\": \"Bird\", \"usertype\": \"user\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:07:50', '\"{ api : \'/user/login\' }\"'),
(16, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 1, \"curReqTime\": \"2022-05-27 03:13:45.731\", \"lastReqTime\": \"2022-05-27 03:13:02.417\", \"lastResetTime\": \"2022-05-27 03:13:02.417\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:13:46', '\"{ api : \'/user/login\' }\"'),
(17, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 2, \"curReqTime\": \"2022-05-27 03:14:17.916\", \"lastReqTime\": \"2022-05-27 03:14:15.676\", \"lastResetTime\": \"2022-05-27 03:14:13.833\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:14:18', '\"{ api : \'/user/login\' }\"'),
(18, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 1, \"curReqTime\": \"2022-05-27 03:14:39.356\", \"lastReqTime\": \"2022-05-27 03:14:36.879\", \"lastResetTime\": \"2022-05-27 03:14:36.879\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:14:39', '\"{ api : \'/user/login\' }\"'),
(19, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 3, \"curReqTime\": \"2022-05-27 03:14:43.265\", \"lastReqTime\": \"2022-05-27 03:14:40.474\", \"lastResetTime\": \"2022-05-27 03:14:36.879\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-27 03:14:43', '\"{ api : \'/pocket\' }\"'),
(20, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 4, \"curReqTime\": \"2022-05-27 03:14:58.423\", \"lastReqTime\": \"2022-05-27 03:14:43.265\", \"lastResetTime\": \"2022-05-27 03:14:36.879\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-27 03:14:58', '\"{ api : \'/pocket/update\' }\"'),
(21, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 2, \"curReqTime\": \"2022-05-27 03:42:48.895\", \"lastReqTime\": \"2022-05-27 03:42:40.845\", \"lastResetTime\": \"2022-05-27 03:41:25.357\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-27 03:42:49', '\"{ api : \'/user/login\' }\"'),
(22, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 3, \"curReqTime\": \"2022-05-27 03:42:51.922\", \"lastReqTime\": \"2022-05-27 03:42:48.895\", \"lastResetTime\": \"2022-05-27 03:41:25.357\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-27 03:42:52', '\"{ api : \'/pocket\' }\"'),
(23, '192.168.35.11', '{\"box\": {\"ip\": \"192.168.35.11\", \"count\": 4, \"curReqTime\": \"2022-05-27 03:42:55.240\", \"lastReqTime\": \"2022-05-27 03:42:51.922\", \"lastResetTime\": \"2022-05-27 03:41:25.357\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-27 03:42:55', '\"{ api : \'/user/logout\' }\"'),
(24, '127.0.0.1', '{\"box\": {\"ip\": \"127.0.0.1\", \"count\": 11, \"curReqTime\": \"2022-05-28 15:43:47.933\", \"lastReqTime\": \"2022-05-28 15:42:59.180\", \"lastResetTime\": \"2022-05-28 15:34:37.288\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'guest', 'guest', '2022-05-28 15:43:48', '\"{ api : \'/user/login\' }\"'),
(25, '127.0.0.1', '{\"box\": {\"ip\": \"127.0.0.1\", \"count\": 13, \"curReqTime\": \"2022-05-28 15:44:03.136\", \"lastReqTime\": \"2022-05-28 15:43:49.280\", \"lastResetTime\": \"2022-05-28 15:34:37.288\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-28 15:44:03', '\"{ api : \'/user/info\' }\"'),
(26, '127.0.0.1', '{\"box\": {\"ip\": \"127.0.0.1\", \"count\": 15, \"curReqTime\": \"2022-05-28 15:45:33.115\", \"lastReqTime\": \"2022-05-28 15:44:19.63\", \"lastResetTime\": \"2022-05-28 15:34:37.288\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-28 15:45:33', '\"{ api : \'/user/logout\' }\"'),
(27, '127.0.0.1', '{\"box\": {\"ip\": \"127.0.0.1\", \"count\": 15, \"curReqTime\": \"2022-05-28 15:45:33.99\", \"lastReqTime\": \"2022-05-28 15:44:19.63\", \"lastResetTime\": \"2022-05-28 15:34:37.288\"}, \"user\": {\"usercode\": 1, \"username\": \"Moonsung\", \"usertype\": \"admin\"}, \"cookie\": {\"path\": \"/\", \"secure\": false, \"expires\": null, \"httpOnly\": true, \"originalMaxAge\": null}}', 'Moonsung', 'admin', '2022-05-28 15:45:33', '\"{ api : \'/pocket/update\' }\"');

-- --------------------------------------------------------

--
-- 테이블 구조 `notice`
--

CREATE TABLE `notice` (
  `noticeCode` int(11) NOT NULL,
  `noticeDate` datetime NOT NULL,
  `noticeTitle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noticeContent` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `notice`
--

INSERT INTO `notice` (`noticeCode`, `noticeDate`, `noticeTitle`, `noticeContent`) VALUES
(1, '2022-03-01 00:00:00', 'First Update', 'In this update UI has been changed. Please enjoy and let us know your better idea!'),
(2, '2022-03-03 00:00:00', 'Second Update', 'In this update rate limit service has been implement. It allow you access one request per second');

-- --------------------------------------------------------

--
-- 테이블 구조 `pocket`
--

CREATE TABLE `pocket` (
  `userCode` int(11) NOT NULL,
  `cardList` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `pocket`
--

INSERT INTO `pocket` (`userCode`, `cardList`) VALUES
(1, '[{\"cardCode\": 113, \"cardDetail\": {\"name\": \"Tiger\", \"brief\": \"I\'m working hard like tiger1\", \"email\": \"tiger@orange.com\", \"phone\": \"+61454455566\", \"skype\": \"tiger123\", \"title\": \"Junior Developer\", \"company\": \"Orange\"}}, {\"cardCode\": 112, \"cardDetail\": {\"name\": \"Lion\", \"brief\": \"I\'m SD in company Apple\", \"email\": \"sd@apple.com\", \"phone\": \"+61411122233\", \"skype\": \"app123\", \"title\": \"Senior Developer\", \"company\": \"Apple\"}}, {\"cardCode\": 113, \"cardDetail\": {\"name\": \"Tiger\", \"brief\": \"I\'m working hard like tiger1\", \"email\": \"tiger@orange.com\", \"phone\": \"+61454455566\", \"skype\": \"tiger123\", \"title\": \"Junior Developer\", \"company\": \"Orange\"}}]'),
(2, '[]'),
(3, '[{\"cardCode\": 121, \"cardDetail\": {\"name\": \"Tony Iron\", \"brief\": \"I am Iron man.\", \"email\": \"tony@stark.com\", \"phone\": \"+61412345678\", \"skype\": \"tony_stark11\", \"title\": \"Techo King\", \"company\": \"Tesla Industry \"}}, {\"cardCode\": 112, \"cardDetail\": {\"name\": \"Lion\", \"brief\": \"I\'m SD in company Apple\", \"email\": \"sd@apple.com\", \"phone\": \"+61411122233\", \"skype\": \"app123\", \"title\": \"Senior Developer\", \"company\": \"Apple\"}}]'),
(4, '[]'),
(5, '[{\"cardCode\": 112, \"cardDetail\": {\"name\": \"Lion\", \"note\": \"good man\", \"brief\": \"I\'m SD in company Apple\", \"email\": \"sd@apple.com\", \"phone\": \"+61411122233\", \"skype\": \"app123\", \"title\": \"Senior Developer\", \"company\": \"Apple\"}}, {\"cardCode\": 113, \"cardDetail\": {\"name\": \"Tiger\", \"note\": \"work well\", \"brief\": \"I\'m working hard like tiger\", \"email\": \"tiger@orange.com\", \"phone\": \"+61454455566\", \"skype\": \"tiger123\", \"title\": \"Junior Developer\", \"company\": \"Orange\"}}]'),
(6, '[]'),
(15, '[]'),
(16, '[{\"cardCode\": 113, \"cardDetail\": {\"name\": \"Tiger\", \"brief\": \"I\'m working hard like tiger1\", \"email\": \"tiger@orange.com\", \"phone\": \"+61454455566\", \"skype\": \"tiger123\", \"title\": \"Junior Developer\", \"company\": \"Orange\"}}]');

-- --------------------------------------------------------

--
-- 테이블 구조 `setting`
--

CREATE TABLE `setting` (
  `userCode` int(11) NOT NULL,
  `setting` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `setting`
--

INSERT INTO `setting` (`userCode`, `setting`) VALUES
(1, '{\"theme\": \"light\"}'),
(2, '{\"theme\": \"light\"}'),
(3, '{\"theme\": \"light\"}'),
(4, '{\"theme\": \"light\"}'),
(5, '{\"theme\": \"light\"}'),
(6, '{\"theme\": \"light\"}'),
(15, '{\"theme\": \"light\"}'),
(16, '{\"theme\": \"light\"}');

-- --------------------------------------------------------

--
-- 테이블 구조 `user`
--

CREATE TABLE `user` (
  `userCode` int(11) NOT NULL,
  `userName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `deleteFlag` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `user`
--

INSERT INTO `user` (`userCode`, `userName`, `password`, `email`, `userType`, `deleteFlag`) VALUES
(1, 'Moonsung', '$2b$06$JBNxax8q55nLwS0E29fWY.YX/n1CemJuV2lh6qavyZZMVooo.0gnW', 'ms@gmail.com', 'admin', 0),
(2, 'Lion', '$2b$06$JBNxax8q55nLwS0E29fWY.YX/n1CemJuV2lh6qavyZZMVooo.0gnW', 'lion@gmail.com', 'user', 0),
(3, 'Tiger', '$2b$06$JBNxax8q55nLwS0E29fWY.YX/n1CemJuV2lh6qavyZZMVooo.0gnW', 'tiger@gmail.com', 'user', 0),
(4, 'Cat', '$2b$06$JBNxax8q55nLwS0E29fWY.YX/n1CemJuV2lh6qavyZZMVooo.0gnW', 'cat@gmail.com', 'user', 0),
(5, 'Omok', '$2b$06$JBNxax8q55nLwS0E29fWY.YX/n1CemJuV2lh6qavyZZMVooo.0gnW', 'omok@gmail.com', 'user', 0),
(6, 'Jindo', '$2b$06$Ud.bsslwwXel1Cp5uXANHueGi4H.TeLdilin29UGRqlPqwTFWHMtW', 'dog@gmail.com', 'user', 0),
(15, 'Bird', '$2b$06$mK8LQqVr7gWAbgCuqpQnROMLPkqQnzNFL0XI0JqEJzMljtlbx5.qy', 'bird@gmail.com', 'user', 0),
(16, 'Bear', '$2b$06$exKuA5Qq16NTh14hp29XletThHd0JXRsMOabZK0DkkDMGzF1vTuSe', 'bear@gmail.com', 'user', 0);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`cardCode`),
  ADD KEY `userCode` (`userCode`);

--
-- 테이블의 인덱스 `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`logCode`);

--
-- 테이블의 인덱스 `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`noticeCode`);

--
-- 테이블의 인덱스 `pocket`
--
ALTER TABLE `pocket`
  ADD KEY `userCode` (`userCode`);

--
-- 테이블의 인덱스 `setting`
--
ALTER TABLE `setting`
  ADD KEY `userCode` (`userCode`);

--
-- 테이블의 인덱스 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userCode`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `card`
--
ALTER TABLE `card`
  MODIFY `cardCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- 테이블의 AUTO_INCREMENT `log`
--
ALTER TABLE `log`
  MODIFY `logCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 테이블의 AUTO_INCREMENT `notice`
--
ALTER TABLE `notice`
  MODIFY `noticeCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `userCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 덤프된 테이블의 제약사항
--

--
-- 테이블의 제약사항 `card`
--
ALTER TABLE `card`
  ADD CONSTRAINT `card_ibfk_1` FOREIGN KEY (`userCode`) REFERENCES `user` (`userCode`);

--
-- 테이블의 제약사항 `pocket`
--
ALTER TABLE `pocket`
  ADD CONSTRAINT `pocket_ibfk_1` FOREIGN KEY (`userCode`) REFERENCES `user` (`userCode`);

--
-- 테이블의 제약사항 `setting`
--
ALTER TABLE `setting`
  ADD CONSTRAINT `setting_ibfk_1` FOREIGN KEY (`userCode`) REFERENCES `user` (`userCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
