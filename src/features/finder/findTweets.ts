import { TweetDataType } from "./finderSlice";

const URI = "https://t-api.vercel.app/api/search";
export const findTweets = async (searchQuery: string, amount: string): Promise<TweetDataType[]> => {
    const response = await fetch(
        `${URI}?query=${searchQuery}&max_results=${amount}`
    );

    if(!response.ok) {
        throw new Error('Response not OK!');
    }

    return response.json();
}