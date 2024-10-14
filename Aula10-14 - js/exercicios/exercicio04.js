// Ler 10 números e exibir a soma dos números ímpares.

const prompt = require("prompt-sync")();

var cont = 0;
var soma = 0;

while(cont < 10){
    var num = parseInt(prompt("Digite um numero: "))

    if(num % 2 != 0){
        soma += num;
    }
    cont += 1;
}
console.log(soma)