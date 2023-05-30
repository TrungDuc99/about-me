import React from "react";

const Wrapper = ({ children, className }: any) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
