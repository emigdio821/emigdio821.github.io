import { NotFound, Home, Resume } from "../pages";

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/not-found",
    path: "not-found",
    Component: NotFound,
    name: "NotFound",
  },
  {
    to: "/",
    path: "/",
    Component: Home,
    name: "Home",
  },
  {
    to: "/resume",
    path: "resume",
    Component: Resume,
    name: "Resume",
  },
];
