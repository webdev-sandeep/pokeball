import React from "react";

const PokemonCard = ({ image, rank, name, type }) => {
  return (
    <div className="pokemon-card">
      <div className="img-container">
        <img src={image} alt="pokemon" />
      </div>
      <span className="rank">#{rank}</span>
      <h2 className="name">{name}</h2>
      <p className="type-container">
        Type : <span className="type">{type}</span>
      </p>
    </div>
  );
};

export default PokemonCard;
