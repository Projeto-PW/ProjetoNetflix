// Seleciona os elementos do carrossel
const carrosselLista = document.querySelector('.carrossel-lista');
const itensCarrossel = document.querySelectorAll('.carrossel-item');
const btnAnterior = document.querySelector('.btn-anterior');
const btnProximo = document.querySelector('.btn-proximo');

// Define o índice do item atual e a largura de cada item
let indiceAtual = 0;
const larguraItem = itensCarrossel[0].offsetWidth + 10; // 10 é o valor do gap, ajuste conforme seu CSS

// Adiciona os eventos de clique aos botões de navegação
btnProximo.addEventListener('click', () => {
    // Incrementa o índice atual
    indiceAtual++;
    // Se chegar ao final, volta para o primeiro item
    if (indiceAtual >= itensCarrossel.length) {
        indiceAtual = 0;
    }
    // Chama a função para mover o carrossel
    moverCarrossel();
});

btnAnterior.addEventListener('click', () => {
    // Decrementa o índice atual
    indiceAtual--;
    // Se chegar ao início, vai para o último item
    if (indiceAtual < 0) {
        indiceAtual = itensCarrossel.length - 1;
    }
    // Chama a função para mover o carrossel
    moverCarrossel();
});

// Função para mover o carrossel
function moverCarrossel() {
    // Calcula a nova posição de "scroll" com base no índice atual
    const novaPosicao = indiceAtual * larguraItem;
    // Define a transformação CSS para mover a lista do carrossel
    carrosselLista.style.transform = `translateX(${novaPosicao}px)`;
}



// Array de objetos com as imagens e informações do banner
const bannerItems = [
    {
        image: './src/assets/Game6.jpg',
        title: 'Título do Filme/Série 1',
        description: 'Descrição do Filme/Série 1. Uma história emocionante e cheia de reviravoltas que você não pode perder.'
    },
    {
        image: './src/assets/Game1.jpg',
        title: 'Título do Filme/Série 2',
        description: 'Descrição do Filme/Série 2. Uma aventura épica em um mundo de fantasia e magia.'
    },
    {
        image: './src/assets/Game2.jpg',
        title: 'Título do Filme/Série 3',
        description: 'Descrição do Filme/Série 3. Um thriller psicológico que vai te prender do início ao fim.'
    }
];

// Declaração das variáveis e elementos HTML
let i = 0;
const tempo = 5000; // Tempo em milissegundos
const bannerElement = document.querySelector('.banner');
const bannerTitulo = document.querySelector('.banner-titulo');
const bannerDescricao = document.querySelector('.banner-descricao');

// Função para o slideshow
function slideShow() {
    // Altera a imagem de fundo do banner
    bannerElement.style.backgroundImage = `url(${bannerItems[i].image})`;
    
    // Altera o título e a descrição
    bannerTitulo.textContent = bannerItems[i].title;
    bannerDescricao.textContent = bannerItems[i].description;

    // Incrementa o índice e o reinicia se chegar ao final do array
    i++;
    if (i >= bannerItems.length) {
        i = 0;
    }

    // Chama a função novamente após o tempo definido
    setTimeout(slideShow, tempo);
}

// Inicia o slideshow
slideShow();