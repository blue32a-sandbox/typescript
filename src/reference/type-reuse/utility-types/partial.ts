/* Partial<T> */
(() => {
  type Person = {
    surname: string;
    middleName?: string;
    givenName: string;
  };
  type PartialPerson = Partial<Person>;
  const pp1: PartialPerson = {};
  const pp2: PartialPerson = { surname: "Schwarzenegger" };
  const pp3: PartialPerson = { middleName: "Alois" };
  const pp4: PartialPerson = { givenName: "Arnold" };
  console.log(pp1, pp2, pp3, pp4);

  // Partialを用いたOptions Objectパターンの例
  type User = {
    surname: string;
    middleName?: string;
    givenName: string;
    age: number;
    address?: string;
    nationality: string;
    createdAt: string;
    updatedAt: string;
  };
  type FindUserArgs = Partial<User>;
  function findUsers({
    surname,
    middleName,
    givenName,
    age,
    address,
    nationality,
  }: FindUserArgs = {}) {
    console.log({surname, middleName, givenName, age, address, nationality});
  }
  findUsers();
  findUsers({ age: 22 });
  findUsers({ surname: "Schwarzenegger", nationality: "Americans" });
})();
