// forms
// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro

// values
//A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.
// o keyup e mais utilizado quando quer se corrigir o usuario enquanto ele estiver escrevedo, ja o change serve para corrigilo assim que ele trocar de input que esta sendo digitado
const form = document.getElementById('contato');
function handleKeyUp(event) {
  console.log(event.target.value); // mostra o valor que esta sendo digitado no input em tempo real
  // um problema ao usar o keyup, e que ele naao reconhece a escrita feita por leitores de voz
}
form.addEventListener('keyup', handleKeyUp);


// validaçao
//O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')

function handleChange(event) {
  const target = event.target;
  if(!target.checkValidity()) {
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove('invalido');
  }
}
form.addEventListener('change', handleChange);

// select
const formSect = document.getElementById('contato');
function handleChange(event) {
  document.body.style.backgroundColor = event.target.value;
}
form.addEventListener('change', handleChange);

// checkbox
// Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.
function handleChange(event) {
  if(event.target.checked)
    console.log(event.target.value);
}
form.addEventListener('change', handleChange);

// pegando todos os valores
// Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.
const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value; // o primeiro define o nome da propriedade no objeto, o segundo define o valor desta propriedade
}
form.addEventListener('change', handleChange);




