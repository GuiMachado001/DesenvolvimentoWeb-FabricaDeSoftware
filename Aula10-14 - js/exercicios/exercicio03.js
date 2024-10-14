// Ler 10 números e exibir o maior número.  

const prompt = require("prompt-sync")();
var cont = 0;

var numMaior= 0;

while(cont <10){
    var num = parseInt(prompt("DIgite um numero: "))

    if(num > numMaior){
        numMaior = num
    }
    cont += 1
}
console.log(numMaior)