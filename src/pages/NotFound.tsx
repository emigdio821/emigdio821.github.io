import { Box, Center, VStack, Text } from "@chakra-ui/react";
import { BiGhost } from "react-icons/bi";
import styles from "assets/css/common.module.css";

export const NotFound = () => {
  return (
    <>
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
    </>
  );
};
