// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const cep = document.getElementById('cep');
const btn = document.querySelector('.btn')
const div = document.querySelector('.resultado')
const p = document.querySelector('p')
console.log(p)

btn.addEventListener('click', retornaCep)

function retornaCep(event) {
event.preventDefault()
const cepValue = cep.value;
buscaCep(cepValue)
}

function buscaCep(cep) {
fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => response.text()).then((body) => {
  div.innerText = body})
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
function precoBTC() {
fetch('https://blockchain.info/ticker')
.then(r => r.json())
.then(body => {
  setInterval(() => {
    p.innerText = "R$ " + body.BRL.buy
    console.log(body.BRL.buy)
  }, 500)
})
}
precoBTC();
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima 
const btnPiada = document.querySelector('.noris');
const piada = document.querySelector('.piada')

btnPiada.addEventListener('click', mudaPiada);

function mudaPiada(event) {
event.preventDefault();
fetch('https://api.chucknorris.io/jokes/random')
.then((response) => response.json())
.then((body) => piada.innerText = body.value)
}