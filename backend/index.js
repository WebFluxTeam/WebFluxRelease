const express = require('express');
const cors = require('cors');

// Crear servidor de express
const app = express();

// habilitar cors
app.use(cors())

// Escuchar peticciones el servidor de express
app.listen(4000, () =>{
    console.log(`Servidor corriendo en el puerto ${ 4000 }`);
})

// Parsea todas la peticciones en formato json
app.use( express.json());

// Implementacion de middleware para producto
app.use('/producto', require('./routes/producto'));

// Implementacion de middleware para venta
app.use('/venta', require('./routes/venta'));

// User Middleware Implementation
app.use('/user', require('./routes/user'));



// Middleware directorio publico de frontend
//app.use( express.static('./frontend')

