/* 読み取り専用の配列 (readonly array) */
(() => {
  (() => {
    // readonly T[]
    const nums: readonly number[] = [1, 2, 3];
    console.log(nums); // [1, 2, 3]
    console.log(nums[0]); // 1

    // Index signature in type 'readonly number[]' only permits reading.
    // nums[0] = 4;

    // Property 'push' does not exist on type 'readonly number[]'.
    // nums.push(4);
  })();

  (() => {
    // ReadonlyArray<T>
    const nums: ReadonlyArray<number> = [1, 2, 3];
    console.log(nums); // [1, 2, 3]
    console.log(nums[0]); // 1

    // Index signature in type 'readonly number[]' only permits reading.
    // nums[0] = 4;

    // Property 'push' does not exist on type 'readonly number[]'.
    // nums.push(4);
  })();
})();
