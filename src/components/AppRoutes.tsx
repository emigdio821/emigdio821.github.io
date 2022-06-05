import { useEffect } from "react";
import routes from "routes/routes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

interface ScrollTopProps {
  children: React.ReactNode;
}

function ScrollTop({ children }: ScrollTopProps) {
  const location = useLocation();
  useEffect(() => {
    if (window.pageYOffset === 0) return;
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default function AppdRoutes() {
  return (
    <ScrollTop>
      <Routes>
        {routes.map(({ Component, path }) => (
          <Route key={`${path}-route`} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </ScrollTop>
  );
}
