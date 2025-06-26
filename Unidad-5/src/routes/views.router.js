import express from "express";
import ProductManager from "../ProductManager.js";

const viewsRouter = express.Router();
const productManager = new ProductManager("./src/products.json");

const user = { username: "FedericoDev01", isAdmin: true };

const middlewareIsAdmin = (req, res, next) => {
  if(user.isAdmin){
    next();
  }else{
    res.redirect("/error");
  }
}

viewsRouter.get("/", async(req, res)=> {
  try {
    const products = await productManager.getProducts();
    res.render("home", { products, user });
  } catch (error) {
    res.render("error");
  }
});

viewsRouter.get("/contact", middlewareIsAdmin, (req, res)=> {
  res.render("contact");
});

export default viewsRouter;