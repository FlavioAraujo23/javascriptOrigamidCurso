// history API
// history
//É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima


//PUSHSTATE()
//A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).

// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title ainda é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.

window.history.pushState(null, null, 'sobre.html'); // utilizamos mais ele com o fetch


//POPSTATE
//O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.

window.addEventListener('popstate', () => {
  fetchPage(window.location.pathname);
});


//FETCH E HISTORY
//Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

async function fetchPage(url) {
  const pageReponse = await fetch(url);
  const pageText = await pageReponse.text();
  window.history.pushState(null, null, url);
}

const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href) // passa o url do link clicado
  window.history.pushState(null, null, event.target.href) // mudando o url do site
}

async function fetchPage(url){
  const pageReponse = await fetch(url);
  const pageText = await pageReponse.text();  // transformando em texto, retorna o conteudo do link clicado
  replaceContent(pageText)
}

function replaceContent(newText) {
  const newHTML = document.createElement('div');
  newHTML.innerHTML = newText; // coloca o conteudo no new html

  const oldcontent = document.querySelector('.content')
  const newContent = newHTML.querySelector('.content')

  oldcontent.innerHTML = newContent.innerHTML
  document.title = newHTML.querySelector('title').innerText // mudando o title conforme o nome que esta no link clicado
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.pathname) // ao clicar no voltar irar dar um fetch na pagina e atualizar  a url sem precisar recarregar a pagina e assim deixar a navegação mais fluida
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})