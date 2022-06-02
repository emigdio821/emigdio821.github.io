import { ButtonGroup, Heading, Stack, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { BtnLink } from "./BtnLink";

export const SocialLinks = () => {
  return (
    <Box mb={10}>
      <Heading as="h2" size={"2xl"} mb={4}>
        On the web
      </Heading>
      <Stack pt="2" pb="4" direction={{ base: "column", md: "row" }}>
        <ButtonGroup>
          <BtnLink
            size="lg"
            text="LinkedIn"
            Icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/emigdio821/"
          />
          <BtnLink
            size="lg"
            text="GitHub"
            Icon={FaGithub}
            href="https://github.com/emigdio821/"
          />
        </ButtonGroup>
        <ButtonGroup>
          <BtnLink
            size="lg"
            text="Twitter"
            Icon={FaTwitter}
            href="https://twitter.com/emigdio821"
          />
          <BtnLink
            size="lg"
            text="Instagram"
            Icon={FaInstagram}
            href="https://www.instagram.com/_emigdiotr/"
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
};
