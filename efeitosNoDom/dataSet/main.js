function initTabnav(){
const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
const tabContent = document.querySelectorAll('[data-tab="content"] section');

tabContent[0].classList.add('ativo') // adicionando a classe ao primeiro item do site para que ao entrar ele ja carregue com as info, e a troca de informaçoes so ocorrera ao click na img

if (tabMenu.length && tabContent.length){ // o if verifica se as section do tabMenu existem, e tambem se ha algo na tabcontent, caso nao o retorno sera 0 ou seja false e codigo nao ocorrera

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    }) // funcao que ativa a class em somente um item
    const direcao = tabContent[index].dataset.anime
    tabContent[index].classList.add('ativo',direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index)
  })   // qunado executado o click ativa a arrow function, que ativa dentro dela a funcao de adicionar a classe ativo
  })
}
}
initTabnav();


function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="acoordion"] dt');
  const classeAtivo = 'ativo'; // quando repetir uma string, e recomendado criar uma variavel p ela
  if(accordionList.length) {
    accordionList[0].classList.add(classeAtivo)
    accordionList[0].nextElementSibling.classList.add(classeAtivo)

    function activeAccordion () {
      this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo)
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()

function initScollSuave () {

  const linksInternos = document.querySelectorAll('[data-anime="menu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa 
    // const topo =section.offsetTop;
    // window.scrollTo({
    // top: topo,
    // behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScollSuave()

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length) {
  const windowMetade = window.innerHeight * 0.5

  function animaScroll () {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(isSectionVisible){
        section.classList.add('ativo')
      } else{
        section.classList.remove('ativo')
      }
    })
  }

  animaScroll()

  window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();