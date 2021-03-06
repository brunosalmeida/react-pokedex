import React, { Component } from "react";
import {Link} from "react-router-dom";

import api from "../../services/api";
import "./style.css"


export default class Card extends Component {
  state = {
    info: {}
  };

  async componentDidMount() {
    const separator = "https://pokeapi.co/api/v2/";
    let url = this.props.url;
    let search = url.split(separator)[1];
    
    const response = await api.get(search);

    var image = response.data.sprites.front_default;
    var name = response.data.name;

    this.setState({ info: {image, name} });
  }

  render() {
    return (
      <div className="container">
        <img className="pokemon-image" src={this.state.info.image} alt={this.state.info.name}/>
        <Link className="pokemon-name" to={`/details/${this.state.info.name}`}>{this.state.info.name}</Link>
        <button className="catch-button">Catch it!</button>
      </div>
    );
  }
}
