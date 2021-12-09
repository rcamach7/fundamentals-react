import React from "react";
import "../styling/ComponentStyling.css"

class RandoComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedPokemon: [],
            pokemons: this.generatePokemon(),
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
        // TODO: After, using lifecycle methods, make sure the pokemons are shuffled and re-displayed after every click.
        const curClicked = this.state.clickedPokemon.slice();

        let indexOfPokemon = curClicked.indexOf(name);
        if (indexOfPokemon === -1) {
            alert("has not been clicked before");
            curClicked.push(name);
        } else {
            alert("has been clicked")
        }

        // Update state with Pokémon that have been clicked
        this.setState({
            clickedPokemon: curClicked,
            pokemons: this.generatePokemon(),
        })
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
                {this.state.pokemons}
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