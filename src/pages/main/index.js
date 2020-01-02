import React, { Component } from "react";
import api from "../../services/api";
import Card from "../../components/Card";
import "./style.css";
export default class Main extends Component {
  state = {
    pokemon: [],
    pageInfo: {}
  };

  componentDidMount() {
    this.loadPokemon();
  }

  loadPokemon = async (url = "pokemon/") => {
    
    const response = await api.get(url);
    
    const { results, ...pageInfo } = response.data;
    
    console.log(this.state.pokemon);


    this.setState({ pokemon: results, pageInfo });
  };

  previous = () => {};
  next = () => {
    const { pageInfo } = this.state;

    const separator = "https://pokeapi.co/api/v2/";
    const url = pageInfo.next.split(separator)[1];

    this.loadPokemon(url);
  };

  render() {
    return (
      <>
        <div className="pokemon-list">
          {this.state.pokemon.map((poke, index) => (
            
            <div key={index} className="item">
              <Card key={index} url={poke.url} />
            </div>
          ))}
        </div>
        <div className="actions">
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button>
        </div>
      </>
    );
  }
}
