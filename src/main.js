import {
  example
} from './data.js';
import data from './data/pokemon/pokemon.js';
//console.log("example esto es la data", data);//

//mostrar
const cardsContainer = document.getElementById("cardsContainer")
const dataPokemon = data.pokemon
const displeyCard = (d) => {
    cardsContainer.innerHTML = `<div class="cardvacia"></div> `;
  d.forEach(element => {
    //console.log(element);
    const cardPokemon = document.createElement("div")
    cardPokemon.innerHTML += `
     <section class= "flex-cont"> 
     <a  href="#${element.num}">
      <section class= "flex-box">
        <p>${element.num}</p>
        <img src ="${element.img}">
        <p>${element.name}</p>
      </section>
      </a>
      </section>
    
      <section id="${element.num}" class="modalDialog">
      <section>
        <a href="#close" title="Close" class="close">X</a>
        <h2>${element.name}</h2>
        <h3>${element.num}</h3>
        <img src ="${element.img}">
        <h4>Pokemon Type : ${element.type}</h4>
        <h4>Generation num : ${element.generation.num}</h4>
        <h4>Weaknesses : ${element.weaknesses}</h4>
        <article><h4>About Pokemon :</h4> ${element.about}</article>
     
       
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

//order

document.getElementById("select-order").addEventListener("change", function(event) {
console.log(event.target.value)
 console.log(dataPokemon)
})


let ejemplo = [{id:1, nombre:"a"}, {id:2, nombre:"c"}, {id:3, nombre:"b"}]

console.log(ejemplo.sort( (a,b)=>{ 
  if(a.nombre > b.nombre){
    return 1
  }
  if(a.nombre < b.nombre){
    return -1
  }
  return 0
} ))