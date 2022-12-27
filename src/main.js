
import data from './data/pokemon/pokemon.js';
import { filterData, sortData } from './data.js';
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


const selectGeneration = document.getElementById('select-generation')
selectGeneration.addEventListener('change', (event) => {
const data=filterData(dataPokemon , selectGeneration.value)
displeyCard(data)

})


const selectOrder = document.getElementById("select-order");
selectOrder.addEventListener ("change", (event) => {
const ordenData = sortData(dataPokemon,"name", selectOrder.value)
displeyCard(ordenData)

});







