import { createSlice } from "@reduxjs/toolkit";
import data from './carInfo.json';

const initialState = data;



const carSlice = createSlice({
    name: "car", initialState, reducers: {}
})

export const selectCars = state => state.car

export default carSlice.reducer