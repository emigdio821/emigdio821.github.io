import { Box, Center, VStack, Text, Container } from "@chakra-ui/react";
import { BiGhost } from "react-icons/bi";
import styles from "assets/css/common.module.css";
import { MotionDiv } from "components/MotionDiv";

export const NotFound = () => {
  return (
    <>
      <Container px={{ base: 4, md: 0 }} pt={20} maxW="4xl">
        <MotionDiv>
          <Center>
            <VStack align="center">
              <Box>
                <BiGhost size={80} />
              </Box>
              <Box textAlign="center">
                <Text fontSize="4xl" fontWeight={"bold"}>
                  Not found<span className={styles["text-blinking"]}>|</span>
                </Text>
              </Box>
            </VStack>
          </Center>
        </MotionDiv>
      </Container>
    </>
  );
};
