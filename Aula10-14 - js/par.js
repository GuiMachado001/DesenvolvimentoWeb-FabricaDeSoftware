const prompt = require("prompt-sync")();

var numero = parseInt(prompt("Digite um numero: "))

if(numero % 2 === 0){
    console.log(numero," é par");
}else{
    console.log(numero," é impar")
}