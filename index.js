const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');
// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
// const Person = require('./models/Person');
const PORT = process.env.PORT;
app.use(bodyParser.json());

// Middleware Function
 const logRequest = (req, res,next)=>{
  console.log(`${new Date().toLocaleString()}Request Made to :${req.originalUrl}`);
  next(); // after complitation of middleware function move to the next phase
 }

 app.use(logRequest);

//  passport.use(new localStrategy(async (USERNAME, password, done)=>{
//      //  authentication logic here

//      try{
//           console.log('Received credentials:', USERNAME, password);
//           const user = await Person.findOne({username:USERNAME});
//           if(!user)
//             return done(null, false, {message: 'Incorrect username'});
//           const isPassword = user.password === password ? true : false;
//           if(isPassword){
//             return done(null, user);
//           }else{
//             return done(null, false, {message: 'Incorrect password'});
//           }
//     }catch(err){
//           return done(err);
//     }
//  }));

// const Person = require('./models/Person');
// const MenuItem = require('./models/MenuItem');

app.use(passport.initialize());
const localAuthMiddleware =  passport.authenticate('local',{session: false});
app.get('/',function (req, res, next) {
  console.log(req.query)
  res.send('Welcome to my hotel')
})
// Post to add a person
// app.post('/person',async (req, res)=>{
//     try{
//       const data = req.body
//       const newPerson = new Person(data);
//       const response = await newPerson.save();
//       console.log('data saved');
//       res.status(200).json(response);
//     }
//     catch(err){
//      console.log(err);
//      res.status(500).json({error: err.message});
//     }
//   })

  // app.post('/menuItem',async (req, res)=>{
  //   try{
  //     const data = req.body
  //     const newMenuItem = new MenuItem(data);
  //     const response = await newMenuItem.save();
  //     console.log('data saved');
  //     res.status(200).json(response);
  //   }
  //   catch(err){
  //    console.log(err);
  //    res.status(500).json({error: err.message});
  //   }
  // })

  //  app.get('/person/:workType', async(req,res)=>{
  //   try{
  //     const workType = req.params.workType;
  //     if(workType == 'chef' || workType == 'manager'){
  //       const response = await Person.find({work: workType});
  //       console.log('response fetched');
  //       res.status(200).json(response);
  //     }
  //     else{
  //       res.status(404).json({error: err.message})
  //     }
  //   }catch(err){
  //     console.log(err);
  //    res.status(500).json({error: err.message});
  //   }
  //  })
 
  // Import the router files
  const personRoutes = require('./routes/person/personRoutes');
  const menuItemRoutes = require('./routes/menuItem/menuItemRoutes');
  // use the routers
  app.use('/person',personRoutes);
  app.use('/menu',localAuthMiddleware,menuItemRoutes);

 
 
  
  app.listen(PORT, ()=>{
    console.log('Listening on port 3000');
  }) 
   