import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
app.use(express.json());

const productManager = new ProductManager("./src/products.json");

//rutas o endpoints
app.get("/", (req, res)=> {
  res.json({ message: "Hola mundo" });
});

app.get("/api/products", async(req, res)=> {
  try {
    const products = await productManager.getProducts();
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al obtener los productos" });
  }
});

app.delete("/api/products/:pid", async(req, res)=> {
  try {
    const pid = req.params.pid;
    const products = await productManager.deleteProductById(pid);
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al borrar el producto" });
  }
});

app.post("/api/products", async(req, res)=> {
  try {
    const newProduct = req.body;
    const products = await productManager.addProduct(newProduct);
    res.status(201).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al agregar el producto" });
  }
});

app.put("/api/products/:pid", async(req, res)=> {
  try {
    const pid = req.params.pid;
    const updatedData = req.body;

    const products = await productManager.updateProductById(pid, updatedData);
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al editar el producto" });
  }
});

app.listen(8080, ()=>{
  console.log("Servidor iniciado en el puerto 8080");
});