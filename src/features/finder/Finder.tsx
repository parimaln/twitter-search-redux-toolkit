import { Flex, Box, Input, IconButton, Stack, Skeleton, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import {SearchIcon} from '@chakra-ui/icons'
import { NumberOfResults } from '../numberOfResults/NumberOfResults';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { fetchTweets, TweetDataType } from './finderSlice';
import { TwitterTweetEmbed } from 'react-twitter-embed';
export function Finder() {
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useAppDispatch();
  const {tweets, isLoading} = useAppSelector(state => state.finder);
  const numberOfResults = useAppSelector(state => state.numberOfResults);
  const handleSearch = async () => {
    if(searchValue) {
      dispatch(fetchTweets(searchValue, numberOfResults));
      setSearchValue('');
    }
  }
  return (
    <Box>
      <Flex alignItems={'center'}>
        <Input
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder='enter a theme of hashtag'
          size='lg'
          mr={3}
        />
        <IconButton
          colorScheme={'blue'}
          aria-label="Search Twitter"
          onClick={handleSearch}
          icon={<SearchIcon />}
        />

      </Flex>
      <NumberOfResults />
      {
        isLoading && (
          <Stack mt={5}>
            <Skeleton height="20px"/>
            <Skeleton height="20px"/>
            <Skeleton height="20px"/>
          </Stack>
        )
      }
      <Wrap mt={5}>
        {tweets.map(tweet => (
          <WrapItem key={tweet.id}>
            <TwitterTweetEmbed tweetId={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}