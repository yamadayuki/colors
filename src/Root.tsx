import { useEffect, useState } from "react";
import { useLocation } from "react-use";
import { router } from "./routes";

export const Root = () => {
  const location = useLocation();
  const [Component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    router
      .resolve(location.pathname || "")
      .then(component => setComponent(component));
  }, [router, location.pathname]);

  return Component;
};
