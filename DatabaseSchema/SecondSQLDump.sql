CREATE DATABASE  IF NOT EXISTS `cruiseshiptravelagencydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cruiseshiptravelagencydb`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: cruiseshiptravelagencydb
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `crewcruiseship`
--

LOCK TABLES `crewcruiseship` WRITE;
/*!40000 ALTER TABLE `crewcruiseship` DISABLE KEYS */;
/*!40000 ALTER TABLE `crewcruiseship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `crewmember`
--

LOCK TABLES `crewmember` WRITE;
/*!40000 ALTER TABLE `crewmember` DISABLE KEYS */;
/*!40000 ALTER TABLE `crewmember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cruiseship`
--

LOCK TABLES `cruiseship` WRITE;
/*!40000 ALTER TABLE `cruiseship` DISABLE KEYS */;
/*!40000 ALTER TABLE `cruiseship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cruiseshiprating`
--

LOCK TABLES `cruiseshiprating` WRITE;
/*!40000 ALTER TABLE `cruiseshiprating` DISABLE KEYS */;
/*!40000 ALTER TABLE `cruiseshiprating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cruisetravelplan`
--

LOCK TABLES `cruisetravelplan` WRITE;
/*!40000 ALTER TABLE `cruisetravelplan` DISABLE KEYS */;
/*!40000 ALTER TABLE `cruisetravelplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Charbel','Bou Maroun',2000,'M','Fanar','03532816','charbel-boumaroun@outlook.com','$2a$10$0wdmfTMcEUKfAnuslpd1A.9hrnE0qAuvQ6zHfeV7Hzi8Qnc6Hcgr6'),(2,'Charbel','Bou Maroun',2000,'M','Fanar','03532816','charbel-boumaroun@outlook.com','$2a$10$/GY4kM7Nzzd1rQZzEIHGc.v6/y5yB8t6UPHiT4RnE61EEGeb9IQda'),(3,'Jean','Bou Maroun',2000,'M','Fanar','03532816','charbel-boumaroun@outlook.com','$2a$10$lhYeP.KOqj2wpjJn.9PDPuYDIBnxf22cKI.bhOFfPjGWRKlm1TaZi');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roomplan`
--

LOCK TABLES `roomplan` WRITE;
/*!40000 ALTER TABLE `roomplan` DISABLE KEYS */;
/*!40000 ALTER TABLE `roomplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `stop`
--

LOCK TABLES `stop` WRITE;
/*!40000 ALTER TABLE `stop` DISABLE KEYS */;
/*!40000 ALTER TABLE `stop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `travelplan`
--

LOCK TABLES `travelplan` WRITE;
/*!40000 ALTER TABLE `travelplan` DISABLE KEYS */;
/*!40000 ALTER TABLE `travelplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `travelplanrating`
--

LOCK TABLES `travelplanrating` WRITE;
/*!40000 ALTER TABLE `travelplanrating` DISABLE KEYS */;
/*!40000 ALTER TABLE `travelplanrating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `travelplanstop`
--

LOCK TABLES `travelplanstop` WRITE;
/*!40000 ALTER TABLE `travelplanstop` DISABLE KEYS */;
/*!40000 ALTER TABLE `travelplanstop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-13 16:06:32
