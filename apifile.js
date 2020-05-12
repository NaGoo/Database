const express=require('express');
const app=express();
const port=3305;

var mysql=require('mysql')
var connInfo = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Qwerty@123",
    database: "readyassisttraining1"
}
var connection =mysql.createConnection(connInfo);
app.get('/Candidates', (req, res) =>
{
    let sql= ' select*from Candidates ' ;

    if(req.query.id)
    {
        sql=sql+'where id = '+ req.query.id;
    }
    if(req.query.candidate_name)
    {
       sql='select * from candidates where candidate_name =?';
       connection.query(sql,[req.query.candidate_name],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    if(req.query.candidate_mail)
    {
       sql='select * from candidates where candidate_mail =?';
       connection.query(sql,[req.query.candidate_mail],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    if(req.query.candidate_gender)
    {
       sql='select * from candidates where candidate_gender =?';
       connection.query(sql,[req.query.candidate_gender],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    if(req.query.candidate_age)
    {
        sql=sql+'where candidate_age = '+ req.query.candidate_age;
    }
    connection.query(sql, function(err, data, fields){
        if(err)
        {
            res.status(500);
            let errMsg={
                error:err
            }
            res.send(errMsg);
        }
        let responseObject ={
            data:data
        }
        res.send(responseObject);

    })
});
app.get('/Employee', (req, res) =>
{
    let sql=' select*from Employee ';

    if(req.query.id)
    {
        sql=sql+'where id '+ req.query.id;
    }
    if(req.query.emp_name)
    {
       sql='select * from employees where emp_name =?';
       connection.query(sql,[req.query.emp_name],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    
    if(req.query.emp_city)
    {
       sql='select * from employees where emp_city =?';
       connection.query(sql,[req.query.emp_city],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    
    
    connection.query(sql, function(err, data, fields){
        if(err)
        {
            res.status(500);
            let errMsg={
                error:err
            }
            res.send(errMsg);
        }
        let responseObject ={
            data:data
        }
        res.send(responseObject);

    })
});
app.get('/Training', (req, res) =>
{
    let sql=' select*from Training ';

    if(req.query.id)
    {
        sql=sql+'where id = '+ req.query.id;
    }
    if(req.query.syllabus)
    {
       sql='select * from employees where syllabus =?';
       connection.query(sql,[req.query.syllabus],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    if(req.query.no_days)
    {
        sql=sql+'where no_days = '+ req.query.no_days;
    }
    connection.query(sql, function(err, data, fields){
        if(err)
        {
            res.status(500);
            let errMsg={
                error:err
            }
            res.send(errMsg);
        }
        let responseObject ={
            data:data
        }
        res.send(responseObject);

    })
});

app.listen(port, () =>{
    console.log("done")
});
