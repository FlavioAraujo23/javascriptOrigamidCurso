const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

handleStyle = {
  element: btn,  // declarando o elemnto que sera modificado, e logo dps declaro as funcoes
  texto(value) {
    this.element.style.innerText = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value; // todo elemento por padrao tem a propriedade style que pode ser usada para trocar o estilo de algum elemento, nesse caso o color
  },
  color(value) {
    this.element.style.color = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  }
}

function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value)  // primeiro o index como o name que sera o nome da propriedade a ser mudado do css, e por segundo o valor a ser inserido   
  saveValues(name, value);
  showCss()
}

function saveValues (name, value) {
  localStorage[name] = value;  // salvando os dados no storage do navegador
  
}

function setValues() {
  const properties = Object.keys(localStorage) // retorna uma array com todos as chaves do localStorage em uma array
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie] // faz um loop pelos valores questao dentro do localstorage e depois seta eles no span
  })
  showCss()
}

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>'); 
  console.log(cssText) // mostra o valor que foi modificado no elemento
}