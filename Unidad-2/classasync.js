class ProductManager {
  #admin;

  constructor(products) {
    this.products = products;
    this.#admin = true;
  }

  async getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error(error.message);
    }
  }

  deleteProductById(productId){
    try {
      if(this.#admin){
        const newList = this.products.filter( (product) => product.id !== productId );
        this.products = newList;
      }else{
        throw new Error("Permiso denegado");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  addProduct(newProduct){
    try {
      if(this.#admin){
        this.products.push(newProduct);
      }else{
        throw new Error("Permiso denegado");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

}


const main = async() => {
  try {
    const productManager = new ProductManager([]);
    await productManager.getProducts();

    productManager.deleteProductById(20);
    productManager.addProduct({ id: 21, title: "Buzo gris", price: 2000 });

    console.log( productManager.products );
  } catch (error) {
    console.error(error.message);
  }
}

main();