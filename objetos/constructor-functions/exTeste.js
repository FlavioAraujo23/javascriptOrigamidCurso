
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
function Dom(tag) {
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
   const elementsList = document.querySelectorAll(tag);
   this.elements = elementsList;
     // addClass(classe), adiciona a classe a todos os elementos
   this.addClass = function(classe) {
    elementsList.forEach((item) => {
      item.classList.add(classe)
    })
   }
  // removeClass(classe), remove a classe a todos os elementos
  this.removeClass = function(classe) {
    elementsList.forEach((item) => {
      item.classList.remove(classe)
    })
  }
}
const listaItens = new Dom('li');
listaItens.addClass('ativar')
listaItens.removeClass('ativar')
