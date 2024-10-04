function validarSenha(novaSenha) {
    const liDigito = document.getElementById('digito');
    const liMaiuscula = document.getElementById('maiusca');
    const liNumero = document.getElementById('numero');
    const liCaracEspec = document.getElementById('caracEspec');



    
    // Checa o comprimento da senha
    if (novaSenha.length >= 8) {
        liDigito.classList.add('requisitosValidos');
    } else {
        liDigito.classList.add('requisitosInvalidos');
    }

    // Checa se tem letra maiúscula
    if (/[A-Z]/.test(novaSenha)) {
        liMaiuscula.classList.add('requisitosValidos');
    } else {
        liMaiuscula.classList.add('requisitosInvalidos');
    }

    // Checa se tem dígito
    if (/[0-9]/.test(novaSenha)) {
        liNumero.classList.add('requisitosValidos');
    } else {
        liNumero.classList.add('requisitosInvalidos');
    }

    // Checa se tem caractere especial
    if (/[!@#$%^&*(),.?":{}|<>]/.test(novaSenha)) {
        liCaracEspec.classList.add('requisitosValidos');
    } else {
        liCaracEspec.classList.add('requisitosInvalidos');
    }
}

// Adiciona um evento de input ao campo de senha
document.getElementById('novaSenha').addEventListener('input', function() {
    validarSenha(this.value);
});