const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift()
console.log(primeiroValor)
// Remova o último valor de comidas e coloque em uma variável
const segundoValor = comidas.pop()
console.log(segundoValor)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe','Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())
// Inverta a ordem dos estudantes
console.log(estudantes.reverse())
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section')
html = html.join('ul')
console.log(html)
html = html.split('div')
html = html.join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const arrayOriginal = carros.slice()
carros.pop()
console.log(carros)
console.log(arrayOriginal)