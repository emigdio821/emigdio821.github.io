import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export const AppdRoutes = () => {
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
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route
              key={`${path}-route`}
              path={path}
              element={
                <Component />
              }
            />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
