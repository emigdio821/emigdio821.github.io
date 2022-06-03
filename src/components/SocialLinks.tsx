import { Box, Flex, Grid, Heading, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <Flex
      pb={40}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box w="100%" letterSpacing="-0.12rem">
        <Heading as="h2" size={"2xl"} mb={6}>
          Find me on the web
        </Heading>
        <Grid
          templateColumns={{ base: "inherit", sm: "repeat(4, 1fr)" }}
          gap={6}
        >
          <IconButton
            as="a"
            target="_blank"
            height="4.25rem"
            fontWeight="bold"
            borderRadius="md"
            aria-label="Linkedin"
            colorScheme="linkedin"
            icon={<FaLinkedin fontSize="2.25rem" />}
            href="https://www.linkedin.com/in/emigdio821/"
          />
          <IconButton
            as="a"
            target="_blank"
            height="4.25rem"
            fontWeight="bold"
            borderRadius="md"
            colorScheme="gray"
            aria-label="Github"
            icon={<FaGithub fontSize="2.25rem" />}
            href="https://github.com/emigdio821/"
          />
          <IconButton
            as="a"
            target="_blank"
            height="4.25rem"
            fontWeight="bold"
            borderRadius="md"
            colorScheme="twitter"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="2.25rem" />}
            href="https://twitter.com/emigdio821"
          />
          <IconButton
            as="a"
            color="white"
            target="_blank"
            height="4.25rem"
            fontWeight="bold"
            borderRadius="md"
            colorScheme="pink"
            aria-label="Instagram"
            backgroundSize="200% 100%"
            backgroundPosition="100% 0%"
            transition="background-position 0.3s"
            icon={<FaInstagram fontSize="2.25rem" />}
            bg="linear-gradient(120deg, #d6249f, #fd5949, #285AEB)"
            _hover={{
              backgroundPosition: "80% 0%",
            }}
            href="https://www.instagram.com/_emigdiotr/"
          />
        </Grid>
      </Box>
    </Flex>
  );
};
