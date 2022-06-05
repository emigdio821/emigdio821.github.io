import { useContext, useRef } from "react";
import { Heading, Box, Flex, Image, Stack } from "@chakra-ui/react";
import { ScrollContext } from "context/ScrollObserver";
import jsSvg from "assets/images/js.svg";
import tsSvg from "assets/images/ts.svg";
import reactSvg from "assets/images/react.svg";
import nodeSvg from "assets/images/node.svg";
import MotionDiv from "./MotionDiv";

interface TextContentProps {
  children: React.ReactNode;
  progress: number;
  blockNumber: number;
}

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

function TextContent({ children, progress, blockNumber }: TextContentProps) {
  return (
    <Heading
      as="h2"
      size="2xl"
      lineHeight={1.1}
      transition="opacity 0.3s ease-in-out"
      opacity={opacityBlock({ progress, blockNumber })}
    >
      {children}
    </Heading>
  );
}

function ImgList({ src, alt }: ImgListProps) {
  return (
    <Image maxW="72px" maxH="72px" src={src} alt={alt} borderRadius="md" />
  );
}

export default function Skills() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
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
    <Box ref={refContainer}>
      <MotionDiv>
        <Flex
          mb={{ base: 20, lg: 40 }}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Box letterSpacing="-0.12rem">
            <TextContent progress={progress} blockNumber={0}>
              I have a strong background in front-end development.
            </TextContent>
            <TextContent progress={progress} blockNumber={1}>
              Further info? take a look at my resume.👀 These are some of the
              thechnologies I use.
            </TextContent>
            <Box
              transition="opacity 0.3s ease-in-out"
              opacity={opacityBlock({ progress, blockNumber: 2 })}
            >
              <Heading as="h2" size="2xl" mb={6}>
                JavaScript, TypeScript, React, Node.
              </Heading>
              <Stack spacing={{ base: 2, sm: 6 }} direction="row">
                <ImgList src={jsSvg} alt="JavaScript" />
                <ImgList src={tsSvg} alt="TypeScript" />
                <ImgList src={reactSvg} alt="React" />
                <ImgList src={nodeSvg} alt="Node" />
              </Stack>
            </Box>
          </Box>
        </Flex>
      </MotionDiv>
    </Box>
  );
}
