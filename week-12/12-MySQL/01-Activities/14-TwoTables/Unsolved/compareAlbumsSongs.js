const mysql = require('mysql');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bp@olo21992',
    database: 'top_songsDB',
});


const selectJoin = (artist)=>{
    connection.query(`SELECT topalbums.artist, topalbums.position, topalbums.year, top5000.song, topalbums.album
FROM topalbums
INNER JOIN top5000 ON topalbums.artist = '${artist}' and top5000.artist = '${artist}' and topalbums.year = top5000.year`, (err, res)=>{
    if(err) throw err;
    console.log(res)
    connection.end();
})
}
const connectToDB = (artist)=>{
    connection.connect((err)=>{
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`)
        selectJoin(artist);
    })


}

const promptUser = ()=>{
    inquirer.prompt({
        name: 'artist',
        type: 'input',
        message: 'What Artist Would You Like Search?'
    }).then((data)=>{
        connectToDB(data.artist)
    })
}

promptUser()