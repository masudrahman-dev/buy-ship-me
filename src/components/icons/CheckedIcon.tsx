import React from "react";
import clx from "../../utils/clx";
import IconWrapper from "./IconWrapper";
const CheckedIcon = ({
  className,
  iconWrapperStyle,
}: {
  className?: string;
  iconWrapperStyle?: string;
}) => {
  return (
    <svg
      width="19"
      height="19"
      className={clx("", className)}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="9" fill="white" stroke="#121212" />
      <circle cx="9.5" cy="9.5" r="5.5" fill="#121212" />
      <circle cx="9.5" cy="9.5" r="9" fill="#008930" stroke="#00893C" />
      <path
        d="M8.59503 13.8266C8.48048 13.9379 8.3242 14 8.16185 14C7.99951 14 7.84323 13.9379 7.72868 13.8266L4.26926 10.4847C3.91025 10.1379 3.91025 9.57558 4.26926 9.22947L4.70243 8.81096C5.06156 8.4642 5.64304 8.4642 6.00206 8.81096L8.16185 10.8972L13.9979 5.26007C14.3571 4.91331 14.9391 4.91331 15.2976 5.26007L15.7307 5.67858C16.0898 6.02535 16.0898 6.58754 15.7307 6.93377L8.59503 13.8266Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckedIcon;
