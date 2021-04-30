const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bp@olo21992',
    database: 'playlistDB',
});

const afterConnection = ()=> {
    connection.query('SELECT * FROM songs', (err, res)=>{
        if(err) throw err;
        console.log(res);
        connection.end();
    })
}

connection.connect((err)=>{
    if(err) throw err;
    console.log(`connected as id ${connection.threadId}`)
    afterConnection();
})