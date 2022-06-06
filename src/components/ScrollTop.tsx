import { useContext } from "react";
import { IconButton } from "@chakra-ui/react";
import { BiUpArrowAlt } from "react-icons/bi";
import { ScrollContext } from "context/ScrollObserver";

export default function ScrollTop() {
  const { scrollY } = useContext(ScrollContext);
  const screenH = window.innerHeight;
  const halfH = screenH / 2;
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      bottom={4}
      right={4}
      position="fixed"
      colorScheme="gray"
      onClick={handleClick}
      icon={<BiUpArrowAlt />}
      aria-label="Scroll to top"
      display={scrollY < halfH ? "none" : undefined}
    />
  );
}
