// Number
const ano = 2018;
const preco = new Number(99);

// Number.isNaN() e Number.isInteger()
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20);  // true
Number.isInteger(23.6); // false

// Number.parseFloat() e Number.parseint()
parseFloat('99.50');  // mesma funcao sem o number
Number.parseFloat('99.50');  // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100')  // NaN

parseInt('99.50', 10); // 99
parseInt(5.345554344554334, 10); // 5
Number.parseInt('100 Reais', 10); // 100
// Float possui decimal, Integer nao

// n.toFixed(decimais) retona uma string para ser int bsta por o + na frente
const valor = 2.99;
+valor.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.45

const valor2 = 1499.49;
valor2.toFixed() // 1499

// n.toString(radix)
preco.toString(10); // '2.99'

// n.toLocaleString(lang, options)
const preco2 = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) // $ 59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49


// Math
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns
Math.PI  // 3.14159
Math.E  // 2.718
Math.LN10  // 2.363

// Math.abs(), Math.ceil(), Math.floor() e Math.round()
Math.abs(-5.5);  // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3)  // 5
Math.floor(4.8334); // 4
Math.floor(4.3)  // 4
Math.round(4.8334) // 5
Math.round(4.3) // 4

// Math.max(), Math.min() e Math.random()
Math.max(5,3,10,42,2);  // 42
Math.min(5,3,10,42,2); // 2

Math.random();  // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// numero random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;