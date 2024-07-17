import React from "react";

const Container = ({ children }) => {
  return <div className="relative h-full
   w-full  overflow-scroll px-5">{children}</div>;
};

export default Container;
