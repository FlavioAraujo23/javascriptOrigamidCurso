// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
  let valorAtualTaxa = 0;
  let valorAtualRecebimento = 0;
 transacoes.forEach((item, index) => {

  if (transacoes[index].descricao.includes('Taxa')){
    const valores = +transacoes[index].valor.slice(2)
    valorAtualTaxa += valores
    
  } else if (transacoes[index].descricao.includes('Recebimento'))  {
    const valores = +transacoes[index].valor.slice(2)
    valorAtualRecebimento += valores
  
  }
 })
 console.log('valor total de taxa R$ ' + valorAtualTaxa)
 console.log('valor total de recebimento R$ ' + valorAtualRecebimento)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const t1 = transportes.split(';');
console.log(t1.join(' '))


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
let newHtml = html.replace(/['span']+/g, 'a');
console.log(newHtml)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


