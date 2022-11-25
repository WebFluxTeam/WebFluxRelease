// Conexion base de datos
const { Schema , model } = require('mongoose');

const ventaSchema = Schema ({
    fecha: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    producto:{
        type: [{
            imagen : String,
            nombre : String,
            precio: Number,
            stock : Number
            }],
        require: true
    }
})

// cambiar _id por id
ventaSchema.method('toJSON', function (){
    const {__v, _id, ... object} = this.toObject();
    object.idVenta = _id;
    return object;
})

module.exports = model('Venta', ventaSchema)