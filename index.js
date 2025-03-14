// // require es como import
// const http = require('http');

// // Ip de la tarjeta de red
// const hostname = '127.0.0.1';
// // El puerto
// const port = 3000;

// // Aqui creamos un servidor http
// const server = http.createServer((req, res) => {

//     var url = req.url;
//     if (url == '/about') {
//         res.write(' Welcome to about us page');
//         res.end();
//     } else if (url == '/contact') {
//         res.write(' Welcome to contact us page');
//         res.end();
//     } else {
//         res.write('Hello World!');
//         res.end();
//     }
    
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
  res.send(req.body);
});

app.listen(3001);