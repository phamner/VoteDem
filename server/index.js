const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});



// app.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Dry_Vermouth`, function (req, res) {
//   res.send('getting data back from cocktail api')
// })

// app.get('https://api.mobilize.us/v1/events?organization_id=1393', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     console.log('console.log hello from mobilize america, we have the data')

//     res.send('hello from mobilize america, we have the data')

// });

app.get('/events', (req, res) => {
    res.send('events data, from express (test)');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });




// app.listen(process.env.PORT || 8080);