import { SETPAGE } from "./types";

export const setData = (page,count) => {
    return {
      type: SETPAGE,
      page: page,
      count:count
    };
  };