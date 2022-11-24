// It's no neccesary load library again
const { Router } = require('express');
// Create Router
const router = Router();

// Create user controller
const { createUser } = require('../controllers/user')
const { listUser   } = require('../controllers/user')
const { updateUser } = require('../controllers/user')
const { deleteUser } = require('../controllers/user');

// Routes
// User Create
router.post('/create', createUser);
// User List
router.get('/', listUser);
// User Update
router.put('/update/:id', updateUser);
// User delete 
router.delete('/delete/:id', deleteUser);

// Router Export
module.exports = router;