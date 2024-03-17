import React, { ReactNode } from "react";
import clx from "../../utils/clx";

const IconWrapper = ({
  children,
  iconWrapperStyle,
}: {
  children: ReactNode;
  iconWrapperStyle?: string;
}) => {
  return (
    <span
      className={clx(
        "flex  items-center justify-center rounded-full p-5 bg-msGreen-light w-[72px] h-[72px]",
        iconWrapperStyle
      )}
    >
      {children}
    </span>
  );
};

export default IconWrapper;
