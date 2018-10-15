/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
-- create a database for grocery_list app only if it doesnt exist. (MYSQL 13.1.11)
-- if wanna drop .look up drop documents.
DROP DATABASE IF EXISTS grocery_list;
CREATE DATABASE grocery_list;
USE grocery_list;
-- create a table to store items
CREATE TABLE groceries (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  quantity smallint NOT NULL, 
  list int NOT NULL, 
  PRIMARY KEY(id),
  FOREIGN KEY (stores) REFERENCES list(id)
);

CREATE TABLE list (
  id int NOT NULL AUTO_INCREMENT,
  store varchar(100) NOT NULL, 
  PRIMARY KEY(id)
)
-- unique id, name, quantity fields
-- add a test item
INSERT INTO groceries (name, quantity) VALUES('dark chocolate', 8);
