import { Text } from "@chakra-ui/react";

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <Text fontSize="2xl">{children}</Text>;
}
