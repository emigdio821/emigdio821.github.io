import { ButtonGroup, Container, Stack, Button, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterBtnProps {
  text: string;
  href: string;
  Icon: React.ComponentType<{ fontSize: string }>;
}

export const Footer = () => {
  const FooterBtn = ({ text, href, Icon }: FooterBtnProps) => (
    <Button
      as="a"
      size={"sm"}
      target="_blank"
      href={href}
      aria-label={text}
      leftIcon={<Icon fontSize="1.25rem" />}
    >
      {text}
    </Button>
  );
  return (
    <Container as="footer" role="contentinfo">
      <Stack
        pt="2"
        pb="4"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Text opacity={0.5} fontSize="sm">
          &copy; {new Date().getFullYear()} Emigdio Torres. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost" opacity={0.5}>
          <FooterBtn
            text="LinkedIn"
            href="https://www.linkedin.com/in/emigdio821/"
            Icon={FaLinkedin}
          />
          <FooterBtn
            text="Source"
            href="https://github.com/emigdio821/emigdio821.github.io"
            Icon={FaGithub}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
};
