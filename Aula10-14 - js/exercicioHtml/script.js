function abrir(botao) {
    var respostaContainer = botao.parentElement.querySelector('.respostaContainer');
    
    var visivel = respostaContainer.style.display !== "none";

    if (!visivel) {
        respostaContainer.style.display = "block"; 
        botao.innerHTML = "Ver Menos"; 
    } else {
        respostaContainer.style.display = "none";
        botao.innerHTML = "Ver Mais";
    }
}