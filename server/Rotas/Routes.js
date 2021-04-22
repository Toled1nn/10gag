module.exports = app => {

    const Meme = require("../App/Controllers/meme.controller.js");
    const User = require("../App/Controllers/user.controller.js");


    //Rotas padrões de Meme
    app.get('/memes', Meme.index)
    app.post('/login', User.login)

    
   
}
