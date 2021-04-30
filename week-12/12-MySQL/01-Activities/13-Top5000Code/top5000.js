const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'Bp@olo21992',
  database: 'top_songsDB',
});

const selectAndPrint = ()=>{
    connection.query('SELECT * FROM top5000',(err, res)=>{
        if(err) throw err;
        console.log(res);
        connection.end();
    })
}

const selectArtist = (artistName)=>{
    connection.query('SELECT * FROM top5000 WHERE ?', {
      artist: artistName
    }, (err, res)=>{
        if(err) throw err;
        console.log(res);
    })
}

const selectArtistMoreThanOnce = ()=>{
    connection.query('SELECT Artist FROM top5000 group by artist having count(artist)>1', (err, res)=>{
        if(err) throw err;
        console.log(res);
    })
}

const selectRange = (start, end) => {
    connection.query(`SELECT * FROM top5000 WHERE position>=${start} and position <=${end}`, (err, res)=>{
        if(err) throw err;
        console.log(res);
        connection.end();
    })
}

const selectSong = (song)=>{
    connection.query('SELECT * FROM top5000 WHERE ?', {
        song: song
    },
    (err, res)=>{
        if(err) throw err;
        console.log(res);
        connection.end();
    })
}

connection.connect((err)=>{
    if(err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    selectRange(1,10);
});

module.exports = {selectAndPrint, selectSong, selectRange, selectArtistMoreThanOnce}