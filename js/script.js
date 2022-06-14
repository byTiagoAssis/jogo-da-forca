let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001= {   
        nome: "IRLANDA",
        categoria: "Lugares"
    },
    palavra002 = {
        nome: "SUICA",
        categoria: "Lugares"
    },
    palavra003 = {
        nome: "LONDRES",
        categoria: "Lugares"
    },
    palavra004 = {
        nome: "MILAO",
        categoria: "Lugares"
    },
    palavra005 = {
        nome: "SUECIA",
        categoria: "Lugares"
    },
    palavra006 = {
        nome: "CALIFORNIA",
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
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = " ";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaletraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela()
    }
    
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff"; 
}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)

    if (pos < 0) {
        tentativas--
        carregaImagemForca() 
        // verificar se ainda tem tentativas // mensagem
    }
    else {
        for (i=0; i<palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i]== letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria= true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(palavraSecretaCategoria[i] != listaDinamica[i]){
            vitoria= false;
        }
        if (vitoria == true) {
            //mensagem na tela
            tentativas = 0;
        }
        
    }
}

function carregaImagemForca() {
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}
