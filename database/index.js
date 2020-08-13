const fetch = require("node-fetch");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/voteDemEvents', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

    const eventDataSchema = new mongoose.Schema({
        featured_image_url: String,
        modified_date: Number,
        venue: String,
        address_lines: String,  //this might be an array, grab the first item in array
        locality: String,
        region: String,
        country: String,
        postal_code: String,
        latitude: Number, 
        longitude: Number,
        is_virtual: Boolean,
        summary: String,
        end_date: Number,
        start_date: Number,
        description: String,
        title: String,
        browser_url: String,
        timezone: String,
    });
    const eventData = mongoose.model('eventDataSchema', eventDataSchema);





    function getEventData(){  

        let url = 'https://api.mobilize.us/v1/events?organization_id=1393&per_page=200';
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data.data.length)

            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].location.location !== undefined && data.data[i].location.location !== undefined) {
                    let currentEvent = new eventData({
                        featured_image_url: data.data[i]['featured_image_url'],
                        modified_date: data.data[i]['modified_date'],
                        venue: data.data[i]['featured_image_url'],
                        address_lines: data.data[i].location.venue,  //this might be an array, grab the first item in array
                        locality: data.data[i].location.locality,
                        region: data.data[i].location.region,
                        country: data.data[i].location.country,
                        postal_code: data.data[i].location.postal_code,
                        latitude: data.data[i].location.location.latitude,
                        longitude: data.data[i].location.location.longitude,
                        is_virtual: data.data[i].is_virtual,
                        summary: data.data[i].summary,
                        end_date: data.data[i].timeslots[0].end_date,
                        start_date: data.data[i].timeslots[0].start_date,
                        description: data.data[i].description,
                        title: data.data[i].title,
                        browser_url: data.data[i].browser_url,
                        timezone: data.data[i].timezone
                    });
                
                    currentEvent.save(function (err, currentEvent) {
                        if (err) {
                            return console.error(err, currentEvent);
                        } else {
                            console.log(i)
                        }
                    });
                }
            }
            
        })
        .catch(function(error) {
            console.log(error);
        });   
    };

    getEventData();
});
