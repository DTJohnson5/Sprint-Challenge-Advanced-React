import React from "react";

const Participants = props => {
  console.log("players props: ", props);
  return (
    <div>
      <div className="pCard" data-testid="players">
        <h2>Name: {props.player.name}</h2>
        <h3>Searches: {props.player.searches}</h3>
        <h4>Country: {props.player.country}</h4>
      </div>
    </div>
  );
};

export default Participants;
