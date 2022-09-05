/* Map<K, V> */
(() => {
  const map = new Map<string, number>();
  console.log(map); // Map(0) {}
  map.set("a", 1);
  console.log(map.get("a")); // 1

  const map2 = new Map<string, number>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  console.log(map2); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

  function doSomething(map: Map<string, number>) {
    console.log(map);
  }

  doSomething(map2);

  const map3 = new Map<any, any>([[null, 1]]);
  console.log(map3.has(null)); // true
  console.log(map3.has(undefined)); // false
  console.log(map3.has(false)); // false

  const map4 = new Map<number, number>();
  map4.set(NaN, 1);
  map4.set(NaN, 2);
  console.log(map4.get(NaN)); // 2
  console.log(map4); // Map(1) { NaN => 2 }

  const map5 = new Map<object, number>();
  map5.set({}, 1);
  map5.set({}, 2);
  console.log(map5.get({})); // undefined
  console.log(map5); // Map(2) { {} => 1, {} => 2 }

  const map6 = new Map<string, number>();
  map6.set("a", 1);
  map6.set("b", 2);
  console.log(map6.get("a")); // 1
  console.log(map6.get("b")); // 2
  map6.set("a", 3);
  console.log(map6.get("a")); // 3
  console.log(map6.get("c")); // undefined
  console.log(map6.get("c") ?? 3); // 3

  console.log(map6.delete("b")); // true
  console.log(map6.get("b")); // undefined
  console.log(map6.delete("b")); // false

  console.log(map6.has("a")); // true
  console.log(map6.has("b")); // false

  map6.set("d", 4);
  map6.set("e", 5);

  console.log(map6.size); // 3

  console.log(...map6.keys()); // a d e
  console.log(...map6.values()); // 3 4 5
  console.log(...map6.entries()); // [ 'a', 3 ] [ 'd', 4 ] [ 'e', 5 ]

  for (const [key, value] of map6) {
    console.log(key, value);
    // a 3
    // d 4
    // e 5
  }

  const map7 = new Map(map6);
  console.log(map7); // Map(3) { 'a' => 3, 'd' => 4, 'e' => 5 }

  map6.clear();
  console.log(map6); // Map(0) {}

  console.log(JSON.stringify(map7)); // {}
  console.log(JSON.stringify(Object.fromEntries(map7))); // {"a":3,"d":4,"e":5}

  console.log(...map7); // [ 'a', 3 ] [ 'd', 4 ] [ 'e', 5 ]

  const obj = { a: 1, b: 2, c: 3 };
  const map8 = new Map(Object.entries(obj));
  console.log(map8); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

  const map9 = new Map<string, any>();
  console.log(map9.toString); // [Function: toString]
  map9.set("toString", 1);
  console.log(map9.toString); // [Function: toString]
})();
