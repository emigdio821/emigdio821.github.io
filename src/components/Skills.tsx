import { useContext, useRef } from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import { ScrollContext } from "context/ScrollObserver";

interface TextContentProps {
  children: React.ReactNode;
  progress: number;
  blockNumber: number;
}

interface OpacityBlockProps {
  progress: number;
  blockNumber: number;
}

const opacityBlock = ({ progress, blockNumber }: OpacityBlockProps) => {
  const currProgress = progress - blockNumber;
  if (currProgress >= 0 && currProgress < 1) return 1;
  return 0.2;
};

const TextContent = ({ children, progress, blockNumber }: TextContentProps) => (
  <Heading
    as="h2"
    size="2xl"
    transition="opacity 0.3s ease-in-out"
    opacity={opacityBlock({ progress, blockNumber })}
  >
    {children}
  </Heading>
);

export const Skills = () => {
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
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <Box ref={refContainer}>
      <Flex
        py={40}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box letterSpacing="-0.12rem">
          <TextContent progress={progress} blockNumber={0}>
            I have a strong background in front-end development.
          </TextContent>
          <TextContent progress={progress} blockNumber={1}>
            These are some of the thechnologies and tools I use 👇
          </TextContent>
          <TextContent progress={progress} blockNumber={2}>
            JavaScript, TypeScript, React, Node, Git, HTML and CSS.
          </TextContent>
        </Box>
      </Flex>
    </Box>
  );
};
