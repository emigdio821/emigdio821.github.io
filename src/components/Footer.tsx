import { ButtonGroup, Container, Stack, Text, Divider } from "@chakra-ui/react";
import { BtnLink } from "./BtnLink";
import { FaGithub } from "react-icons/fa";

export const Footer = () => (
  <Container as="footer" role="contentinfo" px={0}>
    <Divider />
    <Stack
      pt="2"
      pb="4"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      align="center"
    >
      <Text opacity={0.8} fontSize="sm">
        &copy; {new Date().getFullYear()} Emigdio Torres. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost" opacity={0.8}>
        <BtnLink
          text="Source"
          href="https://github.com/emigdio821/emigdio821.github.io"
          Icon={FaGithub}
        />
      </ButtonGroup>
    </Stack>
  </Container>
);
