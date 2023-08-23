import React from "react";

const ContainerWrap = ({ children }) => {
  return (
    <div className="w-[85%] relative mx-auto max-w-[1424px]">{children}</div>
  );
};

export default ContainerWrap;
