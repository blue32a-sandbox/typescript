/* Required<T> */
(() => {
  type Person = {
    surname: string;
    middleName?: string;
    givenName: string;
  };
  const p1: Person = {
    surname: "Schwarzenegger",
    middleName: "Alois",
    givenName: "Arnold",
  };
  const p2: Person = {
    surname: "Cage",
    givenName: "Nicolas",
  };
  console.log(p1);
  console.log(p2);

  type RequiredPerson = Required<Person>;
  const rp1: RequiredPerson = {
    surname: "Schwarzenegger",
    middleName: "Alois",
    givenName: "Arnold",
  };
  console.log(rp1);

  // Property 'middleName' is missing in type '{ surname: string; givenName: string; }'
  // but required in type 'Required<Person>'.
  // const rp2: RequiredPerson = {
  //   surname: "Cage",
  //   givenName: "Nicolas",
  // };
})();
