// Ler diversos números e exibir quantos números ímpares foram digitados. Considere o valor - 999 como código fim de entrada. 
const prompt = require("prompt-sync")();

cont = 0;


while(true){
    var num = parseInt( prompt("Digite um numero ou digite '-999' para finalizar: "));

    if(num % 2 != 0){
        cont += 1
    }if (num == -999) {
        break
    } else {
        continue
    }
}

console.log(cont-1, "numeros impares foram digitados")