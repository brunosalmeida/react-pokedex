import React, { Component } from 'react';
import api from "../../services/api";


export default class Main extends Component {
   
    state = {
        pokemon: []
    }

    componentDidMount(){
        this.loadPokemon()
    }
  
    loadPokemon = async () => {

        const response = await api.get("pokemon/"); 
  
        this.setState({pokemon: response.data.results}) 
    };

    render() {
    return (
        <div className="pokemon-list">
            {this.state.pokemon.map((poke, index) =>
               <article key={index} >
                    <h2 >{poke.name}</h2>
                    <h3>{poke.url}</h3>
               </article>
            )}
        </div>
    );
  }
}
