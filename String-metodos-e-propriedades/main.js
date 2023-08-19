// String     toda string possui metodos e propriedades do prototype String
const comida = 'pizza';
const liquido = new String('agua'); /// unica difernça e´que aqui retorna um objeto e na variavel comida retorna uma string, mas ambas possuem os mesmo metodos e propriedades
const ano = new String(2018);


// str.length
const frase = 'a melhor comida'

comida.length;  // 5
frase.length;  // 15

comida[0]  // P
frase[0]  // A
frase[frase.length - 1]  // a

// str.charAt(n)   caracter em
const linguagem = 'JavaScript';
linguagem.charAt(0);  // J
linguagem.charAt(2);  // v
linguagem.charAt(linguagem.length - 1);  // t

// str.concat(str2, str3, ...)
const fala = 'a melhor lingugem é';
const falaCompleta = fala.concat(linguagem, "!!");

// str.includes(search, position)
const fruta = 'banana';
const listaFrutas = 'melancia, banana, laranja';
listaFrutas.includes(fruta)  // true
fruta.includes(listaFrutas)  // false

// str.endsWith(search) e str.startsWith(search)
fruta.endsWith('nana');  // true
fruta.startsWith('ba')  // true
fruta.startsWith('na')  // false

// str.slice(start, end)
const transacao1 = 'deposito de cliente';
const transacao2 = 'deposito de fornecedor';
const transacao3 = 'taxa de camisas';

transacao1.slice(0, 3);  // dep
transacao2.slice(0, 3);  // dep
transacao3.slice(0, 3);  // tax

transacao1.slice(12);  // cliente   corta a partir do doze caracter
transacao1.slice(-4); // ente    corta os quatro ultimos caracteres
transacao1.slice(3, 6); //osi

// str.substring(start, end)
linguagem.substring(3, 5); // as
linguagem.substring(0,4);  // java
linguagem.substring(4);  // script
linguagem.substring(-3);  // javascript  valores negativos nao funcionam aqui

// str.indexOf(search) e str.lastindexOf(search)
const instrumento = 'guitarra'
instrumento.indexOf('r');  // 5
instrumento.lastIndexO('r') // 6
instrumento.indexOf('ta') // 3

// str.padStart(n, str) e str.padEnd(n, str)
const listaPrecos = ['R$ 99', 'R$ 199', 'R$12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // ....R$ 99
listaPrecos[0].padEnd(10, '.');  // R$ 99 ....


// str.repeat(n)
const fraseRepetir = 'ta';
frase.repeat(3); // tatata


//str.replace(regex|substr, newstr|function)
let listaItens = 'camisas bones calças';
listaItens = listaItens.replace(/[ ]+/g, ', ');
let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43' era virgula mudou para ponto


// str.split(padrao)
listaItens.split(' ')
const htmlText = '<div> o melhor item</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
// join é um metodo de array


// str.toUpperCase e str.toLowerCase
const sexo1 = 'feminino';
const sexo2 = 'FEMININO';
(sexo1.toLowerCase() === 'feminino');  // true
(sexo2.toLowerCase() === 'feminino');  // true


// str.trim(), str.trimStart(), str.trimEnd()
const valor = ' R$ 23.00  ';
valor.trim();  // 'R$ 23.00'
valor.trimStart();  // 'R$ 23.00  '
valor.trimEnd();    // ' R$ 23.00'