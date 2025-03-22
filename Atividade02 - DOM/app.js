let contador = 0; 
let cliques = 0;

function iteracao(valorIteracao){
    contador += valorIteracao;
    document.getElementById('countNum').innerText = contador;

    if (valorIteracao > 0) {
        cliques++;
        document.getElementById('countClique').innerText = `${cliques} cliques`;
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