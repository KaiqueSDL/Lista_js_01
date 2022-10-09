

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 


console.log("Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio. a=(B+b).h/2 ")

var base_maior =  parseInt(entrada("Digite o valor da base maior: "));
var base_menor =  parseInt(entrada("Digite o valor da base menor: "));
var altura =  parseInt(entrada("Digite o valor da altura "));

console.log(((base_maior * base_menor) * altura) / 2);
