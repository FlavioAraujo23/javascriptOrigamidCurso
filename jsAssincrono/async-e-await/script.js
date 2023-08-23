// async e await
//A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

async function puxarDados() {
  // o await é usado sempre na frente em partes que retornam promesas
  const dadosResponse = await fetch('./dados.json'); // a função pausará aqui e vai esperar a promessa ser resolvida, e ira retornar na const o resultado da promise

  const dadosJSON = await dadosResponse.json(); // se eu não tivesse o await a frente ele não esperaria a promise ser concluida, e daria erro
  
  document.body.innerText = dadosJSON.titulo;
}

puxarDados();


// then / async
//A diferença é uma sintaxe mais limpa.

function iniciarFetch() {
  fetch('./dados.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => {
    document.body.innerText = dadosJSON.titulo;
  })
}
iniciarFetch();
// duas funções que fazem a mesma coisa mas uma utiliza o then e a outra o async
async function iniciarAsync() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.titulo;
}
iniciarAsync();


// try/catch     try = tente fazer isso se qualquer erro ocorrer ele vai passar para o catch
//Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
  }
  catch(erro)  { // passasndo o erro que pode ocorrer
    console.log(erro);
  }
}
puxarDados();


// INICIAR FETCH AO MESMO TEMPO
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.

async function iniciarAsync() {
  const dadosPromise = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json'); // caso eu tente fazer um .json nesse estado irá dar erro, pq oq tem o .json é a response, por isso utiliza-se o (await dadosResponse), e depois outro await para .json

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosPromise).json();  // ele ira tentar resolver o que esta dentro dos (), e depois transformar a resposta em json, e novamente um await para esperar ser transformado
  const clientesJSON = await (await clientesResponse).json();
}
iniciarAsync();


// promise
//O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000); // isso não é uma promise, portanto o await não funcionara
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000) // agora aqui sim, ele ira esperar a promise ocorrer para ir para a proxima linha que no caso é o console.log()
  });
  console.log('Depois de 1s');
}
iniciarAsync();