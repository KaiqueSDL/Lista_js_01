//2) Escreva um algoritmo para ler um valor do teclado e exibir como resposta o número antecessor. 
 const prompt = require('prompt-sync')({sigint: true}); // biblioteca do prompt 

 var num = prompt("Digite um numero");

 console.log(num - 1);