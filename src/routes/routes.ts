import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Resume from "pages/Resume";

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

const routes: Route[] = [
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

export default routes;
