// Conexion base de datos
const mongoose = require('mongoose');

const conexionDb = mongoose.connect('mongodb://localhost:27017/webFluxTeam', (err, res) =>{
    if(err){
        throw err;
    } else{
        console.log('Conectado');
    }
});

// exportar modulo
module.exports = {
    conexionDb
}