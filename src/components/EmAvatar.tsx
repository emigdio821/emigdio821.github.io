import { Box, Image } from "@chakra-ui/react";
import ProfileImg from "assets/images/em.jpg";

interface EmAvatarProps {
  width?: number;
  height?: number;
}

export const EmAvatar = ({ width = 180, height = 180 }: EmAvatarProps) => {
  return (
    <>
      <Box
        width={width}
        height={height}
        rounded={"full"}
        boxShadow={"2xl"}
        overflow={"hidden"}
        position={"relative"}
      >
        <Image
          w={"100%"}
          h={"100%"}
          alt={"Em"}
          fit={"cover"}
          align={"center"}
          src={ProfileImg}
        />
      </Box>
    </>
  );
};
