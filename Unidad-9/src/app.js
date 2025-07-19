import express from "express";
import productsRouter from "./routes/products.router.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";
import cartRouter from "./routes/carts.router.js";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

//inicializamos las variables de entorno
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080 ;

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

connectMongoDB();

//endpoints
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewsRouter);

app.listen(PORT, ()=> {
  console.log("Servidor iniciado correctamente!");
});