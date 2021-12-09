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
        this.handleClick = this.handleClick.bind(this);
    }

    generatePokemon() {
        let myPokemons = ["Pickachu", "Charmander", "Tortoise"];
        myPokemons = this.shuffleArray(myPokemons);

        let pokemonComponents = [];
        for (let i = 0; i < myPokemons.length; i++) {
            pokemonComponents.push(this.renderPokemon(myPokemons[i], i));
        }
        return pokemonComponents;
    }

    handleClick(name) {
        // TODO: Add this name 9since it was clicked) into our clicked array stored inside our state. This way we can track who's been clicked by name
        // TODO: After, evaluate each name, see if it exists in the the state as clicked, and if so, send alert letting user know.
        // TODO: After, using lifecycle methods, make sure the pokemons are shuffled and re-displayed after every click.
        alert("Hello, my name is " + name);
    }

    renderPokemon(name, key) {
        return (
            <Pokemon
                className="pokemon" name={name}
                onClick = {() => this.handleClick(name)}
                key = {key}
            >
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
        <div className="pokemon" onClick={props.onClick}>
            {props.name}
        </div>
    )
}

export default RandoComponents;