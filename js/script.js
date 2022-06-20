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

const teclado = document.querySelector('#teclado');
teclado.classList.add('block');
document.getElementById("desistir").disabled = true;

function jogar(){
       
        teclado.classList.remove('block')    
        criarPalavraScreta()
        montarPalavraNaTela();
        document.getElementById("jogar").disabled = true;
        document.getElementById("desistir").disabled = false;
   
}

function desistir() {
    const palavraTela = document.getElementById("palavra-secreta");
    
    palavraTela.innerHTML = palavraSecretaSorteada; 
    teclado.classList.add('block');
    setTimeout(function(){location.reload()},10000)
}


function criarPalavraScreta() {
    const indexPalavra = parseInt(Math.random()* palavras.length)
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaCategoria)
    console.log(palavraSecretaSorteada)
}


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
        if(tentativas == 0) {
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era: <br>" + palavraSecretaSorteada); 
        }
        
       
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
            abreModal("Parabéns", "Você Venceu!!! <br>"); 
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

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("modalTitulo");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;
    
    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
    location.reload();
    document.getElementById("jogar").disabled = false;
});







let nome = window.document.getElementById ("palavra")

let categoria = document.querySelector ('#categoria')
let palavraOk = false
let categoriaOk = false




function validaPalavra() {
    let txtPalavra = document.querySelector('#txtPalavra')

    if (palavra.value.length < 3 || palavra.value.length > 8 ) {
        txtPalavra.innerHTML = 'Palavra Inválida'
        
        txtPalavra.style.color = 'red'
    } else {

        txtPalavra.innerHTML = 'Palavra Válida'
        txtPalavra.style.color = 'green' 
         palavraOk = true
    }

}


function validaCategoria() {
    let txtCategoria = document.querySelector('#txtCategoria')

    if (categoria.value.length < 3 || categoria.value.length > 8 ) {
        txtCategoria.innerHTML = 'Categoria Inválida'
        
        txtCategoria.style.color = 'red';
    } else {

        txtCategoria.innerHTML = 'Categora Válida'
        txtCategoria.style.color = 'green' 
         categoriaOk = true
    }

}




function enviar () {

   
    
    if ( palavraOk == true && categoriaOk == true) {
       
        let palavra = this.lerDados();
        palavras.push(palavra)
        alert("Palavra criada com sucesso")
        console.log(palavra)
        console.log(palavras)

    } else {
        alert ("Preencha o formulário corretamente antes de enviar")
    }
        
}

 function lerDados() {
    let palavra =  {}
    palavra.nome = document.getElementById('palavra').value;
    palavra.categoria = document.getElementById("categoria").value;

    return palavra;
}

console.log(palavras)