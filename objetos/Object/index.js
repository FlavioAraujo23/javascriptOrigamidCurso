// object
// metodos de objetos
//Object.create(obj, defineProperties) 
// retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro); // cria um novo objeto que ira utilizar as memsa propriedades e metodos do objeto anterior
honda.init('Honda').acelerar();  

// object.assign(alvo, obj1, obj2)
// adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);


// Object.defineProperties(alvo, propriedades)
// adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
const moto2 = {}
Object.defineProperties(moto, {  // primeiro passa o bjeto, depois outro objeto {} com as propriedades dentro, em cada propriedade, abre se outras chaves {}, com os valores dentro, como mostra abaixo
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    // por padrao os valores que estao com os boolean sempre começam com false, entao nao e´necessario reescrever
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto2.rodas = 4;
delete moto2.capacete;
moto2;
// {rodas: 2}

// get e set
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade;
// Velocidade 200


//  Object.getOwnPropertyDescriptors(obj)
Object.getOwnPropertyDescriptors(Array);// Lista com métodos e propriedades e Array
Object.getOwnPropertyDescriptors(Array.prototype);// Lista com métodos e propriedades do protótipo de Array
Object.getOwnPropertyDescriptor(window, 'innerHeight');// Puxa de uma única propriedade


// Object.keys(obj), Object.entries(obj), Object.values(obj)
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carros2 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carros2);
// ['marca', 'ano']
Object.values(carros2);
// ['Ford', 2018]
Object.entries(carros2);
// [['marca', 'Ford'], ['ano', 2018]]

//Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

Object.getOwnPropertyNames(carro);
// ['marca', 'ano']


// Object.getPrototype() e Object.is(obj1, obj2)
const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas); // mostra o prototipo do valor passado
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false   compara se os objetos sao iguais, retorna true ou false
// o resultado e´false pq sao objetos diferentes, caso eu mude frutas1 a frutas2 nao sera impactada


// OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
Object.freeze(carro); // impede que haja alteraçoes no valor das propriedades
Object.seal(carro);  // impede que adicione novas propriedades ao objeto impede tambem que seja deletado uma coisa que ja exuste
Object.preventExtensions(carro); // deixa deletar as propriedades, mas nao deixa adionar novas propriedades

Object.isFrozen(carro); // true   verifica se o objeto esta congelado ou freeze
Object.isSealed(carro); // true
Object.isExtensible(carro); // false


// PROPRIEDADES E MÉTODOS DO PROTÓTIPO
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
const frutas5 = ['Banana', 'Uva'];
frutas5.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

//{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
frutas.hasOwnProperty('map'); // false verifica se essa propriedade é de frutas, ou seja, se ela foi criada junto com frutas
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true


//{}.ISPROTOTYPEOF(VALOR)
//Verifica se é o protótipo do valor passado.
Array.prototype.isPrototypeOf(frutas); // true



//{}.TOSTRING()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
const frutas4 = ['Banana', 'Uva'];
frutas4.toString(); // 'Banana,Uva'
typeof frutas4; // object
Object.prototype.toString.call(frutas4); // [object Array]

const frase4 = 'Uma String';
frase4.toString(); // 'Uma String'
typeof frase4; // string
Object.prototype.toString.call(frase4); // [object String]  serve para verificar que tipo de objeto e

const carro4 = {marca: 'Ford'};
carro4.toString(); // [object Object]
typeof carro4; // object
Object.prototype.toString.call(carro4); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]





