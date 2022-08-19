/* 配列の分割代入 (destructuring assignment) */
(() => {
  (() => {
    // 配列の分割代入
    const oneToFive = [1, 2, 3, 4, 5];
    const [one, two, three, four, five , six] = oneToFive;
    console.log(one, two, three, four, five); // 1, 2, 3, 4, 5
    console.log(six); // undefined
    const num: number | undefined = one;
    console.log(num); // 1
  })();

  (() => {
    // ネストした配列の分割代入
    const twoByTwo = [
      [1, 2],
      [3, 4],
    ];
    // Type 'number[] | undefined' must have a '[Symbol.iterator]()' method that returns an iterator.
    // const [[one, two], [three]] = twoByTwo;
    // console.log(one); // 1
    // console.log(two); // 2
    // console.log(three); // 3
  })();

  (() => {
    // 途中要素の分割代入
    const oneToFive = [1, 2, 3, 4, 5];
    const [, , , four, five] = oneToFive;
    console.log(four); // 4
    console.log(five); // 5
  })();
})();
