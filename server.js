const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const router =  require('./routes/note.routes');


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


const mongoose  = require('mongoose');
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connect database');
    
}).catch(err => {
    console.log('not connect database');
    process.exit();
})

//app.use(require('connect').bodyParser());
// app.use(express.bodyParser())

app.get('/', (req, res) => {
    res.json({'message': "Welcome to EasyNotes application"})
});

//require('./routes/note.routes')(app)
app.listen(4000, () => {
    console.log("Server listening 4000");
    
})
app.use('/', router)