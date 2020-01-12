import React, { Component } from "react";

import api from "../../services/api";

import "./styles.css";
import { withRouter } from "react-router";

class Detail extends Component {
  state = {
    detail: {},
    image: "",
    types: []
  };

  async componentDidMount() {
    const { name } = this.props.match.params;
    const response = await api.get(`pokemon/${name}`);

    const { data } = response;
    const image = data.sprites.front_default;
    const types = data.types;

    this.setState({ detail: data, image, types });
  }

  render() {
    const { detail } = this.state;
    const { image } = this.state;
    const { types } = this.state;

    return (
      <article className="detail">
        <img src={image} alt={image} />
        <label>{detail.name}</label>
        <div className="pokemon-type">
          {types.map(pokeType => (
            <div key={pokeType.type.name}>
              <label>{pokeType.type.name}</label>
            </div>
          ))}
        </div>
      </article>
    );
  }
}

export default withRouter(Detail);

/* 
  WARNING!
  To get params from url after "/detail/" we need to to use withRouter
  beacuse it is a class componten not a functional compontent. 
  Otherwise this.props will undefined and match will not work.
*/
