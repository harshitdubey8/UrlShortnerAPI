import mongoose from "mongoose";

const connectDB = async () => {
  const DBURI = `mongodb+srv://root:${process.env.PASS}@cluster0.udftn.mongodb.net/urlsDatabase?retryWrites=true&w=majority`;

  try {
    const conn = await mongoose.connect(DBURI, { autoIndex: false });
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`error connecting mongoDb ${error}`);
  }
};

export default connectDB;
