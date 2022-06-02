import { Box, Flex, Text, Stack, VStack, Heading } from "@chakra-ui/react";
import titleBg from "assets/images/title-bg.svg";
import styles from "assets/css/common.module.css";
import { EmAvatar } from "./EmAvatar";

export const HomeTitle = () => {
  return (
    <Flex pt={20} pb={40} backgroundImage={titleBg}>
      <VStack px={4} w={"100%"} justify={"center"}>
        <Stack
          mb={20}
          w="100%"
          maxW="4xl"
          align={{ base: "left", md: "center" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box mr={{ base: "inherit", md: 5 }} color={"white"}>
            <Heading as="h2" size="2xl">
              Emigdio Torres
              <span className={styles["text-blinking"]}>|</span>
            </Heading>
            <Heading fontWeight={600} size="lg">
              Software Engineer
            </Heading>
          </Box>
          <EmAvatar />
        </Stack>
        <Box maxW={"4xl"}>
          <Text color="white" fontSize="2xl">
            Hi there!👋, I am a Telematics Engineer with experience in Software
            Engineering using current programming standards. I have no problem
            to adapt in new environments and technologies.
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};
