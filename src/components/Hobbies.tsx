import { Box, Flex, Heading } from "@chakra-ui/react";

export const Hobbies = () => {
  return (
    <Flex
      pb={40}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box>
        <Box letterSpacing="-0.12rem">
          <Heading as="h2" size="2xl">
            I enjoy listening to Music. When I have some free time I like to
            play Videogames or play the Drums. I like to build Custom PC&lsquo;s
            and Custom Keyboards. I am also passionate about new Technology
            topics.
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
};
