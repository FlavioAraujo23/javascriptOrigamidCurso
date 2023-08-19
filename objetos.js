//OBJETOS
let pessoa = {
  nome: 'Flavio',     // chave e valor, cada linha e chamada de propriedade e separadas por ,
  idade: 20,
  profissao: 'progammer',
  possuiFaculdade: true
}

//METODOS propriedade que possui uma funçao no local de seu valor
let quadrado ={
  lados:4,
  area: function(lado) {  // metodo para receber uma function no valor, que sera um metodo
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado // o 'this' é simplismente o proprio objeto, com isso em mente, ele e´usado para puxar a propriedade lados, com a seguinte sintaxe this.lados
  }
}
quadrado.lados; // 4
quadrado.area(5) // para acessar um metodo basta colocar o nome do objeto que nesse caso e o quadrado e em seguida um . seguido pelo metodo que sera neste caso o area que e uma funcao
quadrado.perimetro()
// abreviaçao de area: function(){} para area (){} no es6+
/* 
var quadrado = {
  lados: 4
  area(lado) {
    return lado* lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}
*/

//ORGANIZAR CODIGO
Math.PI; // math é um objeto nativo do javascript
Math.random(); // retorna um numero aleatorio 
let pi = Math.PI;
console.log(pi)  // console é um objeto e log() um metodo