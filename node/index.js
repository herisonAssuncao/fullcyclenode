const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`INSERT INTO people(name) values('Hérison Assunção')`)
var peopleList = ''
connection.query("SELECT * FROM people", function (err, result, fields) {
    result.forEach(res => {
        peopleList += `<h4>${res.id} - ${res.name}</h4>`
    });
});

connection.end()

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!<h1>${peopleList}`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})