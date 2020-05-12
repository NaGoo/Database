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
    let sql='select*from Candidates';

    if(req.query.id)
    {
        sql=sql+'where id '+ req.query.id;
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
    let sql='select*from Employee';

    if(req.query.id)
    {
        sql=sql+'where id '+ req.query.id;
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
    let sql='select*from Training';

    if(req.query.id)
    {
        sql=sql+'where id '+ req.query.id;
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
