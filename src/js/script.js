// CRIANDO UM ARRAY DE OBJETO COM AS IMAGENS E INFORMAÇÕES DO BANNER

const bannerItems = [
  {
    imagem:"./src/assets/Game1.jpg",
    titulo:"Caçador de Bruxas",
    descricao:"Caça bruxas com varinhas",
  },

  {
    imagem:"./src/assets/Game2.jpg",
    titulo:"Comedor de Códigos",
    descricao:"Lancha funções como café da tarde",
  },

  {
    imagem:"./src/assets/Game3.jpg",
    titulo:"Coach City- Treino pra vida",
    descricao:"Com grandes códigos vem grandes projetos",
  }
];

//DECLARANDO AS VARIÁVEIS ELEMENTOS COM DOM(DOCUMENT OBJECT MODEL)

const tempo = 5000; //TEMPO EM MILISSEGUNDOS
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo"); 
const elementoDescricao = document.querySelector(".banner-descricao");

let i = 0; // Inicio da contagem das imagens

// Criando a função slideshow

function slideShow() {
    //ALTERA A IMAGEM DO FUNDO DO BANNER
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    elementoTitulo.textContent = bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao

    i++;
    if(i >= bannerItems.length){
        i=0;
    }
    setTimeout(slideShow, tempo);

}
slideShow();