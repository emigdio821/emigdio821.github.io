import { Box, Center, VStack, Text, Container } from "@chakra-ui/react";
import { BiGhost } from "react-icons/bi";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <>
      <Container py={4} px={0} pt={20} maxW="4xl" minH="calc(100vh - 120px)">
        <Center>
          <VStack align="center">
            <Box>
              <BiGhost size={80} />
            </Box>
            <Box>
              <Text fontSize="4xl" fontWeight={"bold"}>
                not found<span className={styles["err-blinking"]}>|</span>
              </Text>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  );
};
