const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'emapta_exam'
});

connection.connect();

 app.get('/api/values',(req, res)=>{

    connection.query('SELECT * FROM value_list',(err, rows) =>{

        if(err) throw err
        res.json(rows);
    });
     //res.send("<h1>Hello Worlasdasdadsad</h1>")
 })

 app.get('/api/principles',(req, res)=>{

    connection.query('SELECT * FROM principle_list',(err, rows) =>{

        if(err) throw err
        res.json(rows);
    });
     //res.send("<h1>Hello Worlasdasdadsad</h1>")
 })

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=> {
    console.log(`Server is started in port ${PORT}`);
})