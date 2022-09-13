/* Pick<T, Keys> */
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
  type Person = Pick<User, "surname" | "middleName" | "givenName">;
  const p: Person = {
    surname: "Schwarzenegger",
    middleName: "Alois",
    givenName: "Arnold",
  };
  console.log(p);

  // Pickで型の変更に追従する例
  type Book = {
    id: number;
    title: string;
    // author: string;
    author: Person;
    createdAt: Date;
    updatedAt: Date;
  };
  // type BookInputDate = {
  //   title: string;
  //   author: string;
  // };
  type BookInputDate = Pick<Book, "title" | "author">;
  const b: BookInputDate = {
    title: "Clean Architecture",
    author: {
      surname: "Martin",
      middleName: "Cecil",
      givenName: "Robert",
    },
  };
  console.log(b);
})();
