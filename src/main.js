import {
  example
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log("example esto es la data", data);
//mostrar
const cardsContainer = document.getElementById("cardsContainer")
const dataPokemon = data.pokemon
const displeyCard = (d) => {
    cardsContainer.innerHTML = `<div class="cardvacia"></div> `;
  d.forEach(element => {
    const cardPokemon = document.createElement("div")
    cardPokemon.innerHTML += ` <section class= "flex-cont"> <section class= "flex-box">
        <p>${element.num}</p>
        <img src ="${element.img}">
        <p>${element.name}</p>
        </section>
        </section>
        `
    cardsContainer.appendChild(cardPokemon);
  })
}
 displeyCard(dataPokemon)

 //filter
let generationI = dataPokemon.filter ((dataPokemon) => {
    return dataPokemon.num <= 151;
});
let generationII = dataPokemon.filter ((dataPokemon) => {
      return dataPokemon.num > 151;
});


const buttonGenerationI = document.getElementById("Generation I")

/* const buttonGenerationI = document.getElementById("Generation I")
buttonGenerationI.addEventListener('click',()=> {
    displeyCard(generationI)
})
const buttonGenerationII = document.getElementById("Generation II")
buttonGenerationII.addEventListener('click',()=> {
    displeyCard(generationII)
}) */

const selectGeneration = document.getElementById('select-generation')
selectGeneration.addEventListener('change', (event) => {
if (event.target.value === 'gen-1') {
  displeyCard(generationI)
} else if (event.target.value === 'gen-2') {
  displeyCard(generationII)
} else {
  displeyCard(dataPokemon)
}
})

//displeyCard(generationI)
//<div class= "cardsContainer"> ${element.type} ${element.weaknesses}// 
  //${element.special-attack} ${element.next-evolution}</div>//

  const gen = document.getElementById('gen')
  gen.addEventListener('click' , (event) => {
    if (event.target.value === 'gen1') {
      displeyCard(generacionI)
    } else if (event.target.value === 'gen2') {
      displeyCard(generationII)
    }else{
      displeyCard(dataPokemon)
    }
    });

    const gen1 =document.getElementById('gen1')
    gen1.addEventListener('click' , (event) => {
      if (event.target.value === 'gen1') {
        displeyCard(generationI) 
      }else if (event.target.value === 'gen2') {
        displeyCard(generationII)
      }else {
        displeyCard(dataPokemon)
      }
    });
    const gen2 =document.getElementById('gen2')
    gen2.addEventListener('click' , (event) => {
      if (event.target.value === 'gen1') {
        displeyCard(generationI) 
      }else if (event.target.value === 'gen2') {
        displeyCard(generationII)
      }else {
        displeyCard(dataPokemon)
      }
    });