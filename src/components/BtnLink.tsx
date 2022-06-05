import { Button, useColorModeValue } from "@chakra-ui/react";

interface FooterBtnProps {
  text: string;
  href: string;
  Icon: React.ComponentType;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "link" | "ghost";
}

export default function BtnLink({
  text,
  href,
  Icon,
  size = "sm",
  variant = "solid",
}: FooterBtnProps) {
  return (
    <Button
      as="a"
      size={size}
      href={href}
      target="_blank"
      aria-label={text}
      variant={variant}
      leftIcon={<Icon />}
      rel="noopener noreferrer"
      color={useColorModeValue("#333", "#f0efef")}
    >
      {text}
    </Button>
  );
}
