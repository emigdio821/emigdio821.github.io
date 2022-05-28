import { Heading } from "@chakra-ui/react";
import { Paragraph } from "./Paragraph";
import { SemiBoldText } from "./SemiBoldText";

export const Hobbies = () => {
  return (
    <>
      <Heading as="h3" size={"md"} variant="section-title">
        I ♥
      </Heading>
      <Paragraph>
        I enjoy listening to <SemiBoldText>Music</SemiBoldText>
        {". "}
        When I have some free time I like to play{" "}
        <SemiBoldText>Videogames</SemiBoldText>
        {" or "}
        play the <SemiBoldText>Drums</SemiBoldText>
        {". "}I love to build <SemiBoldText>Custom PC&lsquo;s</SemiBoldText> and{" "}
        <SemiBoldText>Custom Keyboards</SemiBoldText>
        {". "}I am also passionate about new{" "}
        <SemiBoldText>Technology</SemiBoldText> topics.
      </Paragraph>
    </>
  );
};
