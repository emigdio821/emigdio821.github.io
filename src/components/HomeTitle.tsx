import { Box, Flex, Stack, VStack, Heading } from "@chakra-ui/react";
import titleBg from "assets/images/title-bg.svg";
import styles from "assets/css/common.module.css";
import { EmAvatar } from "./EmAvatar";

export const HomeTitle = () => {
  return (
    <Flex pt={20} pb={20} backgroundImage={titleBg} minH="100vh">
      <VStack px={4} w={"100%"} justify={"center"}>
        <Stack
          mb={20}
          w="100%"
          maxW="4xl"
          align={{ base: "left", md: "center" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box mr={{ base: "inherit", lg: 2 }} color={"white"}>
            <Heading as="h2" size="3xl">
              Emigdio Torres
              <span className={styles["text-blinking"]}>|</span>
            </Heading>
            <Heading fontWeight={600} size="xl">
              Software Engineer
            </Heading>
          </Box>
          <EmAvatar />
        </Stack>
        <Box maxW={"4xl"}>
          <Heading as="h2" size={{ base: "xl" }} color="white">
            Hi there!✌️, I am a Telematics Engineer with experience in Software
            Engineering.
          </Heading>
        </Box>
      </VStack>
    </Flex>
  );
};
