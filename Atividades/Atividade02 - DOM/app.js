let contador = 0; 
let cliques = 0;

function iteracao(valorIteracao){
    contador += valorIteracao;
    document.getElementById('countNum').innerText = contador;

    if (valorIteracao > 0) {
        cliques++;
        document.getElementById('countClique').innerText = `${cliques} cliques`;
        document.getElementById('countClique').style.color = "green";
    }

    if (contador < 0) {
        alert("Número já está em 0 (zero).\nNão é possível gerar número negativo!");
        contador = 0;
        document.getElementById('countNum').innerText = contador;
    }

    // console.log(contador); // debug
}

function textoDinamico(event){
    if (event.key === "Enter") {
        let input = document.getElementById("texto_input");
        let vartexto = input.value.trim();
        
        if (vartexto !== "") {
            let p = document.createElement("p");
            p.innerText = vartexto;
            document.getElementById("textos").appendChild(p);
            input.value = ""; 
        }
    }
}

function limpar(){
    document.getElementById("textos").innerHTML = "";
}

function contarCaracteres(){
    let texto = document.getElementById("caracteres_input").value;
    let caracteres = texto.replace(/\s/g, "").length; // remove espacos antes de contar
    document.getElementById("countCaracteres").innerText = `${caracteres} caracteres`;
}

function adicionarItem() {
    let tipoLista = document.getElementById("tipo-lista").value;
    let textoItem = document.getElementById("item-lista").value.trim();
    if (!textoItem) return;

    let listasDiv = document.getElementById("listas");
    let lista = listasDiv.querySelector(tipoLista) || listasDiv.appendChild(document.createElement(tipoLista));

    let item = document.createElement("li");
    item.innerText = textoItem;
    lista.appendChild(item);
    document.getElementById("item-lista").value = "";
}

function limparTudo() {
    // zerar o contador e cliques
    contador = 0;
    cliques = 0;
    document.getElementById("countNum").innerText = contador;
    document.getElementById("countClique").innerText = `${cliques} cliques`;
    document.getElementById("countClique").style.color = "";

    // limpa as listas
    document.getElementById("listas").innerHTML = "";

    // limpa paragrafos
    document.getElementById("textos").innerHTML = "";

    // limpa os inputs
    document.getElementById("texto_input").value = "";
    document.getElementById("caracteres_input").value = "";
    document.getElementById("item-lista").value = "";

    // limpa contador de caracteres
    document.getElementById("countCaracteres").innerText = "0 caracteres";
}
