//Regexp Seleção

// REGEXR
// https://regexr.com/

//REGULAR EXPRESSION
// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

// Procura: a
const padraoRegexp = /a/;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'B');
// JBvaScript

//Praticamente todas as linguagens possuem uma implementação de regexp


// LITERAL
// Utilizar um caracter literal irá realizar uma busca específica deste caracter.

// Procura: J seguido de a, v e a
const regexp = /Java/;

'JavaScript'.replace(regexp, 'Type');
// TypeScript


// FLAG: G
// As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

// Procura: Todo a
const regexp2 = /a/g;  // por padrão o /a seleciona o primeiro a que achar, com a flag g, irão ser selecionados todos a´s

'JavaScript'.replace(regexp2, 'i');
// JiviScript


// FLAG: I
// Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

// Procura: Todo PE, Pe, pE e pe
const regexp3 = /Pe/gi;  // seleciona todos Pe por causa do g, e tanto minusculo e maisuculos por conta do i

'Perdeu perdido'.replace(regexp, 'Ba');
// Bardeu Bardido


// CHARACTER CLASS
// Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

// Procura: Todo a, A, i, I
const regexp4 = /[ai]/gi; // seleciona ou um a ou um i, o g faz selecionar todo a ou i, o i faz que o valor selecionado seja tanto maiusculo quanto minusculo

'JavaScript'.replace(regexp4, 'u');
// JuvuScrupt


// CHARACTER CLASS E ESPECIAIS
// Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

// Procura: - ou .
const regexp5 = /[-.]/g;  // seleciona todos - e .,outro metodo de selecionar é utilizando \. ele ira selecionar todos os pontos. 
// caso não seja passado os [] ou \, somente o . ele ira selecionar todos os valores da string

'111222333-44'.replace(regexp5, '');
//11122233344


// UM OU OUTRO
// Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexp6 = /Bra[sz]il/g;  // seleciona tanto Brasil, ou, Brazil

'Brasil é com z: Brazil'.replace(regexp6, 'Prazer');
// Prazer é com z: Prazer



// DE A À Z
// O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

// Busca por itens de a à z
const regexp7 = /[a-z]/g;

'JavaScript é a linguagem.'.replace(regexp7, '0');
// J000S00000 é0000000000.

// Busca por itens de a à z e A à Z
const regexp8 = /[a-zA-Z]/g; // busca de a á z tanto maiusculo quanto minusculo, não é necessario colocar um espaço entre as busca, se for colocado ele irar entender que aquilo é um caracter a ser buscado

'JavaScript é a linguagem.'.replace(regexp8, '1');
//1111111111 é1111111111.

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;

'123333333-33'.replace(regexpNumero, 'X');
// XXX.XXX.XXX-XX



// NEGAR
// Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
// Procura: tudo que não estiver entre a e z
const regexp9 = /[^a-z]/g; // selecione tudo menos a-z, ou seja, seleciona tudo que não seja valores de a á z

'Brasil é com z: Brazil'.replace(regexp9, ' ');
// rasil   com z   razil 


// PONTO
// O ponto . irá selecionar qualquer caracter, menos quebras de linha.

// Procura: todos os caracteres menos quebra de linha
const regexp10 = /./g;

'JavaScript é a linguagem.'.replace(regexp10, '0');
// 0000000000000000000000000


// ESCAPAR ESPECIAIS
// Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

// Procura: todos os pontos
const regexp12 = /\./g;
const regexpAlternativa = /[.]/g;

'999222222.11'.replace(regexp12, '-');
//999222222-11


// WORD
// O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

// Procura: todos os alfanuméricos
const regexp13 = /\w/g;

'Guarda-chuva R$ 23,00.'.replace(regexp13, '-');
// ------------ -$ --,--.


// NOT WORD
// O \W irá selecionar tudo o que não for caracter alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_].

// Procura: o que não for caracter alfanuméricos
const regexp14 = /\W/g;

'Guarda-chuva R$ 23,00.'.replace(regexp14, '-');
// Guarda-chuva-R--23-00-


// DIGIT
// O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].
// Procura: todos os dígitos
const regexp15 = /\d/g;

'+552122222222'.replace(regexp15, 'X');
// +XX (XX) XXXX-XXXX.


// NOT DIGIT
// O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].
// Procura: o que não for dígito
const regexp16 = /\D/g;

'+552122222222'.replace(regexp16, '');
//552122222222



// WHITESPACE
// O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.
// Procura: espaços em branco
const regexp17 = /\s/g;

'+552122222222  '.replace(regexp17, '');
// +552122222222


// NOT WHITESPACE
// O \S irá selecionar qualquer caracter que não for espaço em branco.
// Procura: o que não for espaço em branco
const regexp18 = /\S/g;

