// criando um array de objeto com a imagens do banner

const bannerItens =[
    {
        imagem:"./src/assets/Game1.jpg",
        titulo:"Caçador de bruxas",
        descricao:"caça bruxas com varinhas",
    },
    {
        imagem:"./src/assets/Game2.jpg",
        titulo:"comedor dem Códigos",
        descricao:"lancha funções como cafe da tarde",
    },
    {
        imagem:"./src/assests/Game2.jpg",
        titulo:"Coach city- Treino para vida",
        descricao:"Com grandes códigos vem grandes projetos",

    }

];

// Declarando as variaveis elementos com DOM(Document Object Model)

const tempo= 5000; //tempo em milisegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0; // inicio da contagem das imagens

//  Criando a função slideShow
function slideShow(){

    // ALTERA A IMAGEM DO FUNDO DO BANNER
    elementoBanner.style.backgroundImage =`url(${bannerItens[i].imagem})`;
    elementoTitulo.textContent =bannerItens[i].titulo;
    elementoDescricao.textContent = bannerItens[i].descricao;

    i++;
    if( i >= bannerItens.length){
        i=0;
    }
    setTimeout(slideShow, tempo);
}

slideShow();