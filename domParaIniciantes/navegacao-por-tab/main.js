const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

tabContent[0].classList.add('ativo') // adicionando a classe ao primeiro item do site para que ao entrar ele ja carregue com as info, e a troca de informaçoes so ocorrera ao click na img

if (tabMenu.length && tabContent.length){ // o if verifica se as section do tabMenu existem, e tambem se ha algo na tabcontent, caso nao o retorno sera 0 ou seja false e codigo nao ocorrera

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    }) // funcao que ativa a class em somente um item
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index)
  })   // qunado executado o click ativa a arrow function, que ativa dentro dela a funcao de adicionar a classe ativo
  })
}