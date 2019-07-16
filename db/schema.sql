<<<<<<< HEAD
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

=======
DROP DATABASE IF EXISTS recipes_db;
CREATE DATABASE recipes_db;
>>>>>>> 98395e1edcf92290371c8c6d693246e38dc712d2
