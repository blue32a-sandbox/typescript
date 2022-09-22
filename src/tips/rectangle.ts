export type Rectangle = {
  height: number;
  width: number;
};

export const Rectangle = {
  from(height: number, width: number): Rectangle {
    return {
      height,
      width,
    };
  },
};
