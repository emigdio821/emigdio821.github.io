import { Heading } from "@chakra-ui/react";
import { Paragraph } from "./Paragraph";
import { SemiBoldText } from "./SemiBoldText";

export const Profile = () => {
  return (
    <>
      <Heading as="h3" size={"md"} variant="section-title">
        Profile
      </Heading>
      <Paragraph>
        Hi there!👋, I am a <SemiBoldText>Telematics Engineer</SemiBoldText>{" "}
        with experience in Software Engineering using current programming
        standards. Currently I am a Software Engineer at{" "}
        <SemiBoldText>Wizeline</SemiBoldText>. I have no problem to adapt in new
        environments and technologies.
      </Paragraph>
    </>
  );
};
