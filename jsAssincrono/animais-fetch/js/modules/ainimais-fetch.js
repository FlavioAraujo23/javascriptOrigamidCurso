import initAnimaNumeros from "./animaNumeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais() {
    const animaisResponse = await fetch('http://127.0.0.1:5500/jsAssincrono/animais-fetch/js/api/animais.json');
    const animaisJSON = await animaisResponse.json();
    console.log(animaisJSON)
    const numerosGrid = document.querySelector('.numeros-grid');

    animaisJSON.forEach(animal => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);  // irá adionar no filho a div, ou seja, um atras do outro
    });
    initAnimaNumeros();
  }

  function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    console.log(div)
    return div;
    
  }

  fetchAnimais()
}