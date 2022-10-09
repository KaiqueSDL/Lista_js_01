// Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. Dica a=b.h ]


const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 


console.log("Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. Dica a=b.h ")

var base = parseInt(entrada("DIgite a base do seu retangulo: "));
var altura = parseInt(entrada("Digite a altura do seu retangulo: "));

console.log(base * altura , "metros");
