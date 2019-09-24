
-- create database named burgers_db
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table named burgers
CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
burger_name varchar
    (255) NOT NULL,
devoured boolean not null default 0, 
PRIMARY KEY
    (id)
);


