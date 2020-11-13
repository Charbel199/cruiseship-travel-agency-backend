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
-- Table structure for table `crewcruiseship`
--

DROP TABLE IF EXISTS `crewcruiseship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crewcruiseship` (
  `crewMemberShipId` int NOT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `crewMemberId` int DEFAULT NULL,
  `shipId` int DEFAULT NULL,
  PRIMARY KEY (`crewMemberShipId`),
  KEY `crewCruiseShipShipId_idx` (`shipId`),
  KEY `crewCruiseShipCrewId_idx` (`crewMemberId`),
  CONSTRAINT `crewCruiseShipCrewId` FOREIGN KEY (`crewMemberId`) REFERENCES `crewmember` (`crewMemberId`),
  CONSTRAINT `crewCruiseShipShipId` FOREIGN KEY (`shipId`) REFERENCES `cruiseship` (`shipId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `crewmember`
--

DROP TABLE IF EXISTS `crewmember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crewmember` (
  `crewMemberId` int NOT NULL,
  `crewMemberFirstName` varchar(30) DEFAULT NULL,
  `crewMemberLastName` varchar(30) DEFAULT NULL,
  `crewMemberDateOfBirth` year DEFAULT NULL,
  `crewMemberGender` varchar(1) DEFAULT NULL,
  `crewMemberAddress` varchar(255) DEFAULT NULL,
  `crewMemberTelephoneNumber` varchar(30) DEFAULT NULL,
  `crewMemberPosition` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`crewMemberId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cruiseship`
--

DROP TABLE IF EXISTS `cruiseship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cruiseship` (
  `shipId` int NOT NULL,
  `shipName` varchar(100) DEFAULT NULL,
  `shipEntertainmentInfo` text,
  `shipNumberOfFloors` int DEFAULT NULL,
  `shipTonnage` int DEFAULT NULL,
  `shipSpeed` int DEFAULT NULL,
  `shipVolume` int DEFAULT NULL,
  `shipNumberOfRooms` int DEFAULT NULL,
  `shipCrewCapacity` int DEFAULT NULL,
  `shipPictureURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`shipId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cruiseshiprating`
--

DROP TABLE IF EXISTS `cruiseshiprating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cruiseshiprating` (
  `cruiseShipRatingId` int NOT NULL,
  `customerId` int DEFAULT NULL,
  `cruiseShipId` int DEFAULT NULL,
  `shipRating` int DEFAULT NULL,
  `shipCustomerReview` text,
  PRIMARY KEY (`cruiseShipRatingId`),
  KEY `cruiseShipRatingCustomerId_idx` (`customerId`),
  KEY `cruiseShipRatingCruiseShipId_idx` (`cruiseShipId`),
  CONSTRAINT `cruiseShipRatingCruiseShipId` FOREIGN KEY (`cruiseShipId`) REFERENCES `cruiseship` (`shipId`),
  CONSTRAINT `cruiseShipRatingCustomerId` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cruisetravelplan`
--

DROP TABLE IF EXISTS `cruisetravelplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cruisetravelplan` (
  `cruiseTravelPlanId` int NOT NULL,
  `shipId` int DEFAULT NULL,
  `travelPlanId` int DEFAULT NULL,
  `departureDate` date DEFAULT NULL,
  `returnDate` date DEFAULT NULL,
  PRIMARY KEY (`cruiseTravelPlanId`),
  KEY `cruiseTravelPlanShipId_idx` (`shipId`),
  KEY `cruiseTravelPlanPlanId_idx` (`travelPlanId`),
  CONSTRAINT `cruiseTravelPlanPlanId` FOREIGN KEY (`travelPlanId`) REFERENCES `travelplan` (`travelPlanId`),
  CONSTRAINT `cruiseTravelPlanShipId` FOREIGN KEY (`shipId`) REFERENCES `cruiseship` (`shipId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customerId` int NOT NULL,
  `customerFirstName` varchar(30) DEFAULT NULL,
  `customerLastName` varchar(30) DEFAULT NULL,
  `customerDateOfBirth` year DEFAULT NULL,
  `customerGender` varchar(1) DEFAULT NULL,
  `customerAddress` varchar(255) DEFAULT NULL,
  `customerTelephoneNumber` varchar(30) DEFAULT NULL,
  `customerEmail` varchar(255) DEFAULT NULL,
  `customerPassword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `reservationId` int NOT NULL,
  `reservationTicketId` int DEFAULT NULL,
  `reservationRoomId` int DEFAULT NULL,
  `reservationTravelPlanId` int DEFAULT NULL,
  PRIMARY KEY (`reservationId`),
  KEY `reservationTickerId_idx` (`reservationTicketId`),
  KEY `reservationRoomId_idx` (`reservationRoomId`),
  KEY `reservationTravelPlanId_idx` (`reservationTravelPlanId`),
  CONSTRAINT `reservationRoomId` FOREIGN KEY (`reservationRoomId`) REFERENCES `room` (`roomId`),
  CONSTRAINT `reservationTickerId` FOREIGN KEY (`reservationTicketId`) REFERENCES `ticket` (`ticketId`),
  CONSTRAINT `reservationTravelPlanId` FOREIGN KEY (`reservationTravelPlanId`) REFERENCES `travelplan` (`travelPlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `roomId` int NOT NULL,
  `roomFloor` int DEFAULT NULL,
  `roomPlanId` int DEFAULT NULL,
  `roomShipId` int DEFAULT NULL,
  PRIMARY KEY (`roomId`),
  KEY `roomRoomPlanId_idx` (`roomPlanId`),
  KEY `roomShipId_idx` (`roomShipId`),
  CONSTRAINT `roomRoomPlanId` FOREIGN KEY (`roomPlanId`) REFERENCES `roomplan` (`roomPlanId`),
  CONSTRAINT `roomShipId` FOREIGN KEY (`roomShipId`) REFERENCES `cruiseship` (`shipId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `roomplan`
--

DROP TABLE IF EXISTS `roomplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roomplan` (
  `roomPlanId` int NOT NULL,
  `roomCapacity` int DEFAULT NULL,
  `roomClass` varchar(20) DEFAULT NULL,
  `roomInfo` text,
  `roomPrice` int DEFAULT NULL,
  `roomPictureURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roomPlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stop`
--

DROP TABLE IF EXISTS `stop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stop` (
  `stopId` int NOT NULL,
  `stopDestination` varchar(255) DEFAULT NULL,
  `stopGoogleURL` varchar(255) DEFAULT NULL,
  `stopPictureURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stopId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticketId` int NOT NULL,
  `ticketDateOfPurchase` date DEFAULT NULL,
  `departureDate` date DEFAULT NULL,
  `ticketCustomerId` int DEFAULT NULL,
  PRIMARY KEY (`ticketId`),
  KEY `ticketCustomerId_idx` (`ticketCustomerId`),
  CONSTRAINT `ticketCustomerId` FOREIGN KEY (`ticketCustomerId`) REFERENCES `customer` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `travelplan`
--

DROP TABLE IF EXISTS `travelplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travelplan` (
  `travelPlanId` int NOT NULL,
  `travelPlanDescription` text,
  `travelPlanRegion` varchar(50) DEFAULT NULL,
  `travelPlanPrice` int DEFAULT NULL,
  PRIMARY KEY (`travelPlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `travelplanrating`
--

DROP TABLE IF EXISTS `travelplanrating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travelplanrating` (
  `travelPlanRatingId` int NOT NULL,
  `customerId` int DEFAULT NULL,
  `travelPlanId` int DEFAULT NULL,
  `travelPlanRating` int DEFAULT NULL,
  `travelPlanCustomerReview` text,
  PRIMARY KEY (`travelPlanRatingId`),
  KEY `travelPlanRatingCustomerId_idx` (`customerId`),
  KEY `travelPlanRatingPlanId_idx` (`travelPlanId`),
  CONSTRAINT `travelPlanRatingCustomerId` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`),
  CONSTRAINT `travelPlanRatingPlanId` FOREIGN KEY (`travelPlanId`) REFERENCES `travelplan` (`travelPlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `travelplanstop`
--

DROP TABLE IF EXISTS `travelplanstop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travelplanstop` (
  `travelPlanStopId` int NOT NULL,
  `stopArrivalDate` date DEFAULT NULL,
  `stopDepartureDate` date DEFAULT NULL,
  `stopRank` int DEFAULT NULL,
  `travelPlanId` int DEFAULT NULL,
  `stopId` int DEFAULT NULL,
  PRIMARY KEY (`travelPlanStopId`),
  KEY `travelPlanStopPlanId_idx` (`travelPlanId`),
  KEY `travelPlanStopStopId_idx` (`stopId`),
  CONSTRAINT `travelPlanStopPlanId` FOREIGN KEY (`travelPlanId`) REFERENCES `travelplan` (`travelPlanId`),
  CONSTRAINT `travelPlanStopStopId` FOREIGN KEY (`stopId`) REFERENCES `stop` (`stopId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-13 14:11:30
