import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";
import ProfileImg from "assets/images/em.jpg";
import styles from "assets/css/common.module.css";

export const HomeTitle = () => {
  return (
    <>
      <Stack
        pb={10}
        align={{ base: "inherit", md: "center" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Box display={"flex"}>
          <Box mr={{ base: "inherit", md: 5 }}>
            <Heading as="h2" size={"xl"}>
              Emigdio Torres
              <span className={styles["text-blinking"]}>|</span>
            </Heading>
            <Text fontSize="lg">Software Engineer</Text>
          </Box>
        </Box>
        <Avatar
          src={ProfileImg}
          name="Emigdio Torres"
          bg="transparent"
          size="2xl"
        />
      </Stack>
    </>
  );
};
