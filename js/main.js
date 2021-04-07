"use strict";

const json_url = './pokemon.json'
async function getPokemon(){
    const respuesta = await fetch(json_url);
    const datos = await respuesta.json();
    console.log(datos);
    const nombrePokemon = document.getElementById("nombre-pokemon")
    const numeroPokemon = document.getElementById("numero-pokemon");
    const LevelPokemon = document.getElementById("nivel-pokemon");
    const typePokemon = document.getElementById("type-pokemon");
    const habilityPokemon = document.getElementById("hability-pokemon");
    const heightPokemon = document.getElementById("height-pokemon");
    const weightPokemon = document.getElementById("weight-pokemon");

    nombrePokemon.innerHTML = datos.nombre;
    numeroPokemon.innerHTML = datos.atributos.numero;
    LevelPokemon.innerHTML = datos.atributos.level;
    typePokemon.innerHTML = datos.atributos.type;
    habilityPokemon.innerHTML = datos.atributos.hability;
    heightPokemon.innerHTML = datos.atributos.height;
    weightPokemon.innerHTML = datos.atributos.weight;

}

getPokemon();