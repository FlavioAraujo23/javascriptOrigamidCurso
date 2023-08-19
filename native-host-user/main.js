//Native
// construtores de objetos nativos
Object
String
Array
Function

// host
// objetos do browser
// ou seja so existem no dom, ja no node.js eles nao existem
NodeList
HTMLCollection
Element


// user
const Pessoa = {
  nome: 'flavio',        // qualquer objeto definidos por voce ou importados atraves de uma biblioteca
}


// verificar se existe
if (typeof Array.from !== "undefined"){};
if(typeof NodeList !== "undefined"){};   // caso nao seja undefined faça isso


// Liste 5 objetos nativos
Array
String
Number
Boolean
Function
// Liste 5 objetos do browser
HTMLCollection
NodeList
Document
Window
history

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
webkitSpeechRecognition
webkitRequestFullScreen()