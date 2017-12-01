require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    axios = require('axios');


var app = express();
app.use(bodyParser.json());
app.use(cors());

// massive(process.env.CONNECTION_STRING).then(dbInstance =>app.set('db', dbinstance));

//Endpoints









//Listen port
const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));