import mongoose from "mongoose";
import Product from "../models/product.model.js";

const connectMongoDB = async() => {
  try {
    await mongoose.connect(process.env.URI_MONGODB);
    //sincronizamos los indices del modelo Product
    await Product.syncIndexes();
    console.log("Contectado con MongoDB!");
  } catch (error) {
    console.log("Error al conectar con MongoDB!");
  }
};

export default connectMongoDB;