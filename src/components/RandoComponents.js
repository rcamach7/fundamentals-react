import React from "react";
import "../styling/ComponentStyling.css"

class RandoComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedPokemon: [],
        }
        this.generatePokemon = this.generatePokemon.bind(this);
        this.renderPokemon = this.renderPokemon.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
    }

    generatePokemon() {
        let myPokemons = ["Pickachu", "Charmander", "Tortoise"];
        myPokemons = this.shuffleArray(myPokemons);

        let pokemonComponents = [];
        for (let i = 0; i < myPokemons.length; i++) {
            pokemonComponents.push(this.renderPokemon(myPokemons[i]));
        }
        return pokemonComponents;
    }

    renderPokemon(name) {
        return (
            <Pokemon className="pokemon" name={name}>
            </Pokemon>
        )
    }

    shuffleArray(original) {
        let array = original;
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    render() {
        return (
            <div className="RandoComponents">
                {this.generatePokemon()}
            </div>
        );
    }
}

const Pokemon = (props) => {
    return (
        <div className="pokemon">
            {props.name}
        </div>
    )
}

export default RandoComponents;