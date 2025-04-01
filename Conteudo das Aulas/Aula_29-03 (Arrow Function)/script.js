// Preços dos combustíveis
const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.79;

// arrow function para atualizar o valor a pagar
// com base no tipo de combustível e na quantidade de litros
const  atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;
    //switch case
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            document.getElementById("resultado").textContent = "Tipo inválido";
            return;
    }

    calcularValorAbastecimento(precoPorLitro, litros);
}

// arrow function para calcular o valor total a pagar
const calcularValorAbastecimento = (precoCombustivel, litros) => { 
    if(litros <=0 || isNaN(litros)){ 
        document.getElementById("resultado").textContent = "Insira um valor positivo";
        return;
    }
    
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = `Valor a pagar: ${formatarMoeda(valorTotal)}`; 
}

// arrow function para formatar o valor em moeda brasileira
const formatarMoeda = valor => {
    return "R$ " + valor.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

document.getElementById("litros").addEventListener("input", atualizarValor); // Atualiza o valor quando o usuário digita a quantidade de litros
document.getElementById("combustivel").addEventListener("change", atualizarValor); // Atualiza o valor quando o usuário seleciona o tipo de combustível

// Adiciona um evento de teclado para o campo de litros
// para atualizar o valor quando o usuário pressionar Enter
document.getElementById("litros").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault(); // Evita o comportamento padrão do Enter
        event.atualizarValor(); // Chama a função para atualizar o valor
    }
})