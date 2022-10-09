

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 
console.log(" Escreva um algoritmo para ler as dimensões de um quadrado (lado), calcular e escrever a área do quadrado. Dica a=l² ")

var lado =  parseInt(entrada("Digite o valor do lado"));


console.log(lado * lado);
