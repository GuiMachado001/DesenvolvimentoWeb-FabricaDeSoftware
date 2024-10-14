// function abrir(botao)

// {
//   var td = botao.parentElement;
//   var spans = td.getElementsByTagName('span');
//   var verMaisVisivel = spans[1].style.display == "none";

//   if (verMaisVisivel) {
//     spans[0].style.display = spans[0].style.display = "none";
//     spans[1].style.display = spans[1].style.display = "block";
//     botao.innerHTML = "Ver Menos";
//   } else {
//     spans[0].style.display = spans[0].style.display = "block";
//     spans[1].style.display = spans[1].style.display = "none";
//     botao.innerHTML = "Ver Mais";
//   }
// }

function abrir(botao){
    var td = botao.parentElement;
    var teste = td.document.querySelectorAll('.respostaContainer');
    // var verMaisVisivel = teste.style.display == "none";

    if(td){
        teste.remove('displayNone');
        teste.add('displayBlock')
        botao.innerHTML = "Ver Menos";
    }else{
        teste.remove('displayBlock');
        teste.add('displayNone')
        botao.innerHTML = "Ver Mais";
    }
}