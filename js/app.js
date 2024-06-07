// Selecionando o botão de comprar
const botaoComprar = document.getElementById('botao-comprar');

// Adicionando evento de clique ao botão Comprar
botaoComprar.addEventListener('click', function(event) {
    const tipoIngresso = document.getElementById('tipo-ingresso'); // Selecionando o tipo de ingresso
    const qtdInput = document.getElementById('qtd'); // Selecionando o input de quantidade
    const qtdPista = document.getElementById('qtd-pista'); // Selecionando a quantidade disponível de ingressos pista
    const qtdSuperior = document.getElementById('qtd-superior'); // Selecionando a quantidade disponível de ingressos cadeira superior
    const qtdInferior = document.getElementById('qtd-inferior'); // Selecionando a quantidade disponível de ingressos cadeira inferior

    const tipoSelecionado = tipoIngresso.value; // Obtendo o tipo de ingresso selecionado
    const quantidade = parseInt(qtdInput.value); // Obtendo a quantidade selecionada

    // Verificando se a quantidade selecionada é válida
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    // Verificando se há ingressos suficientes disponíveis para o tipo selecionado
    switch (tipoSelecionado) {
        case "pista":
            if (quantidade > parseInt(qtdPista.textContent)) {
                alert("Quantidade indisponível para pista!");
                return;
            }
            qtdPista.textContent = parseInt(qtdPista.textContent) - quantidade;
            break;
        case "superior":
            if (quantidade > parseInt(qtdSuperior.textContent)) {
                alert("Quantidade indisponível para cadeira superior!");
                return;
            }
            qtdSuperior.textContent = parseInt(qtdSuperior.textContent) - quantidade;
            break;
        case "inferior":
            if (quantidade > parseInt(qtdInferior.textContent)) {
                alert("Quantidade indisponível para cadeira inferior!");
                return;
            }
            qtdInferior.textContent = parseInt(qtdInferior.textContent) - quantidade;
            break;
        default:
            alert("Tipo de ingresso inválido.");
            return;
    }

    // Resetando os valores do formulário
    tipoIngresso.value = "inferior";
    qtdInput.value = "";
});
