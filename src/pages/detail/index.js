import React, { Component } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

export default class Detail extends Component {
  state = {
    pokemon: {}
  };

  async componentDidMount() {
    let { id } = await useParams();

    console.log(id);

    // var response = await api.get()
  }

  render() {
    return (
      <div>
        <h1>TEste</h1>
      </div>
    );
  }
}
