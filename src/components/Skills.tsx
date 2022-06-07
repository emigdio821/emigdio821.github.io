import { useContext, useRef } from "react";
import {
  Heading,
  Box,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ScrollContext } from "context/ScrollObserver";
import jsSvg from "assets/images/js.svg";
import tsSvg from "assets/images/ts.svg";
import reactSvg from "assets/images/react.svg";
import nodeSvg from "assets/images/node.svg";
import MotionDiv from "./MotionDiv";

interface OpacityBlockProps {
  progress: number;
  blockNumber: number;
}

interface ImgListProps {
  src: string;
  alt: string;
}

const opacityBlock = ({ progress, blockNumber }: OpacityBlockProps) => {
  const currProgress = progress - blockNumber;
  if (currProgress >= 0 && currProgress < 1) return 1;
  return 0.2;
};

function ImgList({ src, alt }: ImgListProps) {
  return (
    <Image maxW="50px" maxH="50px" src={src} alt={alt} borderRadius="md" />
  );
}

export default function Skills() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 2;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <Box
      borderRadius="xl"
      ref={refContainer}
      p={{ base: 4, md: 10 }}
      mb={{ base: 4, md: 20 }}
      bg={useColorModeValue("#fafafa", "#2e2e2e")}
    >
      <MotionDiv>
        <Box>
          <Box
            transition="opacity 0.3s ease-in-out"
            opacity={opacityBlock({ progress, blockNumber: 0 })}
          >
            <Heading as="h2" size={{ base: "lg" }}>
              I have a strong background in front-end development.
            </Heading>
            <Heading as="h2" size={{ base: "lg" }}>
              Further info? take a look at my resume.👀
            </Heading>
          </Box>
          <Box
            transition="opacity 0.3s ease-in-out"
            opacity={opacityBlock({ progress, blockNumber: 1 })}
          >
            <Heading as="h2" size={{ base: "lg" }}>
              These are some of the thechnologies I use.
            </Heading>
            <Heading as="h2" size={{ base: "lg" }} mb={6}>
              JavaScript, TypeScript, React, Node.
            </Heading>
            <Stack
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
    </Box>
  );
}
