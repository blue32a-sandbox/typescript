/* インターセクション型 (intersection type) */
(() => {
  (() => {
    type TwoDimensionalPoint = {
      x: number;
      y: number;
    };
    type Z = {
      z: number;
    };
    type ThreeDimensinalPoint = TwoDimensionalPoint & Z;
    const p: ThreeDimensinalPoint = {
      x: 0,
      y: 1,
      z: 2,
    };
    console.log(p);
  })();

  (() => {
    // プリミティブ型のインターセクション型
    type Never = string & number;
    // Type 'string' is not assignable to type 'never'.
    // const n: Never = "2";
  })();

  (() => {
    // インターセクション型を使いこなす
    type Mandatory = Required<{
      id: string;
      active: boolean;
      balance: number;
      surname: string;
      givenName: string;
      email: string;
    }>;
    type Optional = Partial<{
      index: number;
      photo: string;
      age: number;
      company: string;
      phoneNumber: string;
      address: string;
    }>;
    type Parameter = Mandatory & Optional;
    const param: Parameter = {
      id: "00001",
      active: true,
      balance: 10,
      surname: "hoge",
      givenName: "Hoge",
      email: "hoge@mail.example.com",
      age: 20,
    };
    console.log(param);
  })();
})();
