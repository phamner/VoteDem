const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors');


const { getAllEvents } = require('../database/index.js')

// app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());




const port = 8080

app.get('/events', (req, res) => {
    getAllEvents((data) => {
        // console.log(data)
        // res.send(data);
        res.send('string of fake data')
    });
    
    // res.send('Hello World, from express');
});


app.get('/', (req, res) => {
    res.send('hello from express');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });




// app.listen(process.env.PORT || 8080);