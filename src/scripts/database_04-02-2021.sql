CREATE DATABASE COLLABORATOR

CREATE TABLE EMPLOYEES(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   CPF            VARCHAR(15)  NOT NULL,
   PHONE          VARCHAR(50),
   EMAIL          VARCHAR(50)   NOT NULL,
   BIRTH_DATE     DATE    NOT NULL,
   HIRE_DATE      DATE    NOT NULL

);