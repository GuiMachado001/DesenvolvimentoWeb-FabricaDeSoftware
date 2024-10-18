// Ler 20 números inteiros e exibir quantas vezes o número 50 foi informado. O valor 0 é o código fim de entrada. 

const prompt = require("prompt-sync")();

var cont = 0;

while(true){
    var num = prompt("Digite um numero ou digite '0' para finalizar: ")

    if(num == 0){
        break
    }if (num == 50) {
        cont += 1
    } else {
        continue
    }

}

console.log(cont, "vezes o numero 50 foi digitado")