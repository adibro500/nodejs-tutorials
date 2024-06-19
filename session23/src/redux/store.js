import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./silce/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
