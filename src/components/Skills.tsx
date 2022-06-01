import {
  Show,
  Icon,
  Stack,
  Heading,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { Paragraph } from "./Paragraph";
import {
  SiGit,
  SiReact,
  SiNodeDotJs,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { Tag, ButtonGroup, Box } from "@chakra-ui/react";
import { TextColorModeVal } from "utils/ColorModeVal";

interface TagsProps {
  tagIcon: React.ComponentType;
  label: string;
}

export const Skills = () => {
  const Tags = ({ tagIcon, label }: TagsProps) => (
    <Tag
      size="lg"
      variant="outline"
      borderRadius="full"
      opacity={0.8}
      px={{ base: 4, md: 5 }}
      py={{ base: 4, md: 0 }}
      color={TextColorModeVal()}
    >
      <Show above="sm">
        <TagLeftIcon as={tagIcon} fontSize="lg" />
        <TagLabel fontSize="sm">{label}</TagLabel>
      </Show>
      <Show below="sm">
        <Icon as={tagIcon} fontSize={"xl"} />
      </Show>
    </Tag>
  );

  return (
    <Box mb={10}>
      <Heading as="h3" size={"md"} mb={4}>
        Skills
      </Heading>
      <Paragraph>
        I have a strong background in front-end development, some of the
        thechnologies and tools I use are:
      </Paragraph>
      <Stack pt="2" direction={{ base: "column", md: "row" }}>
        <ButtonGroup>
          <Tags tagIcon={SiJavascript} label="JS" />
          <Tags tagIcon={SiTypescript} label="TS" />
          <Tags tagIcon={SiGit} label="Git" />
          <Tags tagIcon={SiNodeDotJs} label="Node" />
          <Tags tagIcon={SiReact} label="React" />
        </ButtonGroup>
      </Stack>
    </Box>
  );
};
