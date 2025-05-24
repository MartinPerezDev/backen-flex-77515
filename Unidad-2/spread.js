const lista = ["Notebook", "Mouse", "Teclado"];
const listaNueva = ["Monitor", "Impresora"];

const todosLosProductos = [ ...lista, ...listaNueva, "Auriculares" ] ;

console.log(todosLosProductos);