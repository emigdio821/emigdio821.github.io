import { Box, Flex, Heading } from "@chakra-ui/react";
import MotionDiv from "./MotionDiv";

export default function Hobbies() {
  return (
    <MotionDiv>
      <Flex
        pb={{ base: 0, md: 40 }}
        mt={{ base: 20, md: 40 }}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <Box letterSpacing="-0.12rem">
            <Heading as="h2" size="2xl" lineHeight={1.1}>
              I love Music. On my free time I like to play Videogames or play
              Drums. I like to build Custom PC&prime;s and Custom Keyboards.
              I&prime;m also passionate about new Technology topics 🤓.
            </Heading>
          </Box>
        </Box>
      </Flex>
    </MotionDiv>
  );
}
