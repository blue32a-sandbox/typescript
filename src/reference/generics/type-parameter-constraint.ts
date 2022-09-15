/* 型引数の制約 */
(() => {
  (() => {
    // 渡す型によってはstyleプロパティが存在しない場合があるのでエラーになる
    function changeBackgroundColor<T>(element: T) {
      // Property 'style' does not exist on type 'T'.
      // element.style.backgroundColor = "red";
      return element;
    }
  })();
  (() => {
    // extendsキーワードで型引数に制約をつける
    function changeBackgroundColor<T extends HTMLElement>(element: T) {
      element.style.backgroundColor = "red";
      return element;
    }
  })();
  (() => {
    // インターフェースに対してextendsキーワードを使う
    interface ValueObject<T> {
      value: T;
      toString(): string;
    }

    class UserID implements ValueObject<number> {
      public value: number;

      public constructor(value: number) {
        this.value = value;
      }

      public toString(): string {
          return `${this.value}`;
      }
    }

    class Entity<ID extends ValueObject<unknown>> {
      private id: ID;

      public constructor(id: ID) {
        this.id = id;
      }

      public getId(): ID {
        return this.id;
      }
    }

    const userId: UserID = new UserID(123);
    console.log(userId.toString()); // 123

    const user: Entity<UserID> = new Entity(userId);
    console.log(user.getId()); // UserID { value: 123 }
  })();
})();
