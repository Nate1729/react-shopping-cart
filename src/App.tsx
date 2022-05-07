// Chakra Components
import { Container, Flex } from '@chakra-ui/react';

// My Components
import { Cart } from './components/Cart';
import { Details } from './components/Details';

export const App = () => {
  return (
    <Container maxWidth="container.xl" p={0}>      
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};
