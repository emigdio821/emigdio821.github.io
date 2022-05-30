import { Bio } from "components/Bio";
import { Hobbies } from "components/Hobbies";
import { HomeTitle } from "components/HomeTitle";
import { MotionDiv } from "components/MotionDiv";
import { Profile } from "components/Profile";
import { Skills } from "components/Skills";
import { SocialLinks } from "components/SocialLinks";

export const Home = () => {
  return (
    <>
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
    </>
  );
};
