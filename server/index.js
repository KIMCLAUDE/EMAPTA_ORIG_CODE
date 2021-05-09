const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const PORT = process.env.PORT || 5000;


app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'emapta_exam'
});

connection.connect();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//  app.get('/',(req, res)=>{

    
//      res.send("<h1>Hello Worlasdasdadsad</h1>")
//  })

//VIEW VALUES
 app.get('/api/values',(req, res)=>{

    connection.query('SELECT * FROM value_list',(err, rows) =>{

        if(err) throw err
        res.json(rows);
    });
     //res.send("<h1>Hello Worlasdasdadsad</h1>")
 })

//VIEW SINGLE VALUE
 app.get('/api/values/:id',(req, res)=>{
    var id = req.params.id;
    console.log(id);
    connection.query(`SELECT * FROM value_list WHERE id = '${id}'`,(err, rows) =>{

        if(err) throw err
        res.json(rows);
      
       
    });
     //res.send("<h1>Hello Worlasdasdadsad</h1>")
 })

 //INSERT VALUES
 app.post('/api/values',(req, res)=>{
     var title = req.body.title;
     var is_modify = req.body.is_modify;

     connection.query(`INSERT INTO value_list (title, is_modify)VALUES('${title}', '${is_modify}')`,(err) =>{

        if(err) throw err
        res.json({msg : `1 row is inserted`});
    });
 })

 //UPDATE VALUES
 app.put('/api/values/:id',(req, res)=>{
    var id = req.params.id;
    //var is_modify = req.body.is_modify;

    connection.query(`UPDATE value_list SET is_modify = NOT is_modify where id = '${id}'`,(err) =>{

       if(err) throw err
       res.json({msg : `1 row is updated`});
   });
})

//DELETE VALUES
app.delete('/api/values/:id',(req, res)=>{
    var id = req.params.id;

    connection.query(`DELETE from value_list where id = '${id}'`,(err) =>{

       if(err) throw err
       res.json({msg : `1 data has been deleted successfully`});
   });
})

 //VIEW PRINCIPLES
 app.get('/api/principles',(req, res)=>{

    connection.query('SELECT * FROM principle_list',(err, rows) =>{

        if(err) throw err
        res.json(rows);
    });
     //res.send("<h1>Hello Worlasdasdadsad</h1>")
 })

//VIEW SINGLE PRINCIPLE
 app.get('/api/principles/:id',(req, res)=>{
    var id = req.params.id;
    console.log(id);
    connection.query(`SELECT * FROM principle_list WHERE id = '${id}'`,(err, rows) =>{

        if(err) throw err
        res.json(rows);
      
       
    });
     //res.send("<h1>Hello Worlasdasdadsad</h1>")
 })

 //INSERT PRINCIPLES
 app.post('/api/principles',(req, res)=>{
     var title = req.body.title;
     var is_modify = req.body.is_modify;

     connection.query(`INSERT INTO principle_list (title, is_modify)VALUES('${title}', '${is_modify}')`,(err) =>{

        if(err) throw err
        res.json({msg : `1 row is inserted`});
    });
 })

 //UPDATE PRINCIPLES
 app.put('/api/principles/:id',(req, res)=>{
    var id = req.params.id;
    //var is_modify = req.body.is_modify;

    connection.query(`UPDATE principle_list SET is_modify = NOT is_modify where id = '${id}'`,(err) =>{

       if(err) throw err
       res.json({msg : `1 row is updated`});
   });
})

//DELETE PRINCIPLES
app.delete('/api/principles/:id',(req, res)=>{
    var id = req.params.id;

    connection.query(`DELETE from principle_list where id = '${id}'`,(err) =>{

       if(err) throw err
       res.json({msg : `1 data has been deleted successfully`});
   });
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=> {
    console.log(`Server is started in port ${PORT}`);
})