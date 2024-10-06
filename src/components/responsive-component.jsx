"use client";

import useScreenSize from "./hooks/useScreenSize";

const ResponsiveCompoent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveCompoent;
