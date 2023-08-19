// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p')
const filtro = Array.prototype.reduce.call(p, function(acc, item){
  acc += item.textContent.length
  return acc
},0)
console.log(filtro)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : ''; // se classe existe crie uma com o valor, se nao apenas deixe vazio
  conteudo ? elemento.innerHTML = conteudo : '';

  return elemento
}
console.log(criarElemento('p', 'desativado', 'ola me chamo flavio'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const criarElementoPadrao = criarElemento.bind(null,'h1','titulo');

console.log(criarElementoPadrao('ola me chamo flavio'))
