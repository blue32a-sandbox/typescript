/* Record<Keys, Type> */
(() => {
  type StringNumber = Record<string, number>;
  const v: StringNumber = { a: 1, b: 2, c: 3 };
  console.log(v);

  type Person = Record<"firstName" | "middleName" | "lastName", string>;
  const person: Person = {
    firstName: "Robert",
    middleName: "Cecil",
    lastName: "Martin",
  };
  console.log(person);
})();
