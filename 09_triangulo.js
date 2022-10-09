

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 
console.log("Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo. Dica a=b.h/2 ")

var base =  parseInt(entrada("Digite o valor da sua base: "));
var altura = parseInt(entrada("Digite o valor da sua altura: "));

console.log((base * altura) / 2);
