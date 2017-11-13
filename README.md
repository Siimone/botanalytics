# BotAnalytics
A smart way to analyze Telegram Bot activities

## Installation

### Database
Import `db_sample.sql` inside your DBMS to create the database schema with some example data.
### Backend
Insert your DBMS credentials inside `config.json`, then type
```bash
  npm install
```
### Frontend
Place inside frontend folder and install npm dependencies by typing
```bash
  npm install
```
# Visit localhost:4200!

## Database documentation
It containes the schema. It has 4 columns:
- `id` -  Record identifier, auto increment
- `user_id` - Unique telegram user identifier
- `action` - The command sent to the Bot
- `date` - Unix timestamp of the message
You have to insert a new record by calling an insert query when a bot receive a new command
## Backend documentation:
A Node Express server that offers Rest API to che frontend application. You have to insert your DBMS credentials inside `config.json` to allow Express to query your database.
## Frontend:
Angular4 Application, just install npm dipendencies.
   

Visit: localhost:4200
