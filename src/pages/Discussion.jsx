import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Discussion = () => {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Heading mb={4}>Discussion {id}</Heading>
      <Text mb={6}>This is the original post content for discussion {id}.</Text>
      <VStack spacing={4} align="stretch">
        <Heading size="md">Replies</Heading>
        <Text>Reply 1</Text>
        <Text>Reply 2</Text>
        <Text>Reply 3</Text>
      </VStack>
    </Box>
  );
};

export default Discussion;