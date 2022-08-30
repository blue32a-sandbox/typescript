/* フィールド (field) */
(() => {
  (() => {
    class Person {
      name: string | undefined;
    }
    const person = new Person();
    person.name = "Alice";
    console.log(person.name); // "Alice"

    // Property 'age' does not exist on type 'Person'.
    // console.log(person.age);
  })();

  (() => {
    // コンストラクタを用いたフィールドの初期化
    class Person {
      name: string;

      constructor(personName: string) {
        this.name = personName;
      }
    }
    const alice = new Person("Alice");
    console.log(alice.name); // "Alice"
  })();
})();
