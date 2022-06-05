import { Box, useColorModeValue, Heading } from "@chakra-ui/react";
import MotionDiv from "./MotionDiv";

export default function Hobbies() {
  return (
    <Box
      borderRadius="xl"
      p={{ base: 4, md: 10 }}
      mt={{ base: 4, md: 20 }}
      mb={{ base: 4, md: 40 }}
      bg={useColorModeValue("#fafafa", "#2e2e2e")}
    >
      <MotionDiv>
        <Heading as="h2" size={{ base: "lg" }}>
          I love music. On my free time I like to play videogames or play drums.
          I like to build custom pc&prime;s and custom keyboards. I&prime;m also
          passionate about new technology topics 🤓.
        </Heading>
      </MotionDiv>
    </Box>
  );
}
