import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type NumberOfResultsType = "10" | "15" | "20";

const initialState: string = "10";
const numberOfResultsSlice = createSlice({
    name: 'finder',
    initialState,
    reducers: {
        setNumberOfResults(state, action: PayloadAction<NumberOfResultsType>) {
            return action.payload;
        }
    }
})

export const {setNumberOfResults} = numberOfResultsSlice.actions;
export default numberOfResultsSlice.reducer;