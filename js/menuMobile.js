const botaoMenu = document.querySelector('.botao__menu');
const navegacao__mobile = document.querySelector('.navegacao__mobile');

let menuEstaAberto = false;

botaoMenu.addEventListener('click', function(){
menuEstaAberto ? navegacao__mobile.classList.add('invisivel') : navegacao__mobile.classList.remove('invisivel')

menuEstaAberto ? botaoMenu.children[0].setAttribute('src', 'images/botao_hamburguer.png') : botaoMenu.children[0].setAttribute('src', 'images/Close_2.svg');

menuEstaAberto = !menuEstaAberto;
})

var texto = "Beatriz Campos Lima";
var textoElemento = document.querySelector(".titulo");
var atraso = 200;

var contadorLetras = 0;

var titulo = document.getElementsByClassName("titulo");
  for (var i = 0; i < titulo.length; i++) {
    escreverTextoDigitacao(titulo[i]);
  }
  

function escreverTextoDigitacao(){
    if(contadorLetras < texto.length){
        textoElemento.textContent += texto.charAt(contadorLetras);
        contadorLetras++;
        setTimeout(escreverTextoDigitacao, atraso)
    }
}

escreverTextoDigitacao();

