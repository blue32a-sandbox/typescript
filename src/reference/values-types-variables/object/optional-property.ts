/* オブジェクト型のオプションプロパティ (optional property) */
(() => {
  let size: { width?: number };
  size = {}; // ok
  console.log(size); // {}

  size = { width: undefined }; // ok
  console.log(size); // { width: undefined }

  // Type 'null' is not assignable to type 'number | undefined'.
  // size = { width: null };
})();
