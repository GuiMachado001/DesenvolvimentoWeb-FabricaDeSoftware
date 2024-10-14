// Mostrar os números pares entre 2 a 50. 

var cont = 2;

while(cont<=50){
    if(cont % 2 == 0){
        console.log(cont, " - Par")
    }else{
        console.log(cont, " - Impar")
    }
    cont+= 1
}