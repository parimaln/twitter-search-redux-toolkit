import React from 'react';
import logo from './logo.svg';
import {Finder} from './features/finder/Finder';
import { Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Container>
      <Heading as="h1" size="xl" my={16} textAlign="center" color="purple.700">
        Welcome to TweetFind!
      </Heading>
      <Finder />
    </Container>
  );
}

export default App;
