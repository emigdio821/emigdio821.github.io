// import ProfileImg from "../assets/images/em.jpg"
import { Avatar, Box, Heading, Stack } from "@chakra-ui/react";
import ProfileImg from "../assets/images/_doge.png";

export const BodyTitle = () => {
  return (
    <>
      <Stack
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align="center"
        pb={10}
      >
        <Box display={"flex"}>
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size={"xl"}>
              Emigdio Torres
            </Heading>
            <p>Software Engineer</p>
          </Box>
        </Box>
        <Avatar
          src={ProfileImg}
          name="Emigdio Torres"
          size={{ base: "2xl", md: "xl" }}
        />
      </Stack>
    </>
  );
};
