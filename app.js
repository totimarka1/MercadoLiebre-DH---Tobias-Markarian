const express = require('express');
const app = express();
const path = require('path')
const puerto=3030
const dotenv = require('dotenv').config();

// Configura el tipo MIME para archivos estáticos
app.use(express.static('public', { 'extensions': ['css'], 'index': false, 'setHeaders': (res, path) => {
  res.setHeader('Content-Type', 'text/css');
}}));


app.use(express.static(path.resolve(__dirname, './public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
  });
  
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
  });
  
  
  
app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor Corriendo en el puerto' + process.env.PORT + "http://localhost:3000")
});