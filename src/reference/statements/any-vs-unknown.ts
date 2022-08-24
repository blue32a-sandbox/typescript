/* anyとunknownの違い */
(() => {
  (() => {
    // どのような値も代入できる
    const any1: any = null;
    const any2: any = undefined;
    const any3: any = true;
    const any4: any = 0.8;
    const any5: any = "Comment allez-vous";
    const any6: any = {
      x: 0,
      y: 1,
      name: "origin",
    };

    const unknown1: unknown = null;
    const unknown2: unknown = undefined;
    const unknown3: unknown = true;
    const unknown4: unknown = 0.8;
    const unknown5: unknown = "Comment allez-vous";
    const unknown6: unknown = {
      x: 0,
      y: 1,
      name: "origin",
    };
  })();

  (() => {
    // any型に代入したオブジェクトのプロパティ、メソッドは使用できる
    const anyNum: any = 0.8;
    console.log(anyNum.toFixed());
    const anyStr: any = "Comment allez-vous";
    console.log(anyStr.length);
    const anyObj: any = {
      x: 0,
      y: 1,
      name: "origin",
    };
    console.log(anyObj.name);

    // unknown型に代入したオブジェクトのプロパティ、メソッドは使用できない
    const unknownNum: unknown = 0.8;
    // Object is of type 'unknown'.
    // console.log(unknownNum.toFixed());
    const unknownStr: unknown = "Comment allez-vous";
    // Object is of type 'unknown'.
    // console.log(unknownStr.length);
    const unknownObj: unknown = {
      x: 0,
      y: 1,
      name: "origin",
    };
    // Object is of type 'unknown'.
    // console.log(unknownObj.name);
  })();

  (() => {
    // any型は言い換えればTypeScriptが型のチェックを放棄した型であり、
    // そのためなんでもできる
    const any: any = {};
    // Cannot read properties of undefined (reading 'y')
    console.log(any.x.y.z);

    const unknown: unknown = {};
    // Object is of type 'unknown'.
    // console.log(unknown.x.y.z);
  })();
})();
