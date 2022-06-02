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
          alt={"Hero Image"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          src={ProfileImg}
          fallbackSrc={`https://via.placeholder.com/${width}/333/fafafa?text=ET`}
        />
      </Box>
    </>
  );
};
