// Escreva um algoritmo para ler dois valores do teclado e exibir como resposta a subtração dos valores. 

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 

var num1 = parseInt(entrada("DIgite o primeiro numero: "));
var num2 = parseInt(entrada("Digite o seu segundo numero: "));

console.log(num1 - num2);

