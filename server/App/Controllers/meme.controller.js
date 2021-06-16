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

Meme.postagem = async (req, result) => {
    title = req.body.title;
    desc = req.body.desc;
    img = req.body.imglink;
    id = String(Math.random() * (99999 - 3) + 3);

    Memes.push({id, title, desc, img});

    result.status(200).send({message: "Cadastrado com sucesso"});
}



module.exports = Meme;