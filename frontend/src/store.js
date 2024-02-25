import { configureStore } from '@reduxjs/toolkit'
import globalReducers from "./slice/index";
export const store = configureStore({
	reducer: globalReducers,
})