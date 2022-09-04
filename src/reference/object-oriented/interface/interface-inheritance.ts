/* インターフェースの継承 (inheritance) */
(() => {
  interface Person {
    name: string;
    age: number;
  }

  interface Student extends Person {
    grade: number;
  }

  interface Teacher extends Person {
    students: Student[];
  }

  const studentA: Student = {
    name: "花子",
    age: 10,
    grade: 3,
  };

  const teacher: Teacher = {
    name: "太郎",
    age: 30,
    students: [studentA],
  };

  console.log(teacher);
})();
