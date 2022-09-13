/* Omit<T, Keys> */
(() => {
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
  type Optional = "age" | "address" | "nationality" | "createdAt" | "updatedAt";
  type Person = Omit<User, Optional>;
  const p: Person = {
    surname: "Martin",
    middleName: "Cecil",
    givenName: "Robert",
  };
  console.log(p);

  // Omitの注意点
  // "createdat"と"updatedat"のタイポは検出されない
  type TypoOptional = "createdat" | "updatedat" | "age" | "address" | "nationality";
  type Person2 = Omit<User, TypoOptional>;
  const p2: Person2 = {
    surname: "Martin",
    middleName: "Cecil",
    givenName: "Robert",
    createdAt: "2022-09-13 09:12:39", // 除去されないので必要
    updatedAt: "2022-09-13 13:07:20", // 除去されないので必要
  };
  console.log(p2);
})();
