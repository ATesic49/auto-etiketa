type tag = {
  slika: string;
  ime: string;
  dimenzija: string;
  boja: string;
};
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react";
export type korpaState = {
  quantity: number;
  tag: tag;
};
const initialState: korpaState[] = [];

const korpaSlice = createSlice({
  name: "korpa",
  initialState,
  reducers: {
    dodajUKorpu(state, action: PayloadAction<korpaState>) {
      const existingTag = state.find(
        (element) =>
          element.tag.slika === action.payload.tag.slika &&
          element.tag.dimenzija === action.payload.tag.dimenzija
      );
      if (existingTag) {
        console.log("It exists");
        existingTag.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
        console.log("It not exists");
      }
    },
    dodajSveUKorpu(state, action: PayloadAction<korpaState[]>) {
      return action.payload;
    },
    reduceQuant(state, action: PayloadAction<korpaState>) {
      const index = state.findIndex(
        (element) =>
          element.tag.slika === action.payload.tag.slika &&
          element.tag.dimenzija === action.payload.tag.dimenzija
      );
      if (index !== -1) {
        if (state[index].quantity === 1) {
          console.log("izbrisi");
          state.splice(index, 1); // This will remove the item from the array
        } else {
          console.log("smanjen quant");
          state[index].quantity -= 1;
        }
      } else {
        console.log("jaos");
      }
    },
    increaseQuant(state, action: PayloadAction<korpaState>) {
      const found = state.find(
        (element) =>
          element.tag.slika === action.payload.tag.slika &&
          element.tag.dimenzija === action.payload.tag.dimenzija
      );
      if (found) {
        found.quantity += 1;
      } else {
        console.log("jaos");
      }
    },
    deleteQuant(state, action: PayloadAction<korpaState>) {
      const index = state.findIndex(
        (element) =>
          element.tag.slika === action.payload.tag.slika &&
          element.tag.dimenzija === action.payload.tag.dimenzija
      );
      if (index !== -1) {
        state.splice(index, 1); // This will remove the item from the array
      } else {
        console.log("jaos");
      }
    },
  },
});

export const {
  dodajSveUKorpu,
  dodajUKorpu,
  reduceQuant,
  increaseQuant,
  deleteQuant,
} = korpaSlice.actions;
export default korpaSlice.reducer;
