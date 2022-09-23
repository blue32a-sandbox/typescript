/* オブジェクトからキーの型を生成する */
(() => {
  const conf = {
    en: "Are you sure?",
    fr: "Êtes-vous sûr?",
    es: "Está seguro?",
    ja: "よろしいですか？",
    zh: "您确定吗？",
  };
  type TypeOfLanguage = typeof conf;
  // type TypeOfLanguage = {
  //   en: string;
  //   fr: string;
  //   es: string;
  //   ja: string;
  //   zh: string;
  // }

  type Language = keyof TypeOfLanguage;
  // type Language = "en" | "fr" | "es" | "ja" | "zh"
  const languages: Language[] = ["en", "fr", "es", "ja", "zh"];
  console.log(languages);
})();
