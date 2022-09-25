/* オブジェクトからプロパティの型を生成する */
(() => {
  const conf = {
    en: "Are you sure?",
    fr: "Êtes-vous sûr?",
    es: "Está seguro?",
    ja: "よろしいですか？",
    zh: "您确定吗？",
  } as const;

  type ConfirmationMessage =  typeof conf[keyof typeof conf];
  const en: ConfirmationMessage = "Are you sure?";
  const fr: ConfirmationMessage = "Êtes-vous sûr?";
  const es: ConfirmationMessage = "Está seguro?";
  const ja: ConfirmationMessage = "よろしいですか？";
  const zh: ConfirmationMessage = "您确定吗？";
  console.log(en, fr, es, ja, zh);

  // Type '"Sind Sie sicher?"' is not assignable to type 'ConfirmationMessage'.
  // const de: ConfirmationMessage = "Sind Sie sicher?";
})();
