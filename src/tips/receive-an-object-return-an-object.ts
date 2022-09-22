/* オブジェクトで受け、オブジェクトを返す (RORO) */
(() => {
  type User = {
    //...
  };
  type UserInfo = {
    name?: string;
    age?: number;
    country?: string;
    nationality?: string;
    isVip?: boolean;
    isRetired?: boolean;
  };

  function findUser({ name, age, country, isRetired = false }: UserInfo): User {
    console.log(name, age, country, isRetired);
    return {};
  }

  function findUserByName({ name }: UserInfo): User {
    console.log(name);
    return {};
  }

  findUser({
    name: "Jon",
    age: 35,
    country: "United States",
    nationality: "American",
    isVip: true,
    isRetired: true,
  });
  findUser({
    name: "Tom",
  });
  findUserByName({
    name: "Jon",
    age: 35,
    country: "United States",
    nationality: "American",
    isVip: true,
    isRetired: true,
  });
  findUserByName({});
})();
