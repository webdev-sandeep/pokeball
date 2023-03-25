import React from "react";

const Shimmer = () => {
  return (
    <div className="app">
      <h1 className="heading">Pokebase</h1>
      <div className="main">
        {[...Array(20).keys()].map((key) => {
          return <div className="shimmer-card" key={key} />;
        })}
      </div>
    </div>
  );
};

export default Shimmer;
