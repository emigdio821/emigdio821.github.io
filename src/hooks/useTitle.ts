import { useEffect } from "react";

export default function useTitle(title = "Em." as string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
