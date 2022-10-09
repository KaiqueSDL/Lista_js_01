
 // Escreva um algoritmo para ler um valor do teclado e exibir como resposta o número sucessor. 
 
 const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 

 var num = parseInt(entrada("Digite um valor: ")); 

 console.log(num + 1);
