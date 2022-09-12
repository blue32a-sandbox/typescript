/* Readonly<T> */
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
  p1.middleName = undefined;
  console.log(p1);

  type ReadonlyPerson = Readonly<Person>;
  const rp1: ReadonlyPerson = {
    surname: "Schwarzenegger",
    middleName: "Alois",
    givenName: "Arnold",
  };

  // Cannot assign to 'middleName' because it is a read-only property.
  // rp1.middleName = undefined;

  // Readonlyの効果は再帰的ではない
  type SomeType = {
    hoge: {
      fuga: string;
    }
  };
  type RequiredSomeType = Readonly<SomeType>;
  const rs: RequiredSomeType = {
    hoge: {
      fuga: "fuga"
    }
  };
  console.log(rs);

  rs.hoge.fuga = ""; // 上書き可能
  console.log(rs);
})();
