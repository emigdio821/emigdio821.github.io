import { Box, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import jsSvg from "assets/images/js.svg";
import tsSvg from "assets/images/ts.svg";
import reactSvg from "assets/images/react.svg";
import nodeSvg from "assets/images/node.svg";
import MotionDiv from "./MotionDiv";
import CardText from "./CardText";

interface ImgListProps {
  src: string;
  alt: string;
}

function ImgList({ src, alt }: ImgListProps) {
  return (
    <Image maxW="50px" maxH="50px" src={src} alt={alt} borderRadius="md" />
  );
}

export default function Skills() {
  return (
    <MotionDiv>
      <Box
        borderRadius="xl"
        p={{ base: 4, md: 10 }}
        mb={{ base: 4, md: 20 }}
        bg={useColorModeValue("#f5f5f5", "#2e2e2e")}
      >
        <Box>
          <CardText>
            I have a strong background in front-end development.
          </CardText>
        </Box>
        <Box>
          <CardText>
            These are some of the technologies I currently use: JavaScript,
            TypeScript, React and Node.
          </CardText>
          <Stack
            mt={6}
            direction="row"
            filter="grayscale(70%);"
            spacing={{ base: 2, sm: 6 }}
          >
            <ImgList src={jsSvg} alt="JavaScript" />
            <ImgList src={tsSvg} alt="TypeScript" />
            <ImgList src={reactSvg} alt="React" />
            <ImgList src={nodeSvg} alt="Node" />
          </Stack>
        </Box>
      </Box>
    </MotionDiv>
  );
}
