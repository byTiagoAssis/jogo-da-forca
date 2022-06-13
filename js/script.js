let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001= {   
        nome: "Irlanda",
        categoria: "Lugares"
    },
    palavra002 = {
        nome: "Suiça",
        categoria: "Lugares"
    },
    palavra003 = {
        nome: "Londres",
        categoria: "Lugares"
    },
    palavra004 = {
        nome: "Milao",
        categoria: "Lugares"
    },
    palavra005 = {
        nome: "Suecia",
        categoria: "Lugares"
    },
    palavra006 = {
        nome: "California",
        categoria: "Lugares"
    },
]

criarPalavraScreta()
function criarPalavraScreta() {
    const indexPalavra = parseInt(Math.random()* palavras.length)
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaCategoria)
    console.log(palavraSecretaSorteada)
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML =  palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = " ";

    for (i=0; i<palavraSecretaSorteada.length; i++ ) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
    }
    else {
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
    }
}
}

