const cpfs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '')  // limpa tudo que for digito
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4') // seleciona todos os grupos de captura e faz um replace para adicionar os pontos e por fim o traço
}

const formatarCPF = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF)
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements)
  const cpfsFormatados = formatarCPF(cpfs)

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index]
  })
}

substituiCPFS(cpfs)