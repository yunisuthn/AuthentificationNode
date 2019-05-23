const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser');
var notes = require('../controllers/note.controller')


// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json());
router
    .post('/user', notes.indentifier)
    .post('/create', notes.createUser)
    .get('/user', notes.findAll)
    // .get('/prof', notes.findAllProf);

module.exports = router;


// app.delete('/notes/:noteId', notes.delete)


// module.exports = (app) => {
//     const notes = require ('../controllers/note.controller.js');

//     app.get('/eleve/:_id', notes.findOne);
//     app.post('/eleve', notes.create);
//     app.post('/prof', notes.createProf);

//     app.get('/eleve', notes.findAll);

//     app.get('/prof', notes.findAllProf);

//     // app.delete('/notes/:noteId', notes.delete)
// }

