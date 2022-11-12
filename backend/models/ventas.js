// Conexion base de datos
const { Schema , model } = require('mongoose');

const ventasSchema = Schema ({
    fecha: {
        type: String,
        require: true
    },
    idVenta: {
        type: Number,
        require: true,
        unique: true
    },
    precio: {
        type: Number,
        require: true
    }
})

// cambiar _id por id
productoSchema.method('toJSON', function (){
    const {__v, _id, ... object} = this.toObject();
    object.idVenta = _id;
    return object;
})

module.exports = model('Venta', ventaSchema)