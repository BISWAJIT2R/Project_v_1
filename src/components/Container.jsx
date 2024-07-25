import React from "react";

const Container = ({ children }) => {
  return <div className="relative h-full
   w-full  overflow-scroll px-2 scrollbar-hide">{children}</div>;
};

export default Container;
