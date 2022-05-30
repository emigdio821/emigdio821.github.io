import { Avatar } from "@chakra-ui/react";
import ProfileImg from "assets/images/em.jpg";

export const EmAvatar = () => {
  return (
    <>
      <Avatar
        size="2xl"
        bg="#212121"
        src={ProfileImg}
        name="Emigdio Torres"
      />
    </>
  );
};
