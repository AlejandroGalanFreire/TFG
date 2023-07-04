-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: nbaanalitics_db
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `clasificationrow`
--

DROP TABLE IF EXISTS `clasificationrow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clasificationrow` (
  `id` int NOT NULL,
  `teamId` int DEFAULT NULL,
  `leagueId` varchar(50) DEFAULT NULL,
  `seasonId` int DEFAULT NULL,
  `conference` varchar(50) DEFAULT NULL,
  `team` varchar(50) DEFAULT NULL,
  `played` int DEFAULT NULL,
  `won` int DEFAULT NULL,
  `lost` int DEFAULT NULL,
  `wonPct` double DEFAULT NULL,
  `league` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqueLeagueAndScoreboard` (`league`,`teamId`),
  UNIQUE KEY `teamId_UNIQUE` (`teamId`),
  KEY `league_idx` (`league`),
  CONSTRAINT `league` FOREIGN KEY (`league`) REFERENCES `league` (`leagueName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clasificationrow`
--

LOCK TABLES `clasificationrow` WRITE;
/*!40000 ALTER TABLE `clasificationrow` DISABLE KEYS */;
INSERT INTO `clasificationrow` VALUES (0,1610612749,'0',22022,'EAST',' Milwaukee',82,58,24,0.707,'NBA'),(1,1610612738,'0',22022,'EAST',' Boston',82,57,25,0.695,'NBA'),(2,1610612755,'0',22022,'EAST',' Philadelphia',82,54,28,0.659,'NBA'),(3,1610612739,'0',22022,'EAST',' Cleveland',82,51,31,0.622,'NBA'),(4,1610612752,'0',22022,'EAST',' New York',82,47,35,0.573,'NBA'),(5,1610612751,'0',22022,'EAST',' Brooklyn',82,45,37,0.549,'NBA'),(6,1610612748,'0',22022,'EAST',' Miami',82,44,38,0.537,'NBA'),(7,1610612737,'0',22022,'EAST',' Atlanta',82,41,41,0.5,'NBA'),(8,1610612761,'0',22022,'EAST',' Toronto',82,41,41,0.5,'NBA'),(9,1610612741,'0',22022,'EAST',' Chicago',82,40,42,0.488,'NBA'),(10,1610612754,'0',22022,'EAST',' Indiana',82,35,47,0.427,'NBA'),(11,1610612764,'0',22022,'EAST',' Washington',82,35,47,0.427,'NBA'),(12,1610612753,'0',22022,'EAST',' Orlando',82,34,48,0.415,'NBA'),(13,1610612766,'0',22022,'EAST',' Charlotte',82,27,55,0.329,'NBA'),(14,1610612765,'0',22022,'EAST',' Detroit',82,17,65,0.207,'NBA'),(15,1610612743,'0',22022,'WEST',' Denver',82,53,29,0.646,'NBA'),(16,1610612763,'0',22022,'WEST',' Memphis',82,51,31,0.622,'NBA'),(17,1610612758,'0',22022,'WEST',' Sacramento',82,48,34,0.585,'NBA'),(18,1610612756,'0',22022,'WEST',' Phoenix',82,45,37,0.549,'NBA'),(19,1610612744,'0',22022,'WEST',' Golden State',82,44,38,0.537,'NBA'),(20,1610612746,'0',22022,'WEST',' LA Clippers',82,44,38,0.537,'NBA'),(21,1610612747,'0',22022,'WEST',' L.A. Lakers',82,43,39,0.524,'NBA'),(22,1610612750,'0',22022,'WEST',' Minnesota',82,42,40,0.512,'NBA'),(23,1610612740,'0',22022,'WEST',' New Orleans',82,42,40,0.512,'NBA'),(24,1610612760,'0',22022,'WEST',' Oklahoma City',82,40,42,0.488,'NBA'),(25,1610612742,'0',22022,'WEST',' Dallas',82,38,44,0.463,'NBA'),(26,1610612762,'0',22022,'WEST',' Utah',82,37,45,0.451,'NBA'),(27,1610612757,'0',22022,'WEST',' Portland',82,33,49,0.402,'NBA'),(28,1610612745,'0',22022,'WEST',' Houston',82,22,60,0.268,'NBA'),(29,1610612759,'0',22022,'WEST',' San Antonio',82,22,60,0.268,'NBA'),(30,1700000001,'1',22022,'ACB','Barcelona',34,29,5,0.853,'ACB'),(31,1700000002,'1',22022,'ACB','Baskonia',34,28,6,0.824,'ACB'),(32,1700000003,'1',22022,'ACB','Real Madrid',34,28,6,0.824,'ACB'),(33,1700000004,'1',22022,'ACB','Tenerife',34,24,10,0.706,'ACB'),(34,1700000005,'1',22022,'ACB','Unicaja',34,24,10,0.706,'ACB'),(35,1700000006,'1',22022,'ACB','Gran Canaria',34,19,15,0.559,'ACB'),(36,1700000007,'1',22022,'ACB','Joventut Badalona',34,19,15,0.559,'ACB'),(37,1700000008,'1',22022,'ACB','Valencia',34,17,17,0.5,'ACB'),(38,1700000009,'1',22022,'ACB','Murcia',34,16,18,0.471,'ACB'),(39,1700000010,'1',22022,'ACB','Breogan',34,14,20,0.412,'ACB'),(40,1700000011,'1',22022,'ACB','Obradoiro CAB',34,14,20,0.412,'ACB'),(41,1700000012,'1',22022,'ACB','Bilbao',34,14,20,0.412,'ACB'),(42,1700000013,'1',22022,'ACB','Basket Zaragoza',34,12,22,0.353,'ACB'),(43,1700000014,'1',22022,'ACB','Manresa',34,12,22,0.353,'ACB'),(44,1700000015,'1',22022,'ACB','Basquet Girona',34,11,23,0.324,'ACB'),(45,1700000016,'1',22022,'ACB','Granada',34,11,23,0.324,'ACB'),(46,1700000017,'1',22022,'ACB','Real Betis',34,10,24,0.294,'ACB'),(47,1700000018,'1',22022,'ACB','Fuenlabrada',34,4,30,0.118,'ACB');
/*!40000 ALTER TABLE `clasificationrow` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-04 16:17:47