/* Error */
(() => {
  try {
    throw new Error("error");
  } catch (e) {
    console.log(e);
  }

  try {
    throw "id is not string!";
  } catch (e) {
    console.log(e);
  }

  class CustomeError extends Error {
    public constructor(message?: string) {
      super(message);
    }
  }

  try {
    throw new CustomeError("custom error");
  } catch (e) {
    if (e instanceof CustomeError) {
      console.log(e);
    }
  }
})();
