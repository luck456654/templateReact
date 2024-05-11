import { SETPAGE } from "./types";

export const setData = (num,count) => {
    return {
      type: SETPAGE,
      count:count,
      num:num
    };
  };