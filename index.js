'use strict';
var express = require('express');
var app = express();

app.set('view engine', 'hbs');

var suma = 5 + 4;

app.get('/', function(req, res)
{
    // No llamar el archivo con la extensión, simplemente el nombre de archivo
    res.render('template', {
        titulo: 'Saludo', 
        persona: 'Cristian Leiton', 
        valor: suma});
});

app.listen(3000);