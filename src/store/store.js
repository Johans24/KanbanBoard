import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./board";
import settingsReducer from "./settings";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    settings: settingsReducer
  }
})