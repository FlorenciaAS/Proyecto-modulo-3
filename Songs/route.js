const controller = require('./controller.js');


  async function getSongs (req,res){
    try{
        var songs = await controller.findAllSongs();
        res.status(200).send(songs);
        }
    catch(e){
        res.status(500).send('hubo un error' + e);
    }
}

module.exports={
    getSongs
}





