import { Button } from "@chakra-ui/react";

interface FooterBtnProps {
  text: string;
  href: string;
  size?: "sm" | "md" | "lg" | "xl";
  Icon: React.ComponentType<{ fontSize: string }>;
}

export const BtnLink = ({ text, href, Icon, size = "sm" }: FooterBtnProps) => (
  <Button
    as="a"
    size={size}
    target="_blank"
    href={href}
    aria-label={text}
    leftIcon={<Icon fontSize="1.25rem" />}
  >
    {text}
  </Button>
);
