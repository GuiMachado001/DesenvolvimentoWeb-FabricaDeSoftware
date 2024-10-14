// Ler diversos números e exibir qual foi a soma. O valor -999 é código de fim da entrada. 
const prompt = require("prompt-sync")();
var soma = 0;

while(true){
    var num = parseInt( prompt("Digite um numero ou '-999' para sair: "));

    if(num == -999){
        break
    }else{
        soma += num
    }
}

console.log("A soma dos numeros digitados é: ",soma)