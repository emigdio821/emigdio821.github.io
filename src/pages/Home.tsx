import { Container } from "@chakra-ui/react";
import { Bio } from "../components/Bio";
import { Hobbies } from "../components/Hobbies";
import { HomeTitle } from "../components/HomeTitle";
import { MotionDiv } from "../components/MotionDiv";
import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";
import { SocialLinks } from "../components/SocialLinks";

export const Home = () => {
  return (
    <>
      <Container
        py={4}
        px={{ base: 4, md: 0 }}
        pt={20}
        minH="calc(100vh - 120px)"
      >
        <MotionDiv>
          <HomeTitle />
        </MotionDiv>
        <MotionDiv delay={0.1}>
          <Profile />
        </MotionDiv>
        <MotionDiv delay={0.2}>
          <Bio />
        </MotionDiv>
        <MotionDiv delay={0.3}>
          <Skills />
        </MotionDiv>
        <MotionDiv delay={0.4}>
          <SocialLinks />
        </MotionDiv>
        <MotionDiv delay={0.5}>
          <Hobbies />
        </MotionDiv>
      </Container>
    </>
  );
};
