/*Javascript não é Java - Variaveis: caixa de memorias onde se guarda o que quiser.*/
/* Quando for guarda numeros nao precisa de astes ""*/

let nome="Ketlyn Brito"

/*consiguimos visualizar no nosso site atraves da parte que inspeciona na propria pagina*/

/*Funcao: é um pedacinho de codigo que so é executado quando é chamado*/

function falemeunome(){
    console.log(nome);
}

falemeunome/* dessa forma estamos chaamando a funcao*/

/*Algoritmo: são passos para fazer algo.*/ /*Logica de programação: saber fazer o algoritmo*/

/* quando o usuario clica no botao
   trocar a cor de fundo qndo clicar
   trocar o fundo
   trocar a imagem
   publicar na internet*/
   /*document=HTML
   queryselector= pega o que eu quero no HTML*/

let circle = document.querySelector(".circulo");
let image = document.querySelector(".imagem");

function changeColorAndImg(cor, img) {
    circle.style.background = cor;
    image.src = img;
}

function acessToSite() { 
    window.open("https://www.starbucks.com.br/menu-list", "_blank")
}
   