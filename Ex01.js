/*
Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
nas variáveis. */

var a = 10;
var b = 20;
var troca;

troca = a;
a = b;
b = troca;

console.log(a);
console.log(b);


