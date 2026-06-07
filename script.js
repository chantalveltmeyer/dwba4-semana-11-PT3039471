// script.js

const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');

const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let slideAtual = 0;

function mostrarSlide(index){

    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });

    bolinhas.forEach(bolinha => {
        bolinha.classList.remove('ativa');
    });

    slides[index].classList.add('ativo');
    bolinhas[index].classList.add('ativa');
}

function proximoSlide(){

    slideAtual++;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
}

function slideAnterior(){

    slideAtual--;

    if(slideAtual < 0){
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
}

btnProximo.addEventListener('click', proximoSlide);

btnAnterior.addEventListener('click', slideAnterior);

bolinhas.forEach((bolinha, index) => {

    bolinha.addEventListener('click', () => {

        slideAtual = index;

        mostrarSlide(slideAtual);
    });

});

setInterval(proximoSlide, 4000);
