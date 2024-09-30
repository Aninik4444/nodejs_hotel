const mongoose =require('mongoose');
require('dotenv').config();
// Define the mongoDb connection URL
//const mongoURL ='mongodb://localhost:27017/hotels' // u can give any database name
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
// set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true
})
//  get the default connection
//  Mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

// Define event listener for database connection
db.on('connected', ()=>{
    console.log('Connected to Mongodb server');
});

db.on('error', (err)=>{
    console.log('Mongodb connection error', err);
});

db.on('disconnected', ()=>{
    console.log('Mongodb Disconnected');
});

// Export a database connection
module.exports=db;