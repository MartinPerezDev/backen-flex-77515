function calcularSumaTotal(...precios){
  let total = 0;

  precios.forEach((precio)=> {
    total = total + precio;
  })

  return total;
}

console.log( calcularSumaTotal(200, 500) )

console.log( calcularSumaTotal(400, 200, 200) )

//[200, 500]
//[400, 200, 100]