// No vuelve a cargar la libreria usa la que ya tiene en memoria
const { Router } = require('express');
// Crear un objeto router
const router = Router();

// Controlador de crear producto
const { crearProducto } = require('../controllers/producto')
// Controlador listar producto
const { listarProducto } = require('../controllers/producto')
// Controlador de actualizar producto
const { actualizarProducto } = require('../controllers/producto')
// Controlador de eliminar producto
const { eliminarProducto } = require('../controllers/producto')



// Rutas

// Crear producto
router.post('/crear', crearProducto);

// Listar productos
router.get('/', listarProducto);

// Actualiza producto
router.put('/actualizar/:id', actualizarProducto);

// Eliminar producto
router.delete('/eliminar/:id', eliminarProducto);

// exportar el router
module.exports = router;