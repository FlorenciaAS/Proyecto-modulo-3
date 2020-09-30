const express = require('express');
const songsRoute = require('./Songs/route.js');
const userRoute = require('./Users/Route.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Florencia-Alcaide:212487aa@prueba-db.kk1ln.mongodb.net/Proyecto-mod3?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true});

 var server = express();
 server.use(express.json());
 server.listen(3200);
 console.log('Funciona el puerto 3200');

//SONGS
server.get('/songs', songsRoute.getSongs);
server.get('/songs/:name', songsRoute.getSongByName);
server.post('/songs', songsRoute.postSong);
server.delete('/songs/:name',songsRoute.deleteSong);
server.put('/songs/:name', songsRoute.putSong);

//USERS
server.get('/users', userRoute.getUsers);
server.get('/users/:name', userRoute.getUserByName);
server.post('/users', userRoute.postUser);
server.delete('/users/:name',userRoute.deleteUser);
server.put('/users/:name', userRoute.putUser);

//FAVORITE SONGS
server.post('/users/songs/:userName/',userRoute.addSongFavorite);
server.delete('/users/:songName/:userName', userRoute.deleteSongFavorite);



//pasar id de esta manera: ["5f6ce0cad688103138c75a0b"]