import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface TweetState {
    tweets: string[];
}
const initialState: TweetState = { tweets: [] };
const finderSlice = createSlice({
    name: 'finder',
    initialState,
    reducers: {
        addTweet(state, action: PayloadAction<string[]>) {
            state.tweets = action.payload;
        }
    }
})
export const {addTweet} = finderSlice.actions;
export default finderSlice.reducer;