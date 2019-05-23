const User = require('../models/user.model');
const Isemail = require('isemail')
// var motnon = 'req.body.password'
// var mot = passwordHash.generate(motnon)
// console.log(passwordHash.verify(motnon, mot)); // true

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
// for (let i = 0; i < 5; i++) {
//     var hash = bcrypt.hashSync("B4c0/\/", salt);    
//     console.log(hash);
// }
exports.findAll = (req, res) => {
    User.find()
    .then(use => {
        res.send(use);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error'
        });
    });
};


exports.createUser = (req, res) =>{
    // for (let i = 0; i < 5; i++) {
    //     console.log(i + ' = ' + passwordHash.generate(req.body.password));
    // }

    
    if (Isemail.validate(req.body.email)) {
        const profil = new User({
            nom : req.body.nom,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, salt)
        })
        //let business = new Business(req.body);
        
        profil.save()
          .then(business => {
            res.status(200).json({'business': 'business in added successfully'});
          })
          .catch(err => {
          res.status(400).send("unable to save to database");
          });
        
    } else {
        ///console.log('mail non ok');
        res.send('Email incorrect')
    }
    
}

exports.indentifier = (req, res) =>{
    
    // console.log(req.body.nom);
    const profil = new User({
        nom : req.body.login,
        password : bcrypt.hashSync(req.body.password, salt)
    })
    User.find()
    .then(use => {
        for (let i = 0; i < use.length; i++) {
            if(((profil.nom == use[i].nom) || (profil.nom == use[i].email)) && (profil.password == use[i].password) ){
                res.send('Bienvenue')
            }else{
                res.send('Votre login ou mot de passe sont incorrect')
            }
        }
        
    })
    
    
}

