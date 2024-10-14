// Ler diversos números e exibir quantos foram digitados. O valor -1 é código de fim de         

const prompt = require("prompt-sync")();

cont = 0;

while(true){
    var num = parseInt (prompt("Digite um numero ou digite '-1' para finalizar: "));

    if(num == -1){
        break
    }
    cont += 1
}

console.log(cont, "numeros foram digitados")