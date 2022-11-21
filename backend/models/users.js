// import DB Schema
const { Schema , model } = require('mongoose');

// create Schema
const userSchema =  Schema  ({

    nickName : {
        type: String
    },
    name : {
        type: String
    },
    lastName : { 
        type: String
    },
    emailAddress : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    rol : {
        type : String,
        require : true
    }
})

// chage by Id
userSchema.method('toJSON', function (){
    const {__v, _id, ... object} = this.toObject();
    object.userId = _id;
    return object;
})


module.exports = model('users', userSchema)