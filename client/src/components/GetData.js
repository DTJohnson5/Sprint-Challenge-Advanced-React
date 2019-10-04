import React, { Component } from "react";
import Participants from "./Participants";
import Form from './Form';

class GetData extends Component {
  state = {
    data: []
  };

  addNewPlayer = (player, country) => {
    const newPlayer = {
      name: player,
      country: country,
      searches: Math.round(Math.random() * (1000 - 1) + 1),
      id: Date.now()
    };
    this.setState({
      data: [newPlayer, ...this.state.data]
    });
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(player => {
        this.setState({ data: player });
        console.log("Get player: ", player);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="pContainer">
          <Form addNewPlayer={this.addNewPlayer} />
        {this.state.data.map(player => {
          return <Participants key={player.id} player={player} />;
        })}
      </div>
    );
  }
}

export default GetData;