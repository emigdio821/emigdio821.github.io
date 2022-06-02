import { Text, Heading, Box } from "@chakra-ui/react";
import { Paragraph } from "./Paragraph";
import { SemiBoldText } from "./SemiBoldText";

export const Skills = () => {
  return (
    <Box mb={10}>
      <Heading as="h2" size={"2xl"} mb={4}>
        Skills
      </Heading>
      <Paragraph>
        I have a strong background in front-end development, some of the
        thechnologies and tools I use are:
      </Paragraph>
      <Text fontSize="2xl">
        <SemiBoldText>JavaScript</SemiBoldText>,{" "}
        <SemiBoldText>TypeScript</SemiBoldText>,{" "}
        <SemiBoldText>React</SemiBoldText>, <SemiBoldText>Node</SemiBoldText>,{" "}
        <SemiBoldText>Git</SemiBoldText>, <SemiBoldText>HTML</SemiBoldText> and{" "}
        <SemiBoldText>CSS</SemiBoldText>.
      </Text>
    </Box>
  );
};
