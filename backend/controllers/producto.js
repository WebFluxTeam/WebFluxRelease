// Controllers va a contener la funciones que se tienen definidiad en los Routers

const { response } = require('express');

// importar modelo producto
const Producto = require('../models/productos');

// importar conexion con base de datos
const conexionDb = require('../database/config');


// Crear conexion con base de datos
conexionDb


const crearProducto = async (req, res = response) => {
    
    try{
    // crear objeto producto
    const producto = Producto(req.body)
    // guardar en base de datos
    await producto.save();

    res.status(201).json({
        producto,
    })
    } catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error creando el producto'
        })
    }
    
    
}

const listarProducto = async (req, res = response) => {
    const productos = await Producto.find();
    /*
    .toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
    */
    console.log(productos)
    res.json(
        productos
    )
}

const actualizarProducto = async (req, res = response) => {
    //const {idProducto} = req.body
    const productoId = req.params.id;

    // Interactuar con base de datos
    try{
        // validar que el producto existe    
        const producto = await Producto.findById(productoId);
        // validar si el producto exixste
        if (!producto){
            return res.status(404).json({
                ok: false,
                msg: 'El producto no existe'
            })
        }

        // Actualizar desestructurar producto
        const nuevoProducto = {
            ...req.body
        }
        console.log(nuevoProducto);
        const productoActualizado = await Producto.findByIdAndUpdate(productoId, nuevoProducto, {new : true});
        res.json({
            ok: true,
            producto: productoActualizado
        })

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se puede actualizar'
        });
    }

}

const eliminarProducto = async (req, res = response) => {
    //const {idProducto} = req.body
    const productoId = req.params.id;

    // Interactuar con base de datos
    try{
        // validar que el producto existe    
        const producto = await Producto.findById(productoId);
        // validar si el producto exixste
        if (!producto){
            return res.status(404).json({
                ok: false,
                msg: 'El producto no existe '
            })
        }

        await Producto.findByIdAndRemove(productoId);
        res.json({
            ok: true
        })

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se puede eliminar'
        });
    }
}

module.exports = {
    crearProducto,
    listarProducto,
    actualizarProducto,
    eliminarProducto
}