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
-- Table structure for table `teambyyear`
--

DROP TABLE IF EXISTS `teambyyear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teambyyear` (
  `teamId` int NOT NULL,
  `teamCity` varchar(45) DEFAULT NULL,
  `teamName` varchar(45) DEFAULT NULL,
  `year` varchar(45) NOT NULL,
  `gp` int DEFAULT NULL,
  `wins` int DEFAULT NULL,
  `losses` int DEFAULT NULL,
  `winPct` double DEFAULT NULL,
  `confRank` int DEFAULT NULL,
  `divRank` int DEFAULT NULL,
  `poWins` int DEFAULT NULL,
  `poLosses` int DEFAULT NULL,
  `confCount` int DEFAULT NULL,
  `divCount` int DEFAULT NULL,
  `nbaFinalsAppearance` varchar(45) DEFAULT NULL,
  `fgm` int DEFAULT NULL,
  `fga` int DEFAULT NULL,
  `fgPct` double DEFAULT NULL,
  `fg3m` int DEFAULT NULL,
  `fg3a` int DEFAULT NULL,
  `fg3Pct` double DEFAULT NULL,
  `ftm` int DEFAULT NULL,
  `fta` int DEFAULT NULL,
  `ftPct` double DEFAULT NULL,
  `oreb` int DEFAULT NULL,
  `dreb` int DEFAULT NULL,
  `reb` int DEFAULT NULL,
  `ast` int DEFAULT NULL,
  `pf` int DEFAULT NULL,
  `stl` int DEFAULT NULL,
  `tov` int DEFAULT NULL,
  `blk` int DEFAULT NULL,
  `pts` int DEFAULT NULL,
  `ptsRank` int DEFAULT NULL,
  `division` varchar(45) DEFAULT NULL,
  `conference` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`teamId`,`year`),
  CONSTRAINT `teamId_fk` FOREIGN KEY (`teamId`) REFERENCES `clasificationrow` (`teamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teambyyear`
--

LOCK TABLES `teambyyear` WRITE;
/*!40000 ALTER TABLE `teambyyear` DISABLE KEYS */;
INSERT INTO `teambyyear` VALUES (1610612737,'Atlanta','Atlanta Hawks','2018-19',82,29,53,0.354,12,5,0,0,15,5,'N/A',3392,7524,0.451,1067,3034,0.352,1443,1918,0.752,955,2825,3780,2118,1932,675,1397,419,9294,12,'SUDESTE','EAST'),(1610612737,'Atlanta','Atlanta Hawks','2019-20',67,20,47,0.299,14,5,0,0,15,5,'N/A',2723,6067,0.449,805,2416,0.333,1237,1566,0.79,661,2237,2898,1605,1548,523,1086,341,7488,23,'SUDESTE','EAST'),(1610612737,'Atlanta','Atlanta Hawks','2020-21',72,41,31,0.569,5,1,10,8,15,5,'N/A',2937,6281,0.468,895,2402,0.373,1417,1745,0.812,760,2525,3285,1737,1392,503,953,342,8186,13,'SUDESTE','EAST'),(1610612737,'Atlanta','Atlanta Hawks','2021-22',82,43,39,0.524,8,2,1,4,15,5,'N/A',3401,7241,0.47,1056,2821,0.374,1485,1829,0.812,823,2783,3606,2017,1534,587,972,348,9343,6,'SUDESTE','EAST'),(1610612737,'Atlanta','Atlanta Hawks','2022-23',82,41,41,0.5,7,2,2,4,15,5,'N/A',3658,7574,0.483,882,2505,0.352,1513,1850,0.818,920,2719,3639,2049,1541,580,1060,401,9711,3,'SUDESTE','EAST'),(1610612738,'Boston','Boston Celtics','2018-19',82,49,33,0.598,4,3,5,4,15,5,'N/A',3451,7423,0.465,1032,2829,0.365,1282,1598,0.802,804,2849,3653,2155,1670,706,1052,435,9216,14,'ATLANTICO','EAST'),(1610612738,'Boston','Boston Celtics','2019-20',72,48,24,0.667,3,2,10,7,15,5,'N/A',2971,6448,0.461,905,2487,0.364,1336,1668,0.801,768,2549,3317,1655,1553,595,995,406,8183,10,'ATLANTICO','EAST'),(1610612738,'Boston','Boston Celtics','2020-21',72,36,36,0.5,7,4,1,4,15,5,'N/A',2985,6401,0.466,979,2618,0.374,1160,1496,0.775,765,2421,3186,1689,1471,556,1012,383,8109,16,'ATLANTICO','EAST'),(1610612738,'Boston','Boston Celtics','2021-22',82,51,31,0.622,2,1,14,10,15,5,'FINALS APPEARANCE',3341,7167,0.466,1085,3044,0.356,1397,1713,0.816,863,2915,3778,2036,1521,591,1118,478,9164,12,'ATLANTICO','EAST'),(1610612738,'Boston','Boston Celtics','2022-23',82,57,25,0.695,2,1,11,8,15,5,'N/A',3460,7278,0.475,1315,3492,0.377,1436,1769,0.812,796,2921,3717,2186,1542,521,1095,430,9671,4,'ATLANTICO','EAST'),(1610612739,'Cleveland','Cleveland Cavaliers','2018-19',82,19,63,0.232,14,5,0,0,15,5,'N/A',3189,7184,0.444,847,2388,0.355,1342,1694,0.792,879,2619,3498,1698,1642,534,1106,195,8567,29,'CENTRAL','EAST'),(1610612739,'Cleveland','Cleveland Cavaliers','2019-20',65,19,46,0.292,15,5,0,0,15,5,'N/A',2619,5715,0.458,727,2070,0.351,983,1296,0.758,704,2172,2876,1500,1188,447,1073,211,6948,27,'CENTRAL','EAST'),(1610612739,'Cleveland','Cleveland Cavaliers','2020-21',72,22,50,0.306,13,4,0,0,15,5,'N/A',2778,6175,0.45,720,2141,0.336,1200,1614,0.743,751,2327,3078,1716,1308,559,1114,325,7476,30,'CENTRAL','EAST'),(1610612739,'Cleveland','Cleveland Cavaliers','2021-22',82,44,38,0.537,9,3,0,0,15,5,'N/A',3255,6940,0.469,953,2686,0.355,1376,1810,0.76,837,2786,3623,2064,1433,580,1181,343,8839,25,'CENTRAL','EAST'),(1610612739,'Cleveland','Cleveland Cavaliers','2022-23',82,51,31,0.622,4,2,1,4,15,5,'N/A',3408,6984,0.488,950,2589,0.367,1439,1844,0.78,795,2574,3369,2045,1560,586,1094,384,9205,25,'CENTRAL','EAST'),(1610612740,'New Orleans','New Orleans Pelicans','2018-19',82,33,49,0.402,13,4,0,0,15,5,'N/A',3581,7563,0.473,842,2449,0.344,1462,1921,0.761,909,2969,3878,2216,1732,610,1215,441,9466,3,'SUDOESTE','WEST'),(1610612740,'New Orleans','New Orleans Pelicans','2019-20',72,30,42,0.417,13,5,0,0,15,5,'N/A',3065,6598,0.465,982,2656,0.37,1229,1687,0.729,797,2551,3348,1932,1524,539,1181,358,8341,6,'SUDOESTE','WEST'),(1610612740,'New Orleans','New Orleans Pelicans','2020-21',72,31,41,0.431,11,4,0,0,15,5,'N/A',3060,6412,0.477,762,2190,0.348,1369,1878,0.729,845,2568,3413,1872,1295,545,1052,315,8251,9,'SUDOESTE','WEST'),(1610612740,'New Orleans','New Orleans Pelicans','2021-22',82,36,46,0.439,8,3,2,4,15,5,'N/A',3294,7212,0.457,873,2629,0.332,1501,1903,0.789,981,2726,3707,2047,1612,680,1153,328,8962,21,'SUDOESTE','WEST'),(1610612740,'New Orleans','New Orleans Pelicans','2022-23',82,42,40,0.512,9,2,0,0,15,5,'N/A',3447,7180,0.48,899,2468,0.364,1585,2000,0.793,866,2717,3583,2122,1678,681,1196,337,9378,15,'SUDOESTE','WEST'),(1610612741,'Chicago','Chicago Bulls','2018-19',82,22,60,0.268,13,4,0,0,15,5,'N/A',3266,7205,0.453,745,2123,0.351,1328,1695,0.783,718,2799,3517,1796,1663,603,1159,351,8605,27,'CENTRAL','EAST'),(1610612741,'Chicago','Chicago Bulls','2019-20',65,22,43,0.338,11,3,0,0,15,5,'N/A',2573,5762,0.447,793,2282,0.348,1006,1332,0.755,680,2041,2721,1510,1417,652,1005,265,6945,28,'CENTRAL','EAST'),(1610612741,'Chicago','Chicago Bulls','2020-21',72,31,41,0.431,11,3,0,0,15,5,'N/A',3035,6380,0.476,904,2446,0.37,995,1258,0.791,693,2544,3237,1927,1362,482,1089,304,7969,21,'CENTRAL','EAST'),(1610612741,'Chicago','Chicago Bulls','2021-22',82,46,36,0.561,6,2,1,4,15,5,'N/A',3422,7127,0.48,872,2364,0.369,1436,1766,0.813,711,2760,3471,1958,1540,585,1053,336,9152,13,'CENTRAL','EAST'),(1610612741,'Chicago','Chicago Bulls','2022-23',82,40,42,0.488,10,3,0,0,15,5,'N/A',3488,7116,0.49,854,2367,0.361,1446,1788,0.809,694,2779,3473,2006,1551,644,1097,371,9276,22,'CENTRAL','EAST'),(1610612742,'Dallas','Dallas Mavericks','2018-19',82,33,49,0.402,14,5,0,0,15,5,'N/A',3182,7122,0.447,1022,3002,0.34,1541,2076,0.742,832,2884,3716,1918,1650,533,1167,351,8927,21,'SUDOESTE','WEST'),(1610612742,'Dallas','Dallas Mavericks','2019-20',75,43,32,0.573,7,2,2,4,15,5,'N/A',3124,6772,0.461,1136,3095,0.367,1392,1787,0.779,791,2729,3520,1849,1462,460,953,363,8776,1,'SUDOESTE','WEST'),(1610612742,'Dallas','Dallas Mavericks','2020-21',72,42,30,0.583,5,1,3,4,15,5,'N/A',2958,6287,0.47,994,2744,0.362,1186,1524,0.778,657,2463,3120,1647,1396,450,869,311,8096,17,'SUDOESTE','WEST'),(1610612742,'Dallas','Dallas Mavericks','2021-22',82,52,30,0.634,4,2,9,9,15,5,'N/A',3222,6982,0.461,1073,3063,0.35,1341,1739,0.771,759,2769,3528,1918,1612,552,1025,325,8858,24,'SUDOESTE','WEST'),(1610612742,'Dallas','Dallas Mavericks','2022-23',82,38,44,0.463,11,3,0,0,15,5,'N/A',3283,6909,0.475,1246,3362,0.371,1554,2057,0.755,625,2556,3181,1880,1697,514,1002,304,9366,16,'SUDOESTE','WEST'),(1610612743,'Denver','Denver Nuggets','2018-19',82,54,28,0.659,2,1,7,7,15,5,'N/A',3439,7384,0.466,903,2571,0.351,1294,1714,0.755,972,2832,3804,2245,1644,634,1102,363,9075,20,'NOROESTE','WEST'),(1610612743,'Denver','Denver Nuggets','2019-20',73,46,27,0.63,3,1,9,10,15,5,'N/A',3069,6488,0.473,801,2234,0.359,1185,1526,0.777,786,2436,3222,1952,1485,586,1005,337,8124,12,'NOROESTE','WEST'),(1610612743,'Denver','Denver Nuggets','2020-21',72,47,25,0.653,3,2,4,6,15,5,'N/A',3114,6422,0.485,927,2462,0.377,1129,1406,0.803,758,2442,3200,1933,1374,582,972,323,8284,8,'NOROESTE','WEST'),(1610612743,'Denver','Denver Nuggets','2021-22',82,48,34,0.585,6,2,1,4,15,5,'N/A',3416,7079,0.483,1039,2944,0.353,1372,1725,0.795,752,2865,3617,2279,1639,592,1189,305,9243,10,'NOROESTE','WEST'),(1610612743,'Denver','Denver Nuggets','2022-23',82,53,29,0.646,1,1,12,3,15,5,'N/A',3574,7088,0.504,969,2559,0.379,1378,1834,0.751,828,2699,3527,2368,1525,618,1192,368,9495,12,'NOROESTE','WEST'),(1610612744,'Golden State','Golden State Warriors','2018-19',82,57,25,0.695,1,1,14,8,15,5,'FINALS APPEARANCE',3612,7361,0.491,1087,2824,0.385,1339,1672,0.801,797,2990,3787,2413,1757,625,1169,525,9650,2,'PACIFICO','WEST'),(1610612744,'Golden State','Golden State Warriors','2019-20',65,15,50,0.231,15,5,0,0,15,5,'N/A',2510,5730,0.438,678,2032,0.334,1214,1511,0.803,647,2138,2785,1663,1304,534,969,299,6912,29,'PACIFICO','WEST'),(1610612744,'Golden State','Golden State Warriors','2020-21',72,39,33,0.542,9,4,0,0,15,5,'N/A',2973,6347,0.468,1048,2789,0.376,1193,1520,0.785,574,2524,3098,1991,1526,587,1080,342,8187,12,'PACIFICO','WEST'),(1610612744,'Golden State','Golden State Warriors','2021-22',82,53,29,0.646,3,2,16,6,15,5,'LEAGUE CHAMPION',3323,7087,0.469,1176,3231,0.364,1280,1665,0.769,800,2930,3730,2223,1723,719,1221,372,9102,15,'PACIFICO','WEST'),(1610612744,'Golden State','Golden State Warriors','2022-23',82,44,38,0.537,6,4,6,7,15,5,'N/A',3538,7393,0.479,1363,3540,0.385,1314,1655,0.794,864,2793,3657,2446,1757,588,1336,323,9753,2,'PACIFICO','WEST'),(1610612745,'Houston','Houston Rockets','2018-19',82,53,29,0.646,4,1,6,5,15,5,'N/A',3218,7163,0.449,1323,3721,0.356,1582,2001,0.791,836,2613,3449,1741,1803,700,1094,405,9341,11,'SUDOESTE','WEST'),(1610612745,'Houston','Houston Rockets','2019-20',72,44,28,0.611,4,1,5,7,15,5,'N/A',2936,6512,0.451,1126,3261,0.345,1484,1876,0.791,704,2484,3188,1557,1566,627,1057,371,8482,4,'SUDOESTE','WEST'),(1610612745,'Houston','Houston Rockets','2020-21',72,17,55,0.236,15,5,0,0,15,5,'N/A',2826,6372,0.444,992,2923,0.339,1189,1606,0.74,671,2396,3067,1699,1407,546,1060,361,7833,24,'SUDOESTE','WEST'),(1610612745,'Houston','Houston Rockets','2021-22',82,20,62,0.244,15,5,0,0,15,5,'N/A',3229,7083,0.456,1105,3170,0.349,1434,2010,0.713,786,2660,3446,1932,1692,600,1351,382,8997,19,'SUDOESTE','WEST'),(1610612745,'Houston','Houston Rockets','2022-23',82,22,60,0.268,14,4,0,0,15,5,'N/A',3329,7287,0.457,856,2619,0.327,1567,2078,0.754,1100,2695,3795,1835,1679,600,1332,374,9081,28,'SUDOESTE','WEST'),(1610612746,'LA','LA Clippers','2018-19',82,48,34,0.585,8,2,2,4,15,5,'N/A',3384,7178,0.471,821,2118,0.388,1853,2340,0.792,796,2936,3732,1970,1913,561,1193,385,9442,5,'PACIFICO','WEST'),(1610612746,'LA','LA Clippers','2019-20',72,49,23,0.681,2,2,7,6,15,5,'N/A',2992,6425,0.466,895,2410,0.371,1498,1894,0.791,767,2664,3431,1708,1594,511,1051,338,8377,5,'PACIFICO','WEST'),(1610612746,'LA','LA Clippers','2020-21',72,47,25,0.653,4,2,10,9,15,5,'N/A',3009,6242,0.482,1027,2498,0.411,1164,1387,0.839,678,2501,3179,1756,1383,509,949,295,8209,10,'PACIFICO','WEST'),(1610612746,'LA','LA Clippers','2021-22',82,42,40,0.512,9,3,0,0,15,5,'N/A',3285,7170,0.458,1047,2802,0.374,1273,1606,0.793,747,2860,3607,1969,1528,608,1126,406,8890,23,'PACIFICO','WEST'),(1610612746,'LA','LA Clippers','2022-23',82,44,38,0.537,5,3,1,4,15,5,'N/A',3370,7059,0.477,1041,2735,0.381,1533,1962,0.781,803,2742,3545,1959,1598,580,1167,364,9314,18,'PACIFICO','WEST'),(1610612747,'Los Angeles','Los Angeles Lakers','2018-19',82,37,45,0.451,10,4,0,0,15,5,'N/A',3491,7425,0.47,847,2541,0.333,1336,1910,0.699,835,2985,3820,2096,1701,618,1284,440,9165,16,'PACIFICO','WEST'),(1610612747,'Los Angeles','Los Angeles Lakers','2019-20',71,52,19,0.732,1,1,16,5,15,5,'LEAGUE CHAMPION',3006,6269,0.48,782,2242,0.349,1260,1728,0.729,757,2490,3247,1803,1471,612,1077,468,8054,16,'PACIFICO','WEST'),(1610612747,'Los Angeles','Los Angeles Lakers','2020-21',72,42,30,0.583,7,3,2,4,15,5,'N/A',2925,6197,0.472,796,2248,0.354,1241,1679,0.739,695,2490,3185,1775,1377,562,1095,386,7887,22,'PACIFICO','WEST'),(1610612747,'Los Angeles','Los Angeles Lakers','2021-22',82,33,49,0.402,11,4,0,0,15,5,'N/A',3415,7279,0.469,982,2826,0.347,1380,1884,0.732,782,2826,3608,1968,1654,626,1191,425,9192,11,'PACIFICO','WEST'),(1610612747,'Los Angeles','Los Angeles Lakers','2022-23',82,43,39,0.524,7,5,8,8,15,5,'N/A',3516,7298,0.482,885,2558,0.346,1691,2182,0.775,818,2930,3748,2072,1466,526,1154,378,9608,6,'PACIFICO','WEST'),(1610612748,'Miami','Miami Heat','2018-19',82,39,43,0.476,10,3,0,0,15,5,'N/A',3251,7218,0.45,928,2658,0.349,1238,1782,0.695,921,2879,3800,1991,1712,627,1208,448,8668,26,'SUDESTE','EAST'),(1610612748,'Miami','Miami Heat','2019-20',73,44,29,0.603,5,1,14,7,15,5,'FINALS APPEARANCE',2880,6160,0.468,979,2584,0.379,1440,1840,0.783,620,2619,3239,1892,1501,547,1088,332,8179,11,'SUDESTE','EAST'),(1610612748,'Miami','Miami Heat','2020-21',72,40,32,0.556,6,2,0,4,15,5,'N/A',2824,6029,0.468,932,2606,0.358,1201,1520,0.79,579,2409,2988,1895,1363,569,1013,286,7781,25,'SUDESTE','EAST'),(1610612748,'Miami','Miami Heat','2021-22',82,53,29,0.646,1,1,11,7,15,5,'N/A',3246,6954,0.467,1114,2936,0.379,1416,1753,0.808,807,2778,3585,2090,1679,606,1194,265,9022,17,'SUDESTE','EAST'),(1610612748,'Miami','Miami Heat','2022-23',82,44,38,0.537,8,1,11,6,15,5,'N/A',3215,6991,0.46,980,2852,0.344,1567,1885,0.831,796,2533,3329,1955,1516,655,1106,243,8977,30,'SUDESTE','EAST'),(1610612749,'Milwaukee','Milwaukee Bucks','2018-19',82,60,22,0.732,1,1,10,5,15,5,'N/A',3555,7471,0.476,1105,3134,0.353,1471,1904,0.773,762,3316,4078,2136,1608,615,1137,486,9686,1,'CENTRAL','EAST'),(1610612749,'Milwaukee','Milwaukee Bucks','2019-20',73,56,17,0.767,1,1,5,5,15,5,'N/A',3160,6638,0.476,1007,2840,0.355,1336,1800,0.742,691,3083,3774,1889,1431,526,1102,429,8663,2,'CENTRAL','EAST'),(1610612749,'Milwaukee','Milwaukee Bucks','2020-21',72,46,26,0.639,3,1,16,7,15,5,'LEAGUE CHAMPION',3221,6610,0.487,1038,2669,0.389,1169,1539,0.76,741,2724,3465,1834,1244,585,995,334,8649,1,'CENTRAL','EAST'),(1610612749,'Milwaukee','Milwaukee Bucks','2021-22',82,51,31,0.622,3,1,7,5,15,5,'N/A',3429,7331,0.468,1153,3151,0.366,1459,1881,0.776,840,2990,3830,1960,1494,623,1100,326,9470,3,'CENTRAL','EAST'),(1610612749,'Milwaukee','Milwaukee Bucks','2022-23',82,58,24,0.707,1,1,1,4,15,5,'N/A',3504,7411,0.473,1217,3306,0.368,1364,1837,0.743,914,3074,3988,2115,1481,521,1199,403,9589,8,'CENTRAL','EAST'),(1610612750,'Minnesota','Minnesota Timberwolves','2018-19',82,36,46,0.439,11,5,0,0,15,5,'N/A',3413,7483,0.456,827,2357,0.351,1570,1995,0.787,923,2750,3673,2018,1664,683,1074,411,9223,13,'NOROESTE','WEST'),(1610612750,'Minnesota','Minnesota Timberwolves','2019-20',64,19,45,0.297,14,5,0,0,15,5,'N/A',2586,5865,0.441,853,2540,0.336,1223,1624,0.753,675,2193,2868,1525,1370,555,981,362,7248,24,'NOROESTE','WEST'),(1610612750,'Minnesota','Minnesota Timberwolves','2020-21',72,23,49,0.319,13,4,0,0,15,5,'N/A',2932,6546,0.448,944,2706,0.349,1265,1662,0.761,757,2376,3133,1846,1507,632,1027,398,8073,18,'NOROESTE','WEST'),(1610612750,'Minnesota','Minnesota Timberwolves','2021-22',82,46,36,0.561,7,3,2,4,15,5,'N/A',3411,7458,0.457,1211,3386,0.358,1474,1894,0.778,921,2700,3621,2106,1786,721,1175,460,9507,1,'NOROESTE','WEST'),(1610612750,'Minnesota','Minnesota Timberwolves','2022-23',82,42,40,0.512,8,2,1,4,15,5,'N/A',3515,7167,0.49,997,2731,0.365,1467,1942,0.755,749,2686,3435,2145,1768,657,1258,444,9494,13,'NOROESTE','WEST'),(1610612751,'Brooklyn','Brooklyn Nets','2018-19',82,42,40,0.512,6,4,1,4,15,5,'N/A',3301,7358,0.449,1047,2965,0.353,1555,2088,0.745,900,2919,3819,1954,1763,539,1236,339,9204,15,'ATLANTICO','EAST'),(1610612751,'Brooklyn','Brooklyn Nets','2019-20',72,35,37,0.486,7,4,0,4,15,5,'N/A',2908,6498,0.448,941,2746,0.343,1291,1732,0.745,766,2683,3449,1761,1510,464,1099,323,8048,17,'ATLANTICO','EAST'),(1610612751,'Brooklyn','Brooklyn Nets','2020-21',72,48,24,0.667,2,2,7,5,15,5,'N/A',3106,6289,0.494,1020,2600,0.392,1305,1623,0.804,640,2559,3199,1929,1371,484,975,379,8537,2,'ATLANTICO','EAST'),(1610612751,'Brooklyn','Brooklyn Nets','2021-22',82,44,38,0.537,7,4,0,4,15,5,'N/A',3442,7251,0.475,940,2602,0.361,1434,1781,0.805,844,2796,3640,2071,1670,582,1153,448,9258,9,'ATLANTICO','EAST'),(1610612751,'Brooklyn','Brooklyn Nets','2022-23',82,45,37,0.549,6,4,0,4,15,5,'N/A',3399,6978,0.487,1048,2771,0.378,1449,1811,0.8,674,2648,3322,2093,1730,585,1127,506,9295,20,'ATLANTICO','EAST'),(1610612752,'New York','New York Knicks','2018-19',82,17,65,0.207,15,5,0,0,15,5,'N/A',3134,7241,0.433,823,2421,0.34,1484,1956,0.759,857,2811,3668,1646,1713,557,1151,422,8575,28,'ATLANTICO','EAST'),(1610612752,'New York','New York Knicks','2019-20',66,21,45,0.318,12,5,0,0,15,5,'N/A',2638,5896,0.447,631,1872,0.337,1076,1550,0.694,795,2274,3069,1456,1464,504,946,313,6983,26,'ATLANTICO','EAST'),(1610612752,'New York','New York Knicks','2020-21',72,41,31,0.569,4,3,1,4,15,5,'N/A',2839,6225,0.456,847,2163,0.392,1181,1506,0.784,696,2554,3250,1541,1473,507,932,365,7706,26,'ATLANTICO','EAST'),(1610612752,'New York','New York Knicks','2021-22',82,37,45,0.451,11,5,0,0,15,5,'N/A',3088,7069,0.437,1082,3029,0.357,1473,1980,0.744,941,2841,3782,1793,1672,570,1087,399,8731,26,'ATLANTICO','EAST'),(1610612752,'New York','New York Knicks','2022-23',82,47,35,0.573,5,3,6,5,15,5,'N/A',3444,7328,0.47,1037,2930,0.354,1589,2087,0.761,1031,2790,3821,1880,1666,527,1065,340,9514,11,'ATLANTICO','EAST'),(1610612753,'Orlando','Orlando Magic','2018-19',82,42,40,0.512,7,1,1,4,15,5,'N/A',3316,7307,0.454,937,2633,0.356,1231,1575,0.782,822,2902,3724,2095,1526,543,1082,445,8800,24,'SUDESTE','EAST'),(1610612753,'Orlando','Orlando Magic','2019-20',73,33,40,0.452,8,2,1,4,15,5,'N/A',2871,6468,0.444,807,2354,0.343,1282,1656,0.774,751,2498,3249,1747,1336,599,937,396,7831,22,'SUDESTE','EAST'),(1610612753,'Orlando','Orlando Magic','2020-21',72,21,51,0.292,14,5,0,0,15,5,'N/A',2754,6423,0.429,784,2288,0.343,1196,1543,0.775,747,2525,3272,1571,1237,496,924,318,7488,29,'SUDESTE','EAST'),(1610612753,'Orlando','Orlando Magic','2021-22',82,22,60,0.268,15,5,0,0,15,5,'N/A',3139,7240,0.434,999,3022,0.331,1270,1614,0.787,746,2885,3631,1947,1612,555,1188,367,8547,29,'SUDESTE','EAST'),(1610612753,'Orlando','Orlando Magic','2022-23',82,34,48,0.415,13,4,0,0,15,5,'N/A',3323,7074,0.47,883,2551,0.346,1607,2050,0.784,833,2713,3546,1906,1652,603,1236,382,9136,26,'SUDESTE','EAST'),(1610612754,'Indiana','Indiana Pacers','2018-19',82,48,34,0.585,5,2,0,4,15,5,'N/A',3390,7135,0.475,779,2081,0.374,1298,1727,0.752,762,2766,3528,2128,1594,713,1122,404,8857,22,'CENTRAL','EAST'),(1610612754,'Indiana','Indiana Pacers','2019-20',73,45,28,0.616,4,2,0,4,15,5,'N/A',3075,6457,0.476,743,2046,0.363,1096,1393,0.787,636,2489,3125,1888,1445,543,967,376,7989,19,'CENTRAL','EAST'),(1610612754,'Indiana','Indiana Pacers','2020-21',72,34,38,0.472,9,2,0,0,15,5,'N/A',3115,6567,0.474,889,2445,0.364,1183,1493,0.792,648,2424,3072,1973,1453,611,975,460,8302,6,'CENTRAL','EAST'),(1610612754,'Indiana','Indiana Pacers','2021-22',82,25,57,0.305,13,4,0,0,15,5,'N/A',3398,7338,0.463,997,2899,0.344,1347,1754,0.768,925,2671,3596,2081,1675,582,1183,457,9140,14,'CENTRAL','EAST'),(1610612754,'Indiana','Indiana Pacers','2022-23',82,35,47,0.427,11,4,0,0,15,5,'N/A',3444,7345,0.469,1112,3030,0.367,1535,1944,0.79,832,2575,3407,2213,1741,631,1224,478,9535,10,'CENTRAL','EAST'),(1610612755,'Philadelphia','Philadelphia 76ers','2018-19',82,51,31,0.622,3,2,7,5,15,5,'N/A',3407,7233,0.471,889,2474,0.359,1742,2258,0.771,892,3025,3917,2207,1745,606,1223,432,9445,4,'ATLANTICO','EAST'),(1610612755,'Philadelphia','Philadelphia 76ers','2019-20',73,43,30,0.589,6,3,0,4,15,5,'N/A',3000,6417,0.468,848,2307,0.368,1236,1638,0.755,764,2553,3317,1884,1529,586,1037,389,8084,15,'ATLANTICO','EAST'),(1610612755,'Philadelphia','Philadelphia 76ers','2020-21',72,49,23,0.681,1,1,7,5,15,5,'N/A',2981,6257,0.476,811,2169,0.374,1409,1836,0.767,722,2522,3244,1706,1456,655,1040,447,8182,14,'ATLANTICO','EAST'),(1610612755,'Philadelphia','Philadelphia 76ers','2021-22',82,51,31,0.622,4,2,6,6,15,5,'N/A',3230,6932,0.466,950,2608,0.364,1605,1955,0.821,700,2770,3470,1945,1590,633,1027,435,9015,18,'ATLANTICO','EAST'),(1610612755,'Philadelphia','Philadelphia 76ers','2022-23',82,54,28,0.659,3,2,7,4,15,5,'N/A',3347,6870,0.487,1035,2675,0.387,1719,2058,0.835,715,2641,3356,2063,1675,635,1121,389,9448,14,'ATLANTICO','EAST'),(1610612756,'Phoenix','Phoenix Suns','2018-19',82,19,63,0.232,15,5,0,0,15,5,'N/A',3289,7164,0.459,790,2400,0.329,1447,1858,0.779,748,2563,3311,1957,1932,735,1279,418,8815,23,'PACIFICO','WEST'),(1610612756,'Phoenix','Phoenix Suns','2019-20',73,34,39,0.466,10,3,0,0,15,5,'N/A',3006,6429,0.468,831,2320,0.358,1451,1740,0.834,712,2465,3177,1987,1609,559,1077,290,8294,7,'PACIFICO','WEST'),(1610612756,'Phoenix','Phoenix Suns','2020-21',72,51,21,0.708,2,1,14,8,15,5,'FINALS APPEARANCE',3118,6357,0.49,940,2490,0.378,1124,1347,0.834,630,2462,3092,1939,1374,517,902,312,8300,7,'PACIFICO','WEST'),(1610612756,'Phoenix','Phoenix Suns','2021-22',82,64,18,0.78,1,1,7,6,15,5,'N/A',3581,7389,0.485,951,2616,0.364,1303,1635,0.797,801,2913,3714,2244,1633,702,1060,359,9416,5,'PACIFICO','WEST'),(1610612756,'Phoenix','Phoenix Suns','2022-23',82,45,37,0.549,4,2,6,5,15,5,'N/A',3453,7388,0.467,1001,2674,0.374,1412,1781,0.793,971,2657,3628,2235,1739,585,1110,432,9319,17,'PACIFICO','WEST'),(1610612757,'Portland','Portland Trail Blazers','2018-19',82,53,29,0.646,3,2,8,8,15,5,'N/A',3470,7427,0.467,904,2520,0.359,1558,1914,0.814,967,2968,3935,1887,1669,546,1135,413,9402,6,'NOROESTE','WEST'),(1610612757,'Portland','Portland Trail Blazers','2019-20',74,35,39,0.473,8,4,1,4,15,5,'N/A',3122,6749,0.463,952,2525,0.377,1312,1632,0.804,754,2599,3353,1525,1606,465,946,451,8508,3,'NOROESTE','WEST'),(1610612757,'Portland','Portland Trail Blazers','2020-21',72,42,30,0.583,6,3,2,4,15,5,'N/A',2973,6558,0.453,1132,2939,0.385,1282,1558,0.823,766,2441,3207,1531,1362,496,799,363,8360,5,'NOROESTE','WEST'),(1610612757,'Portland','Portland Trail Blazers','2021-22',82,27,55,0.329,13,4,0,0,15,5,'N/A',3161,7144,0.442,1043,3017,0.346,1346,1771,0.76,854,2661,3515,1880,1728,657,1187,366,8711,27,'NOROESTE','WEST'),(1610612757,'Portland','Portland Trail Blazers','2022-23',82,33,49,0.402,13,5,0,0,15,5,'N/A',3317,7001,0.474,1056,2893,0.365,1609,2021,0.796,774,2551,3325,1981,1643,553,1185,376,9299,19,'NOROESTE','WEST'),(1610612758,'Sacramento','Sacramento Kings','2018-19',82,39,43,0.476,9,3,0,0,15,5,'N/A',3541,7637,0.464,927,2455,0.378,1354,1865,0.726,906,2819,3725,2083,1751,679,1095,363,9363,9,'PACIFICO','WEST'),(1610612758,'Sacramento','Sacramento Kings','2019-20',72,31,41,0.431,12,4,0,0,15,5,'N/A',2943,6364,0.462,914,2511,0.364,1127,1464,0.77,695,2372,3067,1713,1595,556,1043,293,7927,21,'PACIFICO','WEST'),(1610612758,'Sacramento','Sacramento Kings','2020-21',72,31,41,0.431,12,5,0,0,15,5,'N/A',3067,6382,0.481,874,2400,0.364,1181,1585,0.745,674,2307,2981,1836,1400,543,963,358,8189,11,'PACIFICO','WEST'),(1610612758,'Sacramento','Sacramento Kings','2021-22',82,30,52,0.366,12,5,0,0,15,5,'N/A',3321,7223,0.46,937,2722,0.344,1466,1908,0.768,784,2737,3521,1943,1552,588,1156,369,9045,16,'PACIFICO','WEST'),(1610612758,'Sacramento','Sacramento Kings','2022-23',82,48,34,0.585,3,1,3,4,15,5,'N/A',3573,7232,0.494,1128,3060,0.369,1624,2055,0.79,782,2699,3481,2237,1616,574,1106,275,9898,1,'PACIFICO','WEST'),(1610612759,'San Antonio','San Antonio Spurs','2018-19',82,48,34,0.585,7,2,3,4,15,5,'N/A',3468,7248,0.478,812,2071,0.392,1408,1720,0.819,757,2910,3667,2013,1487,501,992,386,9156,18,'SUDOESTE','WEST'),(1610612759,'San Antonio','San Antonio Spurs','2019-20',71,32,39,0.451,11,4,0,0,15,5,'N/A',2995,6350,0.472,760,2021,0.376,1348,1664,0.81,640,2530,3170,1751,1377,518,895,390,8098,14,'SUDOESTE','WEST'),(1610612759,'San Antonio','San Antonio Spurs','2020-21',72,33,39,0.458,10,3,0,0,15,5,'N/A',3014,6518,0.462,716,2046,0.35,1254,1584,0.792,669,2489,3158,1759,1293,505,821,366,7998,20,'SUDOESTE','WEST'),(1610612759,'San Antonio','San Antonio Spurs','2021-22',82,34,48,0.415,10,4,0,0,15,5,'N/A',3546,7601,0.467,925,2626,0.352,1262,1673,0.754,901,2815,3716,2289,1483,626,1043,403,9279,8,'SUDOESTE','WEST'),(1610612759,'San Antonio','San Antonio Spurs','2022-23',82,22,60,0.268,15,5,0,0,15,5,'N/A',3533,7593,0.465,911,2640,0.345,1292,1739,0.743,965,2619,3584,2232,1630,572,1253,322,9269,23,'SUDOESTE','WEST'),(1610612760,'Oklahoma City','Oklahoma City Thunder','2018-19',82,49,33,0.598,6,4,1,4,15,5,'N/A',3497,7706,0.454,932,2677,0.348,1461,2049,0.713,1031,2911,3942,1917,1839,766,1145,425,9387,7,'NOROESTE','WEST'),(1610612760,'Oklahoma City','Oklahoma City Thunder','2019-20',72,44,28,0.611,5,2,3,4,15,5,'N/A',2879,6156,0.468,770,2171,0.355,1422,1787,0.796,593,2495,3088,1562,1390,550,986,353,7950,20,'NOROESTE','WEST'),(1610612760,'Oklahoma City','Oklahoma City Thunder','2020-21',72,22,50,0.306,14,5,0,0,15,5,'N/A',2795,6338,0.441,857,2529,0.339,1113,1536,0.725,715,2568,3283,1588,1305,504,1162,316,7560,28,'NOROESTE','WEST'),(1610612760,'Oklahoma City','Oklahoma City Thunder','2021-22',82,24,58,0.293,14,5,0,0,15,5,'N/A',3141,7310,0.43,991,3066,0.323,1233,1632,0.756,854,2887,3741,1822,1497,622,1145,380,8506,30,'NOROESTE','WEST'),(1610612760,'Oklahoma City','Oklahoma City Thunder','2022-23',82,40,42,0.488,10,3,0,0,15,5,'N/A',3533,7590,0.465,995,2797,0.356,1572,1944,0.809,934,2645,3579,2002,1722,676,1069,341,9633,5,'NOROESTE','WEST'),(1610612761,'Toronto','Toronto Raptors','2018-19',82,58,24,0.707,2,1,16,8,15,5,'LEAGUE CHAMPION',3460,7305,0.474,1015,2771,0.366,1449,1803,0.804,786,2920,3706,2085,1724,680,1150,437,9384,8,'ATLANTICO','EAST'),(1610612761,'Toronto','Toronto Raptors','2019-20',72,53,19,0.736,2,1,7,4,15,5,'N/A',2897,6331,0.458,995,2663,0.374,1329,1670,0.796,685,2583,3268,1816,1559,636,1067,358,8118,13,'ATLANTICO','EAST'),(1610612761,'Toronto','Toronto Raptors','2020-21',72,27,45,0.375,12,5,0,0,15,5,'N/A',2859,6383,0.448,1041,2831,0.368,1252,1536,0.815,680,2314,2994,1735,1526,618,952,388,8011,19,'ATLANTICO','EAST'),(1610612761,'Toronto','Toronto Raptors','2021-22',82,48,34,0.585,5,3,2,4,15,5,'N/A',3332,7489,0.445,979,2808,0.349,1327,1749,0.759,1095,2622,3717,1809,1607,738,1021,376,8970,20,'ATLANTICO','EAST'),(1610612761,'Toronto','Toronto Raptors','2022-23',82,41,41,0.5,9,5,0,0,15,5,'N/A',3434,7489,0.459,880,2626,0.335,1506,1922,0.784,1043,2485,3528,1961,1641,772,956,424,9254,24,'ATLANTICO','EAST'),(1610612762,'Utah','Utah Jazz','2018-19',82,50,32,0.61,5,3,1,4,15,5,'N/A',3314,7082,0.468,993,2789,0.356,1540,2092,0.736,820,2981,3801,2133,1728,663,1240,483,9161,17,'NOROESTE','WEST'),(1610612762,'Utah','Utah Jazz','2019-20',72,44,28,0.611,6,3,3,4,15,5,'N/A',2886,6130,0.471,963,2537,0.38,1278,1641,0.779,656,2577,3233,1615,1468,438,1089,292,8013,18,'NOROESTE','WEST'),(1610612762,'Utah','Utah Jazz','2020-21',72,52,20,0.722,1,1,6,5,15,5,'N/A',2971,6344,0.468,1205,3098,0.389,1235,1546,0.799,765,2709,3474,1703,1335,474,1023,371,8382,4,'NOROESTE','WEST'),(1610612762,'Utah','Utah Jazz','2021-22',82,49,33,0.598,5,1,2,4,15,5,'N/A',3327,7067,0.471,1192,3308,0.36,1470,1916,0.767,884,2916,3800,1836,1547,588,1148,402,9316,7,'NOROESTE','WEST'),(1610612762,'Utah','Utah Jazz','2022-23',82,37,45,0.451,12,4,0,0,15,5,'N/A',3485,7365,0.473,1094,3099,0.353,1536,1955,0.786,968,2794,3762,2129,1679,500,1259,429,9600,7,'NOROESTE','WEST'),(1610612763,'Memphis','Memphis Grizzlies','2018-19',82,33,49,0.402,12,3,0,0,15,5,'N/A',3113,6924,0.45,811,2368,0.342,1453,1882,0.772,723,2703,3426,1963,1801,684,1147,448,8490,30,'SUDOESTE','WEST'),(1610612763,'Memphis','Memphis Grizzlies','2019-20',73,34,39,0.466,9,3,0,0,15,5,'N/A',3106,6634,0.468,798,2297,0.347,1212,1589,0.763,754,2643,3397,1965,1546,576,1113,398,8222,9,'SUDOESTE','WEST'),(1610612763,'Memphis','Memphis Grizzlies','2020-21',72,38,34,0.528,8,2,1,4,15,5,'N/A',3085,6608,0.467,803,2258,0.356,1184,1536,0.771,803,2543,3346,1938,1349,655,957,364,8157,15,'SUDOESTE','WEST'),(1610612763,'Memphis','Memphis Grizzlies','2021-22',82,56,26,0.683,2,1,6,6,15,5,'N/A',3571,7739,0.461,945,2679,0.353,1393,1898,0.734,1159,2873,4032,2131,1620,800,1082,533,9480,2,'SUDOESTE','WEST'),(1610612763,'Memphis','Memphis Grizzlies','2022-23',82,51,31,0.622,2,1,2,4,15,5,'N/A',3585,7551,0.475,985,2807,0.351,1432,1954,0.733,988,2835,3823,2135,1643,680,1116,473,9587,9,'SUDOESTE','WEST'),(1610612764,'Washington','Washington Wizards','2018-19',82,32,50,0.39,11,4,0,0,15,5,'N/A',3456,7387,0.468,930,2731,0.341,1508,1963,0.768,794,2679,3473,2154,1701,683,1154,379,9350,10,'SUDESTE','EAST'),(1610612764,'Washington','Washington Wizards','2019-20',72,25,47,0.347,9,3,0,0,15,5,'N/A',2990,6544,0.457,864,2345,0.368,1394,1770,0.788,732,2295,3027,1801,1634,574,1020,309,8238,8,'SUDESTE','EAST'),(1610612764,'Washington','Washington Wizards','2020-21',72,34,38,0.472,8,3,1,4,15,5,'N/A',3108,6547,0.475,733,2088,0.351,1449,1884,0.769,697,2557,3254,1835,1555,528,1036,297,8398,3,'SUDESTE','EAST'),(1610612764,'Washington','Washington Wizards','2021-22',82,35,47,0.427,12,4,0,0,15,5,'N/A',3327,7056,0.472,860,2512,0.342,1393,1778,0.783,737,2798,3535,2052,1545,522,1077,406,8907,22,'SUDESTE','EAST'),(1610612764,'Washington','Washington Wizards','2022-23',82,35,47,0.427,12,3,0,0,15,5,'N/A',3456,7127,0.485,925,2601,0.356,1442,1838,0.785,774,2804,3578,2083,1539,561,1158,424,9279,21,'SUDESTE','EAST'),(1610612765,'Detroit','Detroit Pistons','2018-19',82,41,41,0.5,8,3,0,4,15,5,'N/A',3185,7238,0.44,993,2854,0.348,1415,1893,0.747,936,2752,3688,1845,1811,569,1135,331,8778,25,'CENTRAL','EAST'),(1610612765,'Detroit','Detroit Pistons','2019-20',66,20,46,0.303,13,4,0,0,15,5,'N/A',2595,5658,0.459,791,2157,0.367,1097,1476,0.743,644,2109,2753,1589,1299,490,1008,299,7078,25,'CENTRAL','EAST'),(1610612765,'Detroit','Detroit Pistons','2020-21',72,20,52,0.278,15,5,0,0,15,5,'N/A',2783,6162,0.452,832,2370,0.351,1278,1683,0.759,694,2381,3075,1743,1477,531,1075,371,7676,27,'CENTRAL','EAST'),(1610612765,'Detroit','Detroit Pistons','2021-22',82,23,59,0.28,14,5,0,0,15,5,'N/A',3129,7267,0.431,925,2838,0.326,1413,1806,0.782,900,2625,3525,1924,1799,630,1163,393,8596,28,'CENTRAL','EAST'),(1610612765,'Detroit','Detroit Pistons','2022-23',82,17,65,0.207,15,5,0,0,15,5,'N/A',3244,7140,0.454,934,2659,0.351,1623,2106,0.771,916,2564,3480,1884,1813,574,1237,308,9045,29,'CENTRAL','EAST'),(1610612766,'Charlotte','Charlotte Hornets','2018-19',82,39,43,0.476,9,2,0,0,15,5,'N/A',3297,7362,0.448,977,2783,0.351,1510,1895,0.797,814,2778,3592,1905,1550,591,1001,405,9081,19,'SUDESTE','EAST'),(1610612766,'Charlotte','Charlotte Hornets','2019-20',65,23,42,0.354,10,4,0,0,15,5,'N/A',2425,5586,0.434,785,2231,0.352,1052,1406,0.748,715,2066,2781,1549,1223,428,949,268,6687,30,'SUDESTE','EAST'),(1610612766,'Charlotte','Charlotte Hornets','2020-21',72,33,39,0.458,10,4,0,0,15,5,'N/A',2875,6324,0.455,985,2666,0.369,1146,1505,0.761,762,2389,3151,1933,1298,565,1069,344,7881,23,'SUDESTE','EAST'),(1610612766,'Charlotte','Charlotte Hornets','2021-22',82,43,39,0.524,10,3,0,0,15,5,'N/A',3508,7497,0.468,1143,3130,0.365,1298,1753,0.74,888,2767,3655,2302,1629,707,1087,402,9457,4,'SUDESTE','EAST'),(1610612766,'Charlotte','Charlotte Hornets','2022-23',82,27,55,0.329,14,5,0,0,15,5,'N/A',3385,7413,0.457,881,2669,0.33,1447,1933,0.749,901,2751,3652,2062,1661,634,1164,425,9098,27,'SUDESTE','EAST');
/*!40000 ALTER TABLE `teambyyear` ENABLE KEYS */;
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