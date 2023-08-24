import React from "react";

const ContainerWrap = ({ children }) => {
  return (
    <div className="bg-[#141416] w-[90%] relative mx-auto max-w-[1424px]">
      {children}
    </div>
  );
};

export default ContainerWrap;
