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
Endpoints:
- `/graph/commands` -  It returns every single commands sent to the bot with is frequency, displayed with an horizontal bar chart.
- `/graph/commands/count` - It returns the number of commands sent the bot
- `/graph/commands/most-used` - It returns the five most used commands, displayed with a pie chart.
- `/graph/users/count` -  It returns the number of users that used the bot
- `/graph/users/activity` -  Number of commands sent by every user, displayed with a table.

## Frontend:
Angular4 Application, just install npm dipendencies.
   

Visit: localhost:4200
