/* Shorthand property names */
(() => {
  type Wild = {
    name: string;
    no: number;
    genre: string;
    heigth: number;
    weight: number;
  };

  const name = "pikachu";
  const no = 25;
  const genre = "mouse pokémon";
  const heigth = 0.4;
  const weight = 6.0;

  const pikachu: Wild = {
    name,
    no,
    genre,
    heigth,
    weight,
  };
  console.log(pikachu);
})();
