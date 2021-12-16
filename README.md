# README #

This README document steps are necessary to get this application up and running.

### What is this repository for? ###

* Quick summary
This is a simple sample project used to help learning or quickstart a nodejs backend project.
It has only one table, "users" and a crud API to access it.
A sqlite database is used for dev environment and a mysql connector is set for production (using .env parameters)

* Version
1.0.0 : First version based on express / knex


### How do I get set up? ###

* Dependencies
node / npm
A database (posgres or mysql) for production environnement.
* Database configuration
TODO
* Summary of set up
```bash
git clone https://github.com/vincentmoreau-se/kickstarter_nodejs.git
cd kickstarter_nodejs
npm install
npm run migrate
npm run seed
```
* Configuration
Fill .env file with .env_sample as an example
* Fill database
```bash
npm run migrate
npm run seed
```
*Start project in dev environnment
```bash
npm start
```
* Start project in prod environnment
```bash
NODE_ENV=production node app.js
```

