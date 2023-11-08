const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico, 'use' es para uso de middleware
app.use( express.static('public') );

// app.get('/', (req, res) => {
//   res.send('home page')
// })

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola mundo en su ruta')
// })

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
})

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })