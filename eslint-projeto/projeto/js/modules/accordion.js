export default function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="acoordion"] dt');
  const classeAtivo = 'ativo'; // quando repetir uma string, e recomendado criar uma variavel p ela
  
  function activeAccordion () {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo)
   }

  if (accordionList.length) {
    accordionList[0].classList.add(classeAtivo)
    accordionList[0].nextElementSibling.classList.add(classeAtivo)
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
