import ProductManager from "./productManager.js"

const main = async () => {
  try {
    const productManager = new ProductManager("./products.json");
    await productManager.addProduct({ title: "Campera azul", description: "Campera de invierno azul" });
    const products = await productManager.getProducts();
    console.log(products);
  } catch (error) {
    console.log(error.message);
  }
}

main();