const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');


passport.use(new localStrategy(async (USERNAME, password, done)=>{
    //  authentication logic here

    try{
        //  console.log('Received credentials:', USERNAME, password);
         const user = await Person.findOne({username:USERNAME});
         console.log({user},{password})
         if(!user)
           return done(null, false, {message: 'Incorrect username'});
         const isPassword = await user.comparePassword(password);
         if(isPassword)
           return done(null, user);
         else{
           return done(null, false, {message: 'Incorrect password'});
         }
   }catch(err){
         return done(err);
   }
}));
module.exports = passport;  //export configured passport