import React, { Component } from "react";
import api from "../../services/api";
// import { Container } from './styles';

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
      <div>
        <img src={this.state.info.image}/>
        <h1>{this.state.info.name}</h1>
      </div>
    );
  }
}
