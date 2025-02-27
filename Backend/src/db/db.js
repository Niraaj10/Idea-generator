import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`DB is connected to ${connectionInstance.connection.host}`);
        // console.log(connectionInstance)
    } catch (error) {
        console.log("DB connection error", error);
        process.exit();
    }
}

export default connectDB;