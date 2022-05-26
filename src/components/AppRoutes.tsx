import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../routes/routes";
import { MotionDiv } from "./MotionDiv";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export const AppdRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Routes location={location} key={location.pathname}>
          {routes.map(({ Component, path }) => (
            <Route
              key={`${path}-route`}
              path={path}
              element={
                <MotionDiv>
                  <Component />
                </MotionDiv>
              }
            />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
