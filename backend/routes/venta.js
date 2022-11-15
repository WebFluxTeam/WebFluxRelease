// No vuelve a cargar la libreria usa la que ya tiene en memoria
const { Router } = require('express');
// Crear un objeto router
const router = Router();

// Controlador de crear producto
const { crearVenta } = require('../controllers/venta')
// Controlador listar producto
const { listarVenta } = require('../controllers/venta')

const { eliminarVenta } = require('../controllers/venta')

// Rutas

// Crear venta
router.post('/crear', crearVenta);

// Listar ventas
router.get('/', listarVenta);

// Eliminar venta
router.delete('/eliminar/:id', eliminarVenta);

// exportar el router
module.exports = router;