import { ButtonGroup, Heading, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { BtnLink } from "./BtnLink";

export const SocialLinks = () => {
  return (
    <>
      <Heading as="h3" size={"md"} variant="section-title">
        On the web
      </Heading>
      <Stack pt="2" pb="4" direction={{ base: "column", md: "row" }}>
        <ButtonGroup>
          <BtnLink
            size="md"
            text="LinkedIn"
            Icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/emigdio821/"
          />
          <BtnLink
            size="md"
            text="GitHub"
            Icon={FaGithub}
            href="https://github.com/emigdio821/"
          />
        </ButtonGroup>
        <ButtonGroup>
          <BtnLink
            size="md"
            text="Twitter"
            Icon={FaTwitter}
            href="https://twitter.com/emigdio821"
          />
          <BtnLink
            size="md"
            text="Instagram"
            Icon={FaInstagram}
            href="https://www.instagram.com/_emigdiotr/"
          />
        </ButtonGroup>
      </Stack>
    </>
  );
};
