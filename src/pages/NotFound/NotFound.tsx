import { Box, Center, VStack, Text } from "@chakra-ui/react";
import { BiGhost } from "react-icons/bi";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <>
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
    </>
  );
};
