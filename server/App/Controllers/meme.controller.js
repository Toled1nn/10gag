const Memes = require("../../Config/memefakedb");

const Meme = function(meme){
    this.title = meme.title,
    this.img = meme.img,
    this.desc = meme.desc
    this.id = meme.id
};


var debug = false;

//Metodo da Contoller para trazer todos os memes cadastrados
Meme.index = async (req, result) => {
    result.status(200).send(Memes)
}



module.exports = Meme;