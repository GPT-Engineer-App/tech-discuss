import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Tech Forum</Heading>
      <Text mb={6}>A place to discuss the latest in technology.</Text>
      <VStack spacing={4} align="stretch">
        <Heading size="md">Recent Discussions</Heading>
        <Link as={RouterLink} to="/discussion/1" color="teal.500">
          Discussion 1
        </Link>
        <Link as={RouterLink} to="/discussion/2" color="teal.500">
          Discussion 2
        </Link>
        <Link as={RouterLink} to="/discussion/3" color="teal.500">
          Discussion 3
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;