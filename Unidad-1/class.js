class Persona {

  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.humor = 80;
  }

  //metodos

  saludar(){
    const mensaje = `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    return mensaje;
  }

  booleanoAleatorio(){
    const boolRand = Math.floor( Math.random() * 2  );
    return boolRand;
  }

  verPartido(){
    const numAleatorio = this.booleanoAleatorio();
    if(numAleatorio === 1){
      this.humor = 90;
      const mensaje = `[ver partido] - El equipo de ${this.nombre} gano!`;
      return mensaje;
    }else{
      this.humor = 50;
      const mensaje = `[ver partido] - El equipo de ${this.nombre} perdio`;
      return mensaje;
    }
  }

}

const persona1 = new Persona("Martin", 20);
const persona2 = new Persona("Pablo", 35);

console.log( persona1.saludar() );
console.log( persona2.saludar() );

console.log( persona1.verPartido() );


class ProductManager{

  constructor(){
    this.products = [];
  }

  addProduct(newProduct){
    
  }
}