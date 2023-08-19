// fetch
//fetch API
//Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
//fetch('./arquivo.txt').then(function(response) {
//  console.log(response); // Response HTTP (Objeto) é esse obj que é retornado do metodo
//});

const doc = fetch('./doc.txt')

// response
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
doc.then((response) => {
  response.text().then((body) => {  // o response.text retorna o texto que esta dentro do doc para acessalo é necessario utilizar o then, passadando com qualquer nome o argumento que irar receber este valor
    const p = document.querySelector('p')
    p.innerText = body // nesse exemplo utilizo o valor recebido para alterar o valor de p
    console.log(body)
  })
})

// servidor local
//O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.
//Se dermos um espaço após o objeto ou pularmos linha, o método continua funcionando.


// .json()
// Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.
fetch('https://viacep.com.br/ws/08542330/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro,);
});  // no json tanto a chave quanto o valor devem estar com aspas duplas "", o contrario disso ele nao funcionara


// .text()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
// utilizaremos o text() quando quisermos mostrar aquele arquivo como texto, isso vale para um arquivoo css, js enfim varios
const styleElement = document.createElement('style');

fetch('./style.css')
.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  document.body.appendChild(styleElement);
});


// HTML e .text()
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.
const div = document.createElement('div');

fetch('./sobre.html')
.then(response => response.text())
.then(htmlBody => {
  div.innerHTML = htmlBody;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
});


//.blob()
//Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.
// const div = document.createElement('div');

fetch('./imagem.png')
.then(response => response.blob()) // o blob esta retornando o tamanho a img , e o tipo, ou seja, é uma img do tipo img
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob) // transformando o blob em uma url;
  console.log(blobUrl);
})




