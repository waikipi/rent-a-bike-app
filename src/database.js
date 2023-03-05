import mongoose from "mongoose";

// connection to db

  try {
	mongoose.set("strictQuery", false)
	mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rent-a-bike-app')
	//mongoose.connect('mongodb://localhost:27017/rent-a-bike-app')
	console.log("Db connected");
  } catch (error) {
    console.error(error); 
  }