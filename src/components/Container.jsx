import React from "react";

const Container = ({ children }) => {
  return <div className="relative h-full
   w-full bg-red-500 overflow-scroll">{children}</div>;
};

export default Container;