'+552122222222  '.replace(regexp18, '');
// XXX XXXX XXXXX  XXXX  
// /[\s\S]/g irá selecionar tudo.


// QUANTIFICADOR
// É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.

// Procura: 4 a's seguidos
const regexp19 = /aaaa/g; // seleciona o caracter a apos a, ou seja, seleciona cada um dos a seguido
const regexpAlt = /a{4}/g; // com o quantificador {} é possivel escolher os numeros do caracter a ser selecionado

'Vaaaai ali por favor.'.replace(regexp, 'a');
// Vai ali por favor.  


// QUANTIFICADOR MIN E MAX
// Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.
// Procura: dígitos seguidos de 2 à 3
const regexp20 = /\d{2,3}/g;

'222333222.42'.replace(regexp20, 'X');
// X.X.X.X

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;

'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X');
// X X X é X



// MAIS +
// O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.
// Procura: dígitos em ocorrência de um ou mais
const regexpmais = /\d+/g;
'222333222.42'.replace(regexpmais, 'X');
// X.X.X.X
// Procura: Começa com d, seguido por uma ou mais letras.
const regexpLetras2 = /d\w+/g;
'Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras2, 'X');
// Dígitos, X, X, Dito, d


// ASTERISCO *
// O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.
// Procura: Começa com d, seguido por zero ou mais letras.
const regexpAsterisco = /d\w*/g;

'Dígitos, dados, desenhos, Dito, d'.replace(regexpAsterisco, 'X');
// Dígitos, X, X, Dito, X


// OPCIONAL ?
// O sinal ? significa que o caracter é opcional, pode ou não existir.
// Procura: Por regex com p opcional
const regexpOpcional = /regexp?/g;  // o caracter que está antes do ? é opcional, ou seja, a letra p é opcional

'Qual é o certo, regexp ou regex?'.replace(regexpOpcional, 'Regular Expression');
// Qual é o certo, Regular Expression ou Regular Expression?


// ALTERNADO |
// O sinal | irá selecionar um ou outro. java|php
// Procura: java ou php (case insensitive)
const regexpAlternado = /java|php/gi;
'PHP e Java são linguagens diferentes'.replace(regexpAlternado, 'X');
// X e X são linguagens diferente



// WORD BOUNDARY \B
// O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.
// Procura: java (case insensitive)
const regexp25 = /java/gi;
'Java não é JavaScript.'.replace(regexp25, 'X');
// X não é XScript.

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
'Java não é JavaScript.'.replace(regexpBoundary, 'X');
// X não é JavaScript.

// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito = /\b\d+\b/gi;
'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X');
// O Restaurante25 na Rua X, custa R$ X,X

'11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');
// 11_22 X-X XéX 77e88



// NOT WORD BOUNDARY \B
// É o contrário do \b.
const regexpDigito2 = /\B\d+\B/gi;
'11_22 33-44 55é66 77e88'.replace(regexpDigito2, 'X');
// 1X_X2 33-44 55é66 7XeX8


// ANCHOR BEGINNING
// Com o ^ é possível informar que a busca deve ser iniciada no início da linha.
// Procura: sequência de alfanuméricos
// no início da linha.
const regexp26 = /^\w+/g;   //ao usar ^, quer dizer que quero que a linha inicie com ...

`andre@origamid.com
contato@origamid.com`.replace(regexp26, 'X');
// X@origamid.com
// contato@origamid.com



// ANCHOR END
// Com o $ é possível informar que a busca deve ser iniciada no final da linha.
// Procura: sequência de alfanuméricos
// no final da linha.
const regexp27 = /\w+$/g; // seleciona o ultimo valor da ultima linha

`andre@origamid.com
contato@origamid.com`.replace(regexp27, 'X');
// andre@origamid.com
// contato@origamid.X



// FLAG: M
// Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.
// Procura: sequência de alfanuméricos
// no final da linha.
const regexp28 = /\w+$/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexp28, 'X');
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
const regexp29 = /^\w+/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexp29, 'X');
// X@origamid.com
// X@origamid.com



// LINE FEED \N
// O \n irá selecionar o final de uma linha, quando criamos uma nova.
const regexp230 = /\n/g;  // \n significa que irá selecionar o enter
// o \n também pode ser usado em strings caso deseje pular para a proxima linha
`andre@origamid.com\ncontato@origamid.com`.replace(regexp30, '---');
// andre@origamid.com---contato@origamid.com

`andre@origamid.com
contato@origamid.com`.replace(regexp30, 'X');
// andre@origamid.com---contato@origamid.com



// UNICODE \U
// O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.

// Procura: @ ou ©
const regexp31 = /\u0040|\u00A9/g;

'andre@origamid.com ©'.replace(regexp31, '---');
// andre---origamid.com ---