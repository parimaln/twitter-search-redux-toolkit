import { Flex, Box, Input, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import {SearchIcon} from '@chakra-ui/icons'
import { NumberOfResults } from '../numberOfResults/NumberOfResults';
export function Finder() {
  return (
    <Box>
      <Flex alignItems={'center'}>
        <Input
          placeholder='enter a theme of hashtag'
          size='lg'
          mr={3}
        />
        <IconButton
          colorScheme={'blue'}
          aria-label="Search Twitter"
          icon={<SearchIcon />}
        />

      </Flex>
      <NumberOfResults />
    </Box>
  )
}