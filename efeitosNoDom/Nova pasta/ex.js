// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const div = document.querySelector('div');

function trocaCorBlue() {
  div.classList.toggle('ativo')
}

setInterval(trocaCorBlue, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnReset = document.querySelector('.resetar')

btnIniciar.addEventListener('click', iniciarTempo);
btnPausar.addEventListener('click', pausarTempo);
btnReset.addEventListener('dblclick', resetarTempo);
let i = 0;
let timer;

function iniciarTempo (){
  timer = setInterval (() => {
    div.innerText = i++
  }, 100);
  btnIniciar.setAttribute('disable', '')
}

function pausarTempo() {
  clearInterval(timer)
  btnIniciar.removeAttribute('disable');
}

function resetarTempo () {
  div.innerText = 0;
  i = 0;
}