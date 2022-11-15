// Controllers va a contener la funciones que se tienen definidiad en los Routers

const { response } = require('express');

// importar modelo producto
const Venta = require('../models/ventas');

// importar conexion con base de datos
const conexionDb = require('../database/config');


// Crear conexion con base de datos
conexionDb


const crearVenta = async (req, res = response) => {
    
    try{
    // crear objeto producto
    const venta = Venta(req.body)
    // guardar en base de datos
    console.log(req.body)
    await venta.save();
    
    res.status(201).json({
        venta,
    })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error creando la venta'
        })
    }
    
    
}

const listarVenta = async (req, res = response) => {
    const ventas = await Venta.find();
    /*
    .toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
    */
    console.log(ventas)
    res.json(
        ventas
    )
}

// Eliminar venta
const eliminarVenta = async (req, res = response) => {
    //const {idProducto} = req.body
    const ventaId = req.params.id;

    // Interactuar con base de datos
    try{
        // validar que el producto existe    
        const venta = await Venta.findById(ventaId);
        // validar si el producto exixste
        if (!venta){
            return res.status(404).json({
                ok: false,
                msg: 'La venta no existe '
            })
        }

        await Venta.findByIdAndRemove(ventaId);
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
    crearVenta,
    listarVenta,
    eliminarVenta
}