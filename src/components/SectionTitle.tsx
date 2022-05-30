import { Heading } from "@chakra-ui/react";
import { TextColorModeVal } from "utils/ColorModeVal";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <>
    <Heading
      mb={3}
      as="h4"
      size={"md"}
      letterSpacing={1}
      color={TextColorModeVal()}
    >
      {children}
    </Heading>
  </>
);
