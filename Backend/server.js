const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userroutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

console.log("Connecting to:", process.env.MONGO_URI); // Check here!

const connectDb=async()=>{
 const mongouri=process.env.MONGO_URI;
 try{
  await mongoose.connect(mongouri);
  console.log("mongodb connected");
 }catch(err){
  console.log(err);
 }
}
connectDb();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
