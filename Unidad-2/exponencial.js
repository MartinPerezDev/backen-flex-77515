const precio = 1000;
const tasaInteres = 1.05 //5%
const cuotas = 12;

const totalPagar = precio * tasaInteres ** cuotas;

console.log( totalPagar.toFixed(2) );