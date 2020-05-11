let mysql=require('mysql')
let connInfo={
    host: "localhost",
    user: "root",
    password:"Qwerty@123",
    database:"readyassisttraining1"
    
}
let con=mysql.createConnection(connInfo);
let abc="select*from Candidates;"
con.query(abc,function(err,data,fields){
    if (err) throw err;
    
    console.dir(JSON.stringify(fields));
    console.dir(JSON.stringify(data));
    console.log('=======================')
    });

    let uvw="select*from Training;"
con.query(uvw,function(err,data,fields){
    if (err) throw err;
    
    console.dir(JSON.stringify(fields));
    console.dir(JSON.stringify(data));
    console.log('=======================')
    });
    let xyz="select*from Employee;"
    con.query(xyz,function(err,data,fields){
        if (err) throw err;
        
        console.dir(JSON.stringify(fields));
        console.dir(JSON.stringify(data));
        console.log('=======================')
        });
    
    


