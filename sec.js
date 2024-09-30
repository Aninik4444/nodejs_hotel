// function myfunction(a, b) {
//     return a+b;
// }
// function myfunction2(a, b) {
//     return a-b;
// }

// function myfunction3(a, b) {
//     return a*b;
// }
// export default myfunction3;
// export {
//     myfunction,
//     myfunction2
// };
// export default function simple(){
//     console.log("Simple is Simple")
// }
// var sub=(a-b) => {
//     return (a-b);
// }
// console.log(sub);
// function callback(){
//     console.log('adding two numbers');
// }
// const add= function(a,b,callback){
//     var result = a+b;
//     console.log('result:'+result);
//     callback();
// }
// add(3,8,()=>console.log('add completed'));

 

// app.get('/veg', (req, res) => {
//     res.send('veg is ready')
// })

// post route to add a person
//   const data = req.body
//   // create a new person document using the mongoose model
//   const newPerson =new Person(data);
//   // save the new person to database
//   newPerson.save((error, savedPerson)=>{
//     if(error){
//       console.log('Error saving person', error);
//       res.status(500).json({error: 'Internal server error'})
//     }else{
//       console.log('data saved successfully');
//       res.status(200).json(savedPerson);
//     }
//   })
// })


// Get method to get the person
// app.post('./person',async (req, res)=>{
//   try{
//     const data =await Person.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })


