// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const {backgroundColor, color, margin} = window.getComputedStyle(btn)
// o style é mais utilizado para setar novos valores a elementos css, já o getComputedStyle, consegue retornar o valor atual do elemnto css
console.log(backgroundColor, color, margin)


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
