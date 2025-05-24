const metodosPago = ["tarjeta", "paypal", "transferencia", "efectivo"];

const metodoUsuario = "transferencia";

if( metodosPago.includes(metodoUsuario) ){
  console.log("Metodo de pago aceptado");
}else{
  console.log("Metodo de pago no valido");
}