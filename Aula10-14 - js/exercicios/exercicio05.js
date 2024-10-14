// Ler 30 números e exibir a soma dos números que são divisíveis por 5. 
const prompt = require("prompt-sync")();

var cont = 0;
var soma = 0;

while(cont < 30){
    var num = parseInt(prompt("Digite um numero: "))

    if(num % 5 == 0){
        soma += num
    }
    cont +=1
}
console.log(soma)
