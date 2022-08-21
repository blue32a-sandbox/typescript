/* constアサーション「as const」 (const assertion) */
(() => {
  const pikachu = {
    name: "pikachu",
    no: 25,
    genre: "mouse pokémon",
    height: 0.4,
    weight: 6.0,
  } as const;

  // Cannot assign to 'name' because it is a read-only property.
  // pikachu.name = "raichu";

  console.log(pikachu);

  const america = {
    name: "North American Continent",
    canada: {
      name: "Republic of Canada",
      capitalCity: "Ottawa",
    },
    us: {
      name: "United States of America",
      capitalCity: "Washington, D.C.",
    },
    mexico: {
      name: "United Mexican States",
      capitalCity: "Mexico City",
    },
  } as const;

  // Cannot assign to 'name' because it is a read-only property.
  // america.name = "African Continent";

  // Cannot assign to 'canada' because it is a read-only property.
  // america.canada = {
  //   name: "Republic of Côte d'Ivoire",
  //   capitalCity: "Yamoussoukro",
  // };

  // Cannot assign to 'name' because it is a read-only property.
  // america.canada.name = "Republic of Côte d'Ivoire";

  // Cannot assign to 'capitalCity' because it is a read-only property.
  // america.canada.capitalCity = "Yamoussoukro";

  console.log(america);
})();
