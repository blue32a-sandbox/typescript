import { updateMethodSignature } from "typescript";

/* 配列の破壊的操作 */
(() => {
  (() => {
    // 非破壊的なメソッド
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const all = nums1.concat(nums2);
    console.log(nums1); // [ 1, 2 ]
    console.log(nums2); // [ 3, 4 ]
    console.log(all); // [ 1, 2, 3, 4 ]
  })();
  (() => {
    // 破壊的なメソッド
    const nums = [1, 2];
    nums.push(3);
    console.log(nums); // [ 1, 2, 3 ]
  })();
  (() => {
    // 特に要注意な破壊的なメソッド
    const nums = [1, 2, 3];
    const newNums = nums.reverse();
    console.log(nums); // [ 3, 2, 1 ]
    console.log(newNums); // [ 3, 2, 1 ]
  })();
  (() => {
    // 破壊的なメソッドを安全に使う方法
    const original = [1, 2, 3];
    const copy = [...original];
    copy.reverse();
    console.log(original); // [ 1, 2, 3 ]
    console.log(copy); // [ 3, 2, 1 ]

    const reversed = [...original].reverse();
    console.log(reversed); // [ 3, 2, 1 ]
  })();
})();
