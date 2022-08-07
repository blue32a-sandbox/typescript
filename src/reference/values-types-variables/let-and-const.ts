/* let */
let x = 1;
x = 2;
console.log(x); // 2

/* const */
const y = 1;
// y = 1; // Cannot assign to 'y' because it is a constant.
console.log(y); // 1


/* constは可変オブジェクトを保護しない */
const obj = { a: 1 };
// obj = { a: 2 }; // Cannot assign to 'obj' because it is a constant.
obj.a = 2;
console.log(obj); // { a: 2 }


const arr = [1, 2];
// arr = [3, 4]; // Cannot assign to 'arr' because it is a constant.
arr.push(3);
console.log(arr); // [ 1, 2, 3 ]
