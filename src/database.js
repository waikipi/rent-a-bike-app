import mongoose from "mongoose";

// connection to db

  try {
	mongoose.set("strictQuery", false)
	/*mongoose.connect(process.env.MONGODB_URI || 
		'mongodb+srv://kroskydekellog:y8NjQC4RPNWzlsMA@fidmugal.x8gl0h8.mongodb.net/rent-a-bike-app?retryWrites=true&w=majority');*/
		mongoose.connect('mongodb://localhost:27017/rent-a-bike-app')
	console.log("Db connected");
  } catch (error) {
    console.error(error); 
  }