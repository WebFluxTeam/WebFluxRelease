// Controllers referenciated in Routers
const { response } = require('express');
// impor users models
const User = require('../models/users');
// import DB connect
const conexionDb = require('../database/config');
// Create DB connect
conexionDb


const createUser= async (req, res = response) => {
    
    try{
    const user = User(req.body)
    console.log(user);
    await user.save();

    res.status(201).json({
        user
    })
    } catch(error){
        res.status(500).json({
            ok: false,
            msg: 'User Created Failed'
        })
    }
    
    
}

const listUser = async (req, res = response) => {
    const users = await User.find();

    console.log(users)
    res.status(200).json({
        users,
        token: 'test123'

    })
}

const updateUser = async (req, res = response) => {
    const userId = req.params.id;
    
    try{
        
        const user = await User.findById(userId);
        if (!user){
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            })
        }

        const newUser = {
            ...req.body
        }
        console.log(newUser);
        const updatedUser = await User.findByIdAndUpdate(userId, newUser, {new : true});
        res.json({
            ok: true,
            user: updatedUser,
        })

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Can not updated'
        });
    }

}

const deleteUser = async (req, res = response) => {
    const userId = req.params.id;
    
    try{  
        const user = await User.findById(userId);
        
        if (!user){
            return res.status(404).json({
                ok: false,
                msg: 'User not found '
            })
        }

        await User.findByIdAndRemove(userId);
        res.json({
            ok: true
        })

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Can not delete user'
        });
    }
}

module.exports = {
    createUser,
    listUser,
    updateUser,
    deleteUser
}