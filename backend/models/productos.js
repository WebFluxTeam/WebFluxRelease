
// Conexion base de datos
const { Schema , model } = require('mongoose');



// Crear esquema de producto
const productoSchema =  Schema  ({

    imagen : {
        type: String,
        require: true
    },
    nombre : {
        type: String,
        require: true
    },
    precio : { 
        type: Number,
        require: true
    },
    stock : {
        type : Number,
        require : true
    }
})

// cambiar _id por id
productoSchema.method('toJSON', function (){
    const {__v, _id, ... object} = this.toObject();
    object.idProducto = _id;
    return object;
})


module.exports = model('Producto', productoSchema)