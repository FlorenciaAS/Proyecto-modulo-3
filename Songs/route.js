const controller = require('./controller.js');


  async function getSongs (req,res){
    try{
        var songs = await controller.findAllSongs();
        res.status(200).send(songs);
        }
    catch(e){
        res.status(500).send('hubo un error' + e);
    }
};

async function postSong (req,res){
    try{
        await controller.addSong(req.body);
        res.status(201).send('se aregó la cancion');
    }catch(e){
        res.send('hubo un error');
    }
};


module.exports={
    getSongs,
    postSong
}





