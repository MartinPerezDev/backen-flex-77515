import express from "express";
import ProductManager from "../ProductManager.js";
import uploader from "../utils/uploader.js";

const productsRouter = express.Router();
const productManager = new ProductManager("./src/products.json");

productsRouter.post("/", uploader.fields("file") , async(req, res)=> {
  try {
    const title = req.body.title;
    const price = req.body.price;
    const thumbnail = "/img/" + req.file.filename;
    
    await productManager.addProduct({ title, price, thumbnail });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ status: "error", message: "No se pudo agregar el producto" });
  }
});

export default productsRouter;