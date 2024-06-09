import { Box, Heading, Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // Handle post submission logic here
    console.log("Post submitted:", { title, content });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Create a New Post</Heading>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default CreatePost;