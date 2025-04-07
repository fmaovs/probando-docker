-- Asegurar que se usa MySQL
SET SQL_MODE = "NO_ENGINE_SUBSTITUTION";
SET GLOBAL sql_mode = "NO_ENGINE_SUBSTITUTION";

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS rest_api;

-- Usar la base de datos
USE rest_api;

CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_categoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categorias` VALUES ('01','hamburguesa'),('02','pollo'),('03','bebidas'),('07','empanadas');


CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` varchar(10) NOT NULL,
  `nombre_producto` varchar(150) NOT NULL,
  `descripcion_producto` longtext NOT NULL,
  `precio_producto` decimal(15,2) NOT NULL,
  `foto_producto` varchar(300) NOT NULL,
  `id_categoria` varchar(2) NOT NULL,
  `nombre_categoria` varchar(50) NOT NULL,
  `upload_date` datetime NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `productos` VALUES ('010001','hamburguesa doble doble','AppIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.le',9000.00,'/images/010001.JPG','01','hamburguesa','2018-05-28 21:39:17'),('010002','hamburguesa pollo','AppIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.le',7000.00,'/images/010002.JPG','01','hamburguesa','2018-05-28 21:39:17'),('010004','hamburguesa doble queso','AppIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.le',7000.00,'/images/010004.JPG','01','hamburguesa','2018-05-28 21:39:17'),('020001','pollo apanado','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',9500.00,'/images/020001.JPG','02','pollo','2024-05-25 23:11:58'),('030003','cervezas artesanales','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',12500.00,'/images/pola.JPG','03','bebidas','2024-06-09 09:46:33'),('070000','empanada de carne','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',2500.00,'/images/cebolla.JPG','07','empanadas','2024-08-11 09:39:37'),('131313','mentas 9','dg sfsdf sdfsdffs',920.00,'/images/mentas.JPG','03','bebidas','2024-09-08 08:25:25'),('54900','chaqueta roja 3','chaqueta roja roja 3',9000.00,'/images/787898.jpg','89','ropa','2024-11-27 21:53:32'),('65678','cebolla','gdgdf',54.00,'/images/cebolla.JPG','80','bebidas','2024-09-08 11:51:08'),('690099','toamte choncto','toamte de guiso ',300.00,'/images/tomate.JPG','80','verduras','2024-09-19 10:09:47'),('748596','Chaueta','sfsafsdfsdfsf ',25000.00,'/images/748596.JPG','99','ropa','2024-11-27 21:15:55'),('777777','cosote54444','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',300.00,'/images/caramelos.JPG','99','golosinas','2024-11-13 16:40:11'),('787898','chaqueta roja','chaqueta roja roja',9000.00,'/images/787898.jpg','dd','ropa','2024-11-27 21:44:44'),('990099','toamte choncto','toamte de guiso ',300.00,'/images/tomate.JPG','80','verduras','2024-09-08 11:49:55');

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` varchar(10) NOT NULL,
  `nombre_usuario` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `correo_usuario` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `clave_usuario` varchar(25) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `rol_usuario` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `foto_usuario` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `upload_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `usuarios` VALUES ('','','','','user','','2024-06-12 17:26:49'),('101010','pepito perez','pepito@gmail.com','12345','user','/images/101010.jpg','2018-05-28 21:39:17'),('202020','armando pela','armando@gmail.com','abc','user','/images/2020202.jpg','2018-05-28 21:39:17'),('404040','pedro perez','pedro@gmail.com','1212','user','/images/404040.jpg','2024-05-29 20:22:28'),('505050','tony stark','stark@gmail.com','121212','user','/images/505050.JPG','2024-06-12 17:31:28'),('707070','natacha romanof','natacha@gmail.com','1234','user','/images/707070.jpg','2024-06-15 14:49:28'),('747474','estiben herererer','h@gmail.com','123456','user','/images/747474.jpg','2024-06-20 19:22:42'),('808080','Maria Magdalena','rbchus@gmail.com','123456','user','/images/808080.jpg','2024-06-15 15:32:06'),('878787','BRUCE BANNER J','bruce@gmail.com','aaa','user','/images/878787.jpg','2024-06-20 19:16:40'),('898581','Ramon Valdez','rv@gmail.com','12345','user','/images/898581.jpg','2024-11-29 09:48:51');
