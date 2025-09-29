const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

mongoose.connect('mongodb://Giovani:jbKqgfubAtHYBaNh@ac-wlplasf-shard-00-00.vqxbla3.mongodb.net:27017,ac-wlplasf-shard-00-01.vqxbla3.mongodb.net:27017,ac-wlplasf-shard-00-02.vqxbla3.mongodb.net:27017/?ssl=true&replicaSet=atlas-vbolwu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log('Conectado com sucesso')
}).catch(function(err){
    console.log(err.message);
})

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/', (req, res) => {
    console.log(req.query);

    if(req.query.busca == null){
        res.render('home', {});
    } else {
        res.render('busca', {});
    }

})

app.get('/:slug', (req, res) => {
    //res.send(req.params.slug)
    res.render('single', {});
})

app.listen(5000, () => {
    console.log('servidor rodando!');
})
