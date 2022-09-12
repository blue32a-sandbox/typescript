/* keyof型演算子 */
(() => {
  type Person = {
    name: string;
  };
  type PersonKey = keyof Person; // "name"

  // Type '"hoge"' is not assignable to type '"name"'.
  // const p: PersonKey = "hoge";

  const p: PersonKey = "name"; // OK
  console.log(p); // "name"

  type Book = {
    title: string;
    price: number;
    rating: number;
  };
  type BookKey = keyof Book; // "title" | "price" | "rating"
  const b1: BookKey = "title";
  const b2: BookKey = "price";
  const b3: BookKey = "rating";
  console.log(b1, b2, b3);

  // Type '"hoge"' is not assignable to type 'keyof Book'.
  // const b4: BookKey = "hoge";

  type MapLike = { [K: string]: any };
  type MapKeys = keyof MapLike; // string | number
  const m1: MapKeys = "hoge";
  const m2: MapKeys = 12;
  console.log(m1, m2);

  // Type '{}' is not assignable to type 'string | number'.
  // const m3: MapKeys = {};

  type MapLink2 = { [K in "x" | "y" | "z"]: any };
  type MapKeys2 = keyof MapLink2; // "x" | "y" | "z"
  const mm1: MapKeys2 = "x";
  const mm2: MapKeys2 = "y";
  const mm3: MapKeys2 = "z";
  console.log(mm1, mm2, mm3);

  // Type '12' is not assignable to type '"x" | "y" | "z"'.
  // const mm4: MapKeys2 = 12;

  type What = keyof {}; // never;

  type AnyKeys = keyof any; // string | number | symbol
  const a1: AnyKeys = "hoge";
  const a2: AnyKeys = 35;
  const a3: AnyKeys = Symbol("sym");
  console.log(a1, a2, a3);

  // Type 'undefined' is not assignable to type 'string | number | symbol'.
  // const a4: AnyKeys = undefined;
})();
