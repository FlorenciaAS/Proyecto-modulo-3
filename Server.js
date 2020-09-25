const express = require('express');
const songsRoute = require('./Songs/route.js');
const userRoute = require('./Users/Route.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Florencia-Alcaide:212487aa@prueba-db.kk1ln.mongodb.net/Proyecto-mod3?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true});

 var server = express();
 server.use(express.json());
 server.listen(4300);
 console.log('anda el puerto 4300');

//songs
server.get('/songs/', songsRoute.getSongs)

//users

