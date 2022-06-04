import { Button, useColorModeValue } from "@chakra-ui/react";

interface FooterBtnProps {
  text: string;
  href: string;
  size?: "sm" | "md" | "lg" | "xl";
  Icon: React.ComponentType;
  variant?: "solid" | "outline" | "link" | "ghost";
}

export const BtnLink = ({
  text,
  href,
  Icon,
  size = "sm",
  variant = "solid",
}: FooterBtnProps) => (
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
