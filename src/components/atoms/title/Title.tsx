import React, { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <p className="text-[18px] font-bold">{children}</p>;
};

export default Title;
