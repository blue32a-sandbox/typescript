/* 判別可能なユニオン型 (discriminated union) */
(() => {
  (() => {
    type UploadStatus = InProgress | Success | Failure;
    type InProgress = { type: "InProgress"; progress: number };
    type Success = { type: "Success" };
    type Failure = { type: "Failure"; error: Error };

    function printStatus(status: UploadStatus) {
      switch (status.type) {
        case "InProgress":
          console.log(`アップロード中:${status.progress}%`);
          break;
        case "Success":
          console.log("アップロード成功", status);
          break;
        case "Failure":
          console.log(`アップロード失敗:${status.error.message}`);
          break;
        default:
          console.log("不正なステータス: ", status);
      }
    }
    printStatus({ type: "InProgress", progress: 80 });
    printStatus({ type: "Success" });
    printStatus({ type: "Failure", error: new Error("Failed to write file to disk.") });
  })();

  (() => {
    // 数値リテラル型のディスクリミネータ
    type OkOrBadRequest =
      | { statusCode: 200; value: string }
      | { statusCode: 400; message: string };
    function handleResponse(x: OkOrBadRequest) {
      if (x.statusCode === 200) {
        console.log(x.value);
      } else {
        console.log(x.message);
      }
    }
    handleResponse({ statusCode: 200, value: "Hello"});
    handleResponse({ statusCode: 400, message: "Faild!"});
  })();

  (() => {
    // 論理リテラル型のディスクリミネータ
    type OkOrNotOk =
      | { isOK: true; value: string }
      | { isOK: false; error: string };
    function handleStatus(x: OkOrNotOk) {
      if (x.isOK) {
        console.log(x.value);
      } else {
        console.log(x.error);
      }
    }
    handleStatus({ isOK: true, value: "Hello"});
    handleStatus({ isOK: false, error: "Faild!"});
  })();

  (() => {
    // nullと非nullのディスクリミネータ
    type Result =
      | { error: null, value: string }
      | { error: Error };
    function handleResult(result: Result) {
      if (result.error === null) {
        console.log(result.value);
      } else {
        console.log(result.error.message);
      }
    }
    handleResult({ error: null, value: "Hello"});
    handleResult({ error: new Error("Faild!") })
  })();

  (() => {
    // undefined・非undefinedのディスクリミネータ
    type Result =
      | { error: undefined, value: string }
      | { error: Error };
    function handleResult(result: Result) {
      if (result.error) {
        console.log(result.error.message);
      } else {
        console.log(result.value);
      }
    }
    handleResult({ error: undefined, value: "Hello"});
    handleResult({ error: new Error("Faild!") })
  })();

  (() => {
    // ディスクリミネータを変数に代入する場合
    type Shape =
      | { type: "circle"; color: string; radius: number }
      | { type: "square"; color: string; size: number }
    function toCSS(shape: Shape) {
      const { type, color } = shape;
      switch (type) {
        case "circle":
          return {
            background: color,
            borderRadius: shape.radius,
          };
        case "square":
          return {
            background: color,
            width: shape.size,
            height: shape.size,
          };
      }
    }
    console.log(toCSS({ type: "circle", color: "#FFFFFF", radius: 30}));
    console.log(toCSS({ type: "square", color: "#FFFFFF", size: 50}));
  })();
})();
