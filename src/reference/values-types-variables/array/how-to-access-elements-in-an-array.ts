/* 配列要素へのアクセス */
(() => {
  const abc: string[] = ["a", "b", "c"];

  (() => {
    // noUncheckedIndexedAccessがfalse
    // let character: string = abc[0];
    // console.log(character); // "a"
    // character = abc[100];
    // console.log(character); // undefined

    // // Cannot read properties of undefined (reading 'toUpperCase')
    // console.log(character.toUpperCase());
  })();

  (() => {
    // noUncheckedIndexedAccessがtrue
    let character: string | undefined = abc[0];
    console.log(character); // "a"
    if (typeof character === "string") {
      console.log(character.toUpperCase()); // "A"
    }
    character = abc[100];
    console.log(character); // undefined
    if (typeof character === "string") {
      console.log(character.toUpperCase());
    }
  })();
})();
