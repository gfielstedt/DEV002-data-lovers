
import data from './data/pokemon/pokemon.js';
import { filterData, sortData, filterType } from './data.js';
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

const displayList = document.getElementById("tablaListaPorcentaje")
  tablaListaPorcentaje = document.createElement("table")
;
const displayEstadistica = ()=> {
  displayList.innerHTML = ` `;


};


  


//compute
const computeStats = (poke) => {
const totalDePokemon = poke.length
const totalPokeAgua = ((filterType("water",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeTierra = ((filterType("ground",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeRoca = ((filterType("rock",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeAcero = ((filterType("steel",poke ).length * 100) / totalDePokemon).toFixed(4);
const totalPokeFuego = ((filterType("fire",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeElectrico = ((filterType("electric",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeHielo = ((filterType("ice",poke ).length * 100) / totalDePokemon).toFixed(4);
const totalPokeHierba = ((filterType("grass",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeVenenoso = ((filterType("poison",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeSiniestro = ((filterType("dark",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokePsiquico = ((filterType("psychic",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeFnatasma = ((filterType("ghost",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeLucha = ((filterType("fighting",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeNormal = ((filterType("normal",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeBicho = ((filterType("bug",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeVolador = ((filterType("flying",poke ).length * 100) / totalDePokemon).toFixed(4);
const totalPokeHada = ((filterType("fairy",poke ).length * 100) / totalDePokemon).toFixed(2);
const totalPokeDragon = ((filterType("dragon",poke ).length * 100) / totalDePokemon).toFixed(2);

console.log("aquiTierra",totalPokeTierra)
console.log("aquiAgua",totalPokeAgua)
console.log("aquiRoca",totalPokeRoca)
console.log("aquiSteel",totalPokeAcero)
console.log("aquiFire",totalPokeFuego)
console.log("aquiElectric",totalPokeElectrico)
console.log("aquiIce",totalPokeHielo)
console.log("aquiGrass",totalPokeHierba)
console.log("aquiPoison",totalPokeVenenoso)
console.log("aquiDark",totalPokeSiniestro)
console.log("aquiPsychic",totalPokePsiquico)
console.log("aquiGhost",totalPokeFnatasma)
console.log("aquiFighting",totalPokeLucha)
console.log("aquiNormal",totalPokeNormal)
console.log("aquiBug",totalPokeBicho)
console.log("aquiFlying",totalPokeVolador)
console.log("aquiFairy",totalPokeHada)
console.log("aquiDragon",totalPokeDragon)
};




computeStats (dataPokemon)




