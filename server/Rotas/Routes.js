module.exports = app => {

    const Meme = require("../App/Controllers/meme.controller.js");
    const User = require("../App/Controllers/user.controller.js");


    //Rotas de Meme
    app.get('/memes', Meme.index);
    app.post('/memes', Meme.postagem);

    //Rotas de Usuario
    app.get('/usuarios', User.index);
    app.post('/login', User.login);
    app.post('/SignUp', User.Signup);

    
   
}
