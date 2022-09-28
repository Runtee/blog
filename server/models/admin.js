const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const bcrypt = require('bcrypt')
const userSchema=new Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        
            type:String,
            required:true
        
    }
});

userSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
    })

})

const User =  mongoose.model('User',userSchema);

module.exports= User