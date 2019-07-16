-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS recipe_db;
-- Creates the "blogger" database --
CREATE DATABASE recipe_db;



CREATE TABLE recipes
(
	id INT NOT NULL AUTO_INCREMENT,
	recipe_name VARCHAR(255) NOT NULL,
	ingredients VARCHAR(255) NOT NUll,
	PRIMARY KEY (id)
	
);

