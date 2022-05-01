# eCommerceBackend

## Description

This is a backend application that is used to look at products and categories of a commercial website.</br>
This application was built to work on understanding sequilize and how you can apply it to MySQL databases.</br>
By using CRUD operations, the eCommerce data can be navigated through and manipulated as we like.</br>

## Learned

- Create database with MySQL and sequilize
- Create model data amd schema relationships with sequelize
- Create seed data with sequelize
- Link files through index.js to control easier module exporting
- Using asynchronous functions to allow code to execute
- Use CRUD when referring to different routes

## Table of Contents

- [Description](#description)
- [Learned](#learned)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)

## Installation

**.env file required**

1. Create .env folder within root
2. Layout:</br>
DB_USER=''</br>
DB_PW=''<br>
DB_NAME='ecommerce_db'</br>
3. Use your MySQL username for DB_USER
4. User your MySQL password for DB_PW</br>

NPM | Notes
--- | --- 
express | Connection to locally hosted server
dotenv | Allows for enviornment files to be accessed
mysql2 | MySQL package to access database
sequelize | MySQL package to allow for cleaner coding

Database | Database name (required)
--- | ---
MySQL | ecommerce_db

## Usage

After acquiring code and installing all dependencies, connect to and create database</br> 
by running `npm run seed` within the terminal. The application needs data</br>
to be able to function properly.</br>

_Click on the image to go to a video of the application sourcing a database_

[![SOURCE_DATABASE](./public/images/databaseE.png)](https://drive.google.com/file/d/1LJILkNWs-UfGcjsibDqBv7p7H9zAqJtY/view)

This application connects to a local host server after running `node server` or</br> 
`npm run start` within the terminal. From here we can open postman or insomnia.</br>
While in postman or insomnia the created routes can be used for CRUD operations.</br>

_Click on the image to go to a video of the application using CRUD operations_

[![CRUD](./public/images/postmanE.png)](https://drive.google.com/file/d/1Ma-W7szWdrGeQH8d_RmE2fGLLiTMgzHt/view)

_Click on the image to go to a video of more CRUD operations_

[![CRUD](./public/images/postmanP.png)](https://drive.google.com/file/d/1-7gnkFUivJLrKxTpoCjqwIZIsCIrOGPl/view)

## Credits

Code by: Anthony Ditore</br>
Github: [aditore](https://github.com/aditore)</br>

## Features

- MySQL database