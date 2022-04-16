import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../app/store';
import { findTweets } from './findTweets';
export const fetchTweets = (searchValue: string, numberOfResults: string) => async (dispatch: AppDispatch) => {
    dispatch(isLoadingTweets());
    const tweets = await findTweets(searchValue, numberOfResults);
    dispatch(loadingTweetsSuccess(tweets));
}
export type TweetDataType = {
    id: string;
    text: string;
}
export interface TweetState {
    tweets: TweetDataType[];
    isLoading: boolean;
    error: string | null;
}
const initialState: TweetState = { tweets: [], isLoading: false, error: null };
const finderSlice = createSlice({
    name: 'finder',
    initialState,
    reducers: {
        loadingTweetsSuccess(state, action: PayloadAction<TweetDataType[]>) {
            state.tweets = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        isLoadingTweets(state) {
            state.isLoading = true;
        }
    }
})
export const {loadingTweetsSuccess, isLoadingTweets} = finderSlice.actions;
export default finderSlice.reducer;