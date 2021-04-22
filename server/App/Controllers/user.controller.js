const Users = require("../../Config/userfakedb");

const User = function (user) {
    this.senha = user.senha,
    this.email = user.email
    this.id = user.id
};


var debug = false;

//Metodo da Contoller para trazer todos os Users cadastrados
User.login = async (req, result) => {


    emailaux = req.body.email;
    senhaaux = req.body.senha;

    function emailis(obj) {
        return obj.email == emailaux;
    }

    var filtrado = Users.filter(emailis);
        console.log(filtrado[0].senha)
        console.log(senhaaux)
        console.log(filtrado[0].senha == senhaaux)
    if (filtrado[0].senha == senhaaux) {

        result.status(200).send({ message: "OK" })
    }

    else {

        result.status(500).send({ message: "Senha Incorreta" })
    }

}



module.exports = User;