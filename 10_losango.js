

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 


console.log("Escreva um algoritmo para ler as dimensões de um losango (diagonal maior, diagonal menor), calcular e escrever a área do losango. Dica a=D.d/2  ")

var dia_maior =  parseInt(entrada("Digite o valor da diagonal maior: "));
var dia_menor =  parseInt(entrada("Digite o valor da diagonal menor: "));

console.log((dia_maior * dia_menor) / 2);
