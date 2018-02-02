var express = require('express')
var app = express()
var mysql = require('mysql');

var server = app.listen(3000)

var databaseInfo = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: ""
}

function createMysqlConnection() {
    return mysql.createConnection({
        host: databaseInfo.host,
        user: databaseInfo.user,
        password: databaseInfo.password,
        database: databaseInfo.database
    })
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/graph/commands', function(req, res){
    const sql = "SELECT action AS 'name', COUNT(action) AS 'value' FROM stats GROUP BY action ORDER BY COUNT(action) DESC";
    var connection = createMysqlConnection()
    connection.connect(function(err) {
        if (err) {
            res.send('[{"error": true}]');
            res.end()
        } else {
            connection.query(sql, function(err, rows, fields) {
                if (err)
                    console.log(err)
                connection.end()
                res.send(rows);
                res.end()
            })
        }
    });
})

app.get('/graph/most/commands', function(req, res){
    const sql = "SELECT action AS 'name', COUNT(action) AS 'value' FROM stats GROUP BY action ORDER BY COUNT(action) DESC LIMIT 5";
    var connection = createMysqlConnection()
    connection.connect(function(err) {
        if (err) {
            res.send('[{"error": true}]');
            res.end()
        } else {
            connection.query(sql, function(err, rows, fields) {
                if (err)
                    console.log(err)
                connection.end()
                res.send(rows);
                res.end()
            })
        }
    });
})

app.get('/graph/count/users', function(req, res){
    const sql = "SELECT COUNT(DISTINCT(user_id)) AS 'users' FROM stats";
    var connection = createMysqlConnection()
    connection.connect(function(err) {
        if (err) {
            res.send('[{"error": true}]');
            res.end()
        } else {
            connection.query(sql, function(err, rows, fields) {
                if (err)
                    console.log(err)
                connection.end()
                res.send(rows);
                res.end()
            })
        }
    });
})

app.get('/graph/count/commands', function(req, res){
    const sql = "SELECT COUNT(*) AS 'commands' FROM stats";
    var connection = createMysqlConnection()
    connection.connect(function(err) {
        if (err) {
            res.send('[{"error": true}]');
            res.end()
        } else {
            connection.query(sql, function(err, rows, fields) {
                if (err)
                    console.log(err)
                connection.end()
                res.send(rows);
                res.end()
            })
        }
    });
})


app.get('/graph/users/activity', function(req, res){
    const sql = "SELECT user_id AS 'users', COUNT(action) AS 'count' FROM stats GROUP BY user_id";
    var connection = createMysqlConnection()
    connection.connect(function(err) {
        if (err) {
            res.send("Non riesco a connettermi al database!")
            res.end()
        } else {
            connection.query(sql, function(err, rows, fields) {
                if (err)
                    console.log(err)
                connection.end()
                res.send(rows);
                res.end()
            })
        }
    });
})