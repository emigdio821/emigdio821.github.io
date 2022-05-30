import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "routes/routes";

interface ScrollTopProps {
  children: React.ReactNode;
}

const ScrollTop = ({ children }: ScrollTopProps) => {
  const location = useLocation();
  useEffect(() => {
    if (window.pageYOffset === 0) return;
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export const AppdRoutes = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={true}>
        <ScrollTop>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route
                key={`${path}-route`}
                path={path}
                element={<Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </ScrollTop>
      </AnimatePresence>
    </>
  );
};
