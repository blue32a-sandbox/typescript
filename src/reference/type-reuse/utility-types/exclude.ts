/* Exclude<T, U> */
(() => {
  type Grade = "A" | "B" | "C" | "D" | "E";
  type PassGrade = Exclude<Grade, "D" | "E">;
  const a: PassGrade = "A";
  const b: PassGrade = "B";
  const c: PassGrade = "C";

  // Type '"D"' is not assignable to type '"A" | "B" | "C"'.
  // const d: PassGrade = "D";

  // Type '"E"' is not assignable to type '"A" | "B" | "C"'.
  // const e: PassGrade = "E";

  console.log(a, b, c); // "A" "B" "C"

  // Excludeの注意点
  type PullRequestState = "draft"| "reviewed" | "rejected";
  type MergeableState = Exclude<PullRequestState, "draft" | "rejected">;
  const s1: MergeableState = "reviewed";

  type PullRequestState2 = "open"| "reviewed" | "rejected" | "testFailed";
  type MergeableState2 = Exclude<PullRequestState2, "draft" | "rejected">;
  const s2: MergeableState2 = "open"; // "draft"から変更した"open"が含まれる
  const s3: MergeableState2 = "reviewed";
  const s4: MergeableState2 = "testFailed"; // 新しく追加した"testFailed"が含まれる
})();
