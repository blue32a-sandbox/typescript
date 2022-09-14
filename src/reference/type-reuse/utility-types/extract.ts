/* Extract<T, U> */
(() => {
  type Grade = "A" | "B" | "C" | "D" | "E";
  type FailGrade = Extract<Grade, "D" | "E">;

  // Type '"A"' is not assignable to type '"D" | "E"'.
  // const a: FailGrade = "A";

  // Type '"B"' is not assignable to type '"D" | "E"'.
  // const b: FailGrade = "B";

  // Type '"C"' is not assignable to type '"D" | "E"'.
  // const c: FailGrade = "C";

  const d: FailGrade = "D";
  const e: FailGrade = "E";
  console.log(d, e); // "D" "E"

  // 共通部分を抽出
  type CommonTypes = Extract<"a" | "b" | "c", "b" | "c" | "d">;
  const v1: CommonTypes = "b";
  const v2: CommonTypes = "c";
  console.log(v1, v2); // "b" "c"
})();
