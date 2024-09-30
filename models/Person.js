const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// Defining the person schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        required: true,
        type: String
    },
    password:{
        required:true,
        type:String
    }
});
   
personSchema.pre('save', async function(next){
    const person =this;
    if(!person.isModified('password')) return next();

    try{
        //  hash password generation
        const salt = await bcryptjs.genSalt(10);

        // hash password
        const hashedPassword = await bcryptjs.hash(person.password,salt);

        //override the plain password with the hashed one
        person.password = hashedPassword;
        next();

    }catch(err){
         return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // use bcryptjs to compare the password with the hashed password
        console.log(candidatePassword, this.password)
         const isMatch = await bcryptjs.compare(candidatePassword, this.password);
         console.log({isMatch})
         return isMatch;
         
    }catch(err){
        throw err;
    }
}

// Create a person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;