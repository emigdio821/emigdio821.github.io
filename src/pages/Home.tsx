import { Container } from "@chakra-ui/react";
// import { Bio } from "components/Bio";
import { Hobbies } from "components/Hobbies";
import { HomeTitle } from "components/HomeTitle";
import { MotionDiv } from "components/MotionDiv";
import { Skills } from "components/Skills";
import { SocialLinks } from "components/SocialLinks";

export const Home = () => {
  return (
    <>
      <MotionDiv>
        <HomeTitle />
      </MotionDiv>
      <Container maxW="4xl" px={{ base: 4, lg: 0 }}>
        <MotionDiv>
          {/* <Bio /> */}
          <Skills />
          <Hobbies />
          <SocialLinks />
        </MotionDiv>
      </Container>
    </>
  );
};
