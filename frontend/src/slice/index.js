import { createSlice } from '@reduxjs/toolkit'
import { getMembers } from "../services/index"

const initialState = {
	members: [],
	books: [],
	circulation: [],
}

export const globalSlice = createSlice({
	name: 'globalSlice',
	initialState,
	reducers: {
		updateMembers: (state, action) => {
			state.members = action.payload;
		},
	},
})

export const { updateMembers } = globalSlice.actions

export default globalSlice.reducer