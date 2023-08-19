// TUDO É OBJETO, tudo q da para acessar usando . é´um objeto

let nome = 'flavio';
nome.length;  // 5
nome.charAt(1); // 'l'
nome.replace('vio', 'vios') // 'flavios'
nome; // flavio
// uma string herda propriedades e metodos do constructor string()

// Numeros
let altura = 1.8
altura.toString(); // '1.8'
altura.toFixed(); // 2
// por um breve momento o numero é envolvido em um objeto(coerção), tendo acesso assim as suas propriedades e metodos

//Funcoes
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();
// "function areaQuadradro(lado) {
//    return lado * lado;
//}"
areaQuadrado.length; // 1

// Elementos do DOM
let btn = document.querySelector('.btn');
btn.classList.add('azul');  // adiciona a classe azul
btn.innerText; // 'clique'
btn.addEventListener('click', function(){
  console.log('clicou')
})
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.


// nomeie 3 propriedades ou métodos de strings
let eu = 'araujo'
eu.toLowerCase()
eu.length
eu.valueOf()
// nomeie 5 propriedades ou métodos de elementos do DOM
document.getElementById()
document.querySelectorAll()
document.links
document.URL
document.body
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
