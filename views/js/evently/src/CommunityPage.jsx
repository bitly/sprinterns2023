import React from 'react'
import './CommunityPage.css'

function CommunityPage() {
    // const cors = require('cors')
    // const app = express();

    // const mysql = require('mysql');

    // const connection = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "admin123"
    // });

    // connection.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    // });

    // app.use(cors());

    // app.get('/posts', (req, res) => {
    // connection.query("SELECT * FROM 'event';", (err, results, fields) => {
    //     if(err) throw err;
    //     res.send(results);
    //     });
    // });

    // app.listen(3000, (error) => {
    //     if (err) throw err;
    //     console.log(`App listening on port ${port}!`)
    // });

    return(
        <div class='Outer'>
            <div class='Community'>
                <h1>Public events</h1>
                <div class="event1">
                    
                </div>  
            </div>
        </div>
    )
}

export default CommunityPage;