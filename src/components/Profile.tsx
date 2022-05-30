import { Box, Heading } from "@chakra-ui/react";
import { Paragraph } from "./Paragraph";
import { SemiBoldText } from "./SemiBoldText";

export const Profile = () => {
  return (
    <Box mb={10}>
      <Heading as="h3" size={"md"} mb={4}>
        Profile
      </Heading>
      <Paragraph>
        Hi there!👋, I am a <SemiBoldText>Telematics Engineer</SemiBoldText>{" "}
        with experience in Software Engineering using current programming
        standards. Currently I am a Software Engineer at{" "}
        <SemiBoldText>Wizeline</SemiBoldText>. I have no problem to adapt in new
        environments and technologies.
      </Paragraph>
    </Box>
  );
};
