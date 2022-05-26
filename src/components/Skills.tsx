import {
  Heading,
  Show,
  Icon,
  Stack,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Paragraph } from "./Paragraph";
import {
  SiJavascript,
  SiTypescript,
  SiGit,
  SiNodeDotJs,
  SiReact,
} from "react-icons/si";
import { Tag, ButtonGroup } from "@chakra-ui/react";

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
      color={useColorModeValue(
        "inherit",
        "var(--chakra-colors-chakra-body-text)"
      )}
    >
      <Show above="sm">
        <TagLeftIcon as={tagIcon} fontSize={"xl"} />
        <TagLabel>{label}</TagLabel>
      </Show>
      <Show below="sm">
        <Icon as={tagIcon} fontSize={"2xl"} />
      </Show>
    </Tag>
  );

  return (
    <>
      <Heading as="h3" size={"md"} variant="section-title">
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
    </>
  );
};
