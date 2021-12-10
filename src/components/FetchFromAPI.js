import React from "react";
import "../styling/ComponentStyling.css"

class FetchFromAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then(res => res.json())
            .then(
                (result) => {
                    this.generatePokemon(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    generatePokemon(pokemon) {
        const newPokemon = <Pokemon imageSource = {pokemon.sprites.other['official-artwork'].front_default} name={pokemon.name} key={pokemon.id}/>

        let newCollection = this.state.pokemons;
        newCollection.push(newPokemon);
        this.setState({
            pokemons: newCollection,
        });
    }



    render() {
        return (
            <div>
                <h1>{this.state.pokemons}</h1>
            </div>
        );
    }
}

function Pokemon(props) {
    return (
        <div className="pokemon">
            <p>Name: {props.name} </p>
            {/*  I want a picture here of the pokemon  */}
            <img src={props.imageSource} alt="Pikachu"/>
        </div>
    )
}
export default FetchFromAPI;