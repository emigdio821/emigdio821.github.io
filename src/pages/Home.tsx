import Skills from "components/Skills";
import Hobbies from "components/Hobbies";
import { Container } from "@chakra-ui/react";
import HomeTitle from "components/HomeTitle";

export default function Home() {
  return (
    <>
      <HomeTitle />
      <Container maxW="4xl" px={{ base: 4, lg: 0 }}>
        <Skills />
        <Hobbies />
      </Container>
    </>
  );
}
