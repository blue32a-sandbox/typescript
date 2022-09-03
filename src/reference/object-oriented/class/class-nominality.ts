/* 公称型クラス */
(() => {
  (() => {
    class UserId {
      public readonly id: string;

      constructor(id: string) {
        this.id = id;
      }
    }
    class GroupId {
      public readonly id: string;

      constructor(id: string) {
        this.id = id;
      }
    }
    const userId: UserId = new UserId("aaa");
    const groupId: GroupId = new GroupId("bbb");

    const userId2: GroupId = new UserId("ccc");
    const groupId2: UserId = new GroupId("ddd");
  })();

  (() => {
    // クラスに1つでも非パブリックなプロパティがあると、
    // そのクラスだけ構造的部分型ではなく公称型(nominal typing)になる。
    class UserId {
      private readonly id: string;

      constructor(id: string) {
        this.id = id;
      }
    }
    class GroupId {
      private readonly id: string;

      constructor(id: string) {
        this.id = id;
      }
    }
    const userId: UserId = new UserId("aaa");
    const groupId: GroupId = new GroupId("bbb");

    // Type 'UserId' is not assignable to type 'GroupId'.
    // Types have separate declarations of a private property 'id'.
    // const userId2: GroupId = new UserId("ccc");

    // Type 'GroupId' is not assignable to type 'UserId'.
    // Types have separate declarations of a private property 'id'.
    // const groupId2: UserId = new GroupId("ddd");
  })();

  (() => {
    // protectedプロパティでも同じ
    class UserId {
      protected readonly id: string;

      constructor(id: string) {
        this.id = id;
      }
    }
    class GroupId {
      protected readonly id: string;

      constructor(id: string) {
        this.id = id;
      }
    }
    const userId: UserId = new UserId("aaa");
    const groupId: GroupId = new GroupId("bbb");

    // Type 'UserId' is not assignable to type 'GroupId'.
    // Property 'id' is protected but type 'UserId' is not a class derived from 'GroupId'.
    // const userId2: GroupId = new UserId("ccc");

    // Type 'GroupId' is not assignable to type 'UserId'.
    // Property 'id' is protected but type 'GroupId' is not a class derived from 'UserId'.
    // const groupId2: UserId = new GroupId("ddd");
  })();
  (() => {
    // プライベートメソッドでも同じ
    class UserId {
      private getName() {}
    }
    class GroupId {
      private getName() {}
    }
    const userId: UserId = new UserId();
    const groupId: GroupId = new GroupId();

    // Type 'UserId' is not assignable to type 'GroupId'.
    // Types have separate declarations of a private property 'getName'.
    // const userId2: GroupId = new UserId();

    // Type 'GroupId' is not assignable to type 'UserId'.
    // Types have separate declarations of a private property 'getName'.
    // const groupId2: UserId = new GroupId();
  })();
})();
