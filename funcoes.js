// VALORES RETORNADOS
function terceiraIdade (idade){
  if(typeof idade !== 'number'){
    return 'informe a sua idade';
  } else if(idade >= 60){
    return true;       // funcao para ver se e da terceira idade, primeiro verifica se o dado e um numero, depois cai no if ou else e retorna uma boolean, nao e boa pratica retornar varios tipos de dados
  } else {
    return false;
  }
}
console.clear()

//ESCOPO
function precisoVisitar(paisesVisitados){
  let totalPaises = 193;
  return `ainda faltam ${totalPaises - paisesVisitados} paises para visitar`  //utilizo a template string para o retorno, importante dizer que variavel dentro das {} da funçao nao sera visivel fora dele, apenas se criado fora das chaves
}

//ESCOPO LEXICO
var profissao = 'Designer';
/* aqui idade foi usada 2 vezes, retorna sempre a ultima variavel declarada*/
function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {   //funcoes criadas dentro de outras funcoes so terao acesso dentro do function se tentar acessar fora dele dara error
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados(); //pode-se retornar uma funçao, mas se eu tentar ulizar outros dados fora da funçao dara erro
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

console.clear()

//HOISTING
imc(80, 1.80); // imc aparece no console
function imc(peso, altura) {    // joga as funcoes para cima, mesmo que a funçao foi declarada depois de chamada
  const imc = peso / (altura ** 2);
  console.log(imc);
}