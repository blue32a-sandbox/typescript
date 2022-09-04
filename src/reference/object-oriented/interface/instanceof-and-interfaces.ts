/* インターフェースとinstanceof */
(() => {
  interface Person {
    name: string;
    age: number;
  }

  interface Student extends Person {
    grade: number;
  }

  const bob: Person = {
    name: "Bob",
    age: 16,
  };

  const jon: Student = {
    name: "Jon",
    age: 15,
    grade: 3,
  };

  // 'Student' only refers to a type, but is being used as a value here.
  // console.log(jon instanceof Student);

  type UnknownObject<T extends object> = {
    [P in keyof T]: unknown;
  }

  // 型ガード関数
  function isStudent(obj: unknown): obj is Student {
    if (typeof obj !== "object") {
      return false;
    }
    if (obj === null) {
      return false;
    }

    const { name, age, grade } = obj as UnknownObject<Student>;

    if (typeof name !== "string") {
      return false;
    }
    if (typeof age !== "number") {
      return false;
    }
    if (typeof grade !== "number") {
      return false;
    }

    return true;
  }

  console.log(isStudent(bob)); // false
  console.log(isStudent(jon)); // true
})();
