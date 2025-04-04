document.addEventListener("DOMContentLoaded", () => {
    const inputItem = document.getElementById("inputItem");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const tabelaItens = document.getElementById("tabelaItens");
    const selectItens = document.querySelector("select");
    const btnMarcar = document.getElementById("btnMarcar");
    const btnDesmarcar = document.getElementById("btnDesmarcar");
    const btnRemover = document.getElementById("btnRemover");

    // Função para adicionar item à tabela
    function adicionarItemTabela(texto) {
        const linha = document.createElement("tr");
        const celula = document.createElement("td");
        celula.textContent = texto;
        linha.appendChild(celula);
        tabelaItens.appendChild(linha);
    }

    // Função para adicionar item ao select
    function adicionarItemSelect(texto) {
        const option = document.createElement("option"); // Cria um novo elemento option
        option.value = texto;
        option.textContent = texto; 
        selectItens.appendChild(option); // Adiciona o option ao select
    }

    // Função para marcar/desmarcar item na tabela
    function alterarMarcacaoItem(texto, marcar) {
        const linhas = tabelaItens.getElementsByTagName("tr");
        for (const linha of linhas) { // Verifica cada linha da tabela
            // Se o texto da linha for igual ao texto do select
            if (linha.textContent === texto) {
                if (marcar && linha.style.backgroundColor === "yellow") {
                    alert("O item já está marcado.");
                    return false;
                } else if (!marcar && linha.style.backgroundColor === "") {
                    alert("O item já está desmarcado.");
                    return false;
                }
                linha.style.backgroundColor = marcar ? "yellow" : ""; // Define a cor de fundo
                return true;
            }
        }
        return false;
    }

    // Função para remover item da tabela e do select
    function removerItem(texto) {
        // Remover da tabela
        const linhas = tabelaItens.getElementsByTagName("tr"); // Pega todas as linhas da tabela
        // Verifica cada linha da tabela
        for (const linha of linhas) { // Se o texto da linha for igual ao texto do select, remove
            if (linha.textContent === texto) {
                tabelaItens.removeChild(linha); // Remove a linha da tabela
                break;
            }
        }

        // Remover do select
        const options = selectItens.getElementsByTagName("option");
        for (const option of options) { // Verifica cada option do select 
            if (option.value === texto) {
                selectItens.removeChild(option); 
                break;
            }
        }
    }

    // Adicionar item à tabela e ao select
    btnAdicionar.addEventListener("click", () => {
        const texto = inputItem.value.trim();
        if (texto === "") return;

        adicionarItemTabela(texto);
        adicionarItemSelect(texto);

        inputItem.value = ""; // Limpar o campo de entrada
    });

    // Marcar item
    btnMarcar.addEventListener("click", () => {
        const selectedOption = selectItens.value;
        if (!selectedOption) return;

        alterarMarcacaoItem(selectedOption, true);
    });

    // Desmarcar item
    btnDesmarcar.addEventListener("click", () => {
        const selectedOption = selectItens.value;
        if (!selectedOption) return;

        if (!alterarMarcacaoItem(selectedOption, false)) {
            alert("O item já está desmarcado.");
        }
    });

    // Remover item
    btnRemover.addEventListener("click", () => {
        const selectedOption = selectItens.value;
        if (!selectedOption) return;

        removerItem(selectedOption);
    });
});