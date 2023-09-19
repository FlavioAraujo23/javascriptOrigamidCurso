// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const todasLi = document.querySelectorAll('li');
for(const li of todasLi) {
  li.classList.add('ativo');
}
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(key in window){
  console.log(`${key}, ${window[key]}`)
}