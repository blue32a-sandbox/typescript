/* オプショナルチェーン (optional chaining) */
(() => {
  let book: any = undefined;
  console.log(book?.title); // undefined

  book = null;
  console.log(book?.title); // undefined

  book = { title: "サバイバルTypeScript" };
  console.log(book?.title); // "サバイバルTypeScript"

  // ネストして使うこともできる
  book = undefined;
  console.log(book?.author?.email); // undefined

  book = { author: null };
  console.log(book?.author?.email); // undefined

  book = { author: { email: "alice@example.com" } };
  console.log(book?.author?.email); // "alice@example.com"

  // 関数呼び出し
  let increment: any = undefined;
  console.log(increment?.(1)); // undefined

  increment = (n: number) => n + 1;
  console.log(increment?.(1)); // 2

  let item: any = { getPrice: undefined };
  console.log(item.getPrice?.()); // undefined

  item = {
    getPrice() {
      return 0;
    },
  };
  console.log(item.getPrice?.()); // 0

  // 配列要素の参照
  let books: any = undefined;
  console.log(books?.[0]); // undefined

  books = ["サバイバルTypeScript"];
  console.log(books?.[0]); // "サバイバルTypeScript"

  let animal: undefined | { name: string };
  const name = animal?.name; // string | undefined

  // Null合体演算子と組み合わせる
  let movie: any = undefined;
  console.log(movie?.title ?? "トップガン"); // "トップガン"
})();
