import PokemonCard from "./components/PokemonCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./components/Shimmer.jsx";
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          response?.results?.map((item) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
              .then((response) => response.json())
              .then((pokemonData) => {
                // Get the front sprite URL from the 'sprites' property and display the image
                const types = pokemonData?.types?.map(
                  (type) => type?.type?.name
                );
                const spriteUrl = pokemonData.sprites.front_default;
                setPokemonData((prev) => [
                  ...prev,
                  { name: item.name, url: spriteUrl, types: types },
                ]);
              })
          );
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);
  // const pokemon = [
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  //   {
  //     number: "001",
  //     name: "Bulbasaur",
  //     type: ["grass", "water"],
  //     ThumbnailImage:
  //       "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
  //   },
  // ];
  // if (pokemonData?.length <= 0) {
  //   return <Shimmer />;
  // }
  return (
    <div className="app">
      <h1 className="heading">Pokebase</h1>
      <div className="main">
        {pokemonData?.map((Pokemon, index) => {
          const { name, url: image, types } = Pokemon;
          return (
            <PokemonCard
              rank={index + 1}
              name={name}
              type={types[0]}
              image={image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
