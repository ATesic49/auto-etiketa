import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import korpaSlice from "./slices/korpaSlice";
export const createStore = () =>
  configureStore({
    reducer: { korpaSlice },
  });
export type storeType = ReturnType<typeof createStore>;
export type AppDispatch = storeType["dispatch"];
export type RootState = ReturnType<storeType["getState"]>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
