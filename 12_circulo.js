

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt 

console.log("Escreva um algoritmo para ler as dimensões de um círculo (raio), calcular e escrever a área do círculo. a=pi*r²");

var raio_circulo = parseInt(entrada("Digite o valor do raio do circulo: "));

var quadrado_raio = (raio_circulo * raio_circulo);

var pi = 3.14;

console.log(pi*quadrado_raio);
