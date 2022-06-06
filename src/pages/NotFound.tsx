import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiGhost, BiArrowBack } from "react-icons/bi";

export default function NotFound() {
  return (
    <Flex
      pt={{ base: 10, sm: 20 }}
      minH={{ base: "calc(100vh - 222px)", sm: "calc(100vh - 150px)" }}
      maxW="4xl"
      margin="0 auto"
    >
      <VStack px={{ base: 4, lg: 0 }} justify="center" w="100%">
        <Box
          w="100%"
          borderRadius="xl"
          py={{ base: 10, sm: 20 }}
          bg={useColorModeValue("#fafafa", "#2e2e2e")}
        >
          <Box textAlign="center" w="100%">
            <Icon as={BiGhost} fontSize="5rem" />
            <Heading fontSize="3xl">Not found</Heading>
            <Text fontSize="xl">Page does not exist.</Text>
            <Button as={NavLink} to="/" mt={10} leftIcon={<BiArrowBack />}>
              Back to home
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}
