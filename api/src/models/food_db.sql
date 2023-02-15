CREATE DATABASE IF NOT EXISTS `food_db`;
USE `food_db`;

CREATE TABLE IF NOT EXISTS `diets`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) 
);

CREATE TABLE IF NOT EXISTS `recipes`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `summary` VARCHAR(45) NOT NULL,
  `healthscore` VARCHAR(45) NOT NULL,
  `steps` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
 
);

INSERT INTO `diets` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Ketogenic', NULL, NULL),
(2, 'Vegetarian', NULL, NULL),
(3, 'Lacto vegetarian', NULL, NULL),
(4, 'Ovo vegetarian', NULL, NULL),
(5, 'Pescetarian', NULL, NULL),
(6, 'Paleo', NULL, NULL),
(7, 'Primal', NULL, NULL),
(8, 'Low FODmap', NULL, NULL),
(9, 'Whole30', NULL, NULL),
(10, 'Vegan', NULL, NULL);

