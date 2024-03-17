import { cn } from "@/lib/utils";
import React from "react";

const BangladeshFlagIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="21"
      className={cn("", className)}
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11043_5941)">
        <path
          d="M-2.21484 1.5C-2.21484 -0.709138 -0.423983 -2.5 1.78516 -2.5H18.7852C20.9943 -2.5 22.7852 -0.709139 22.7852 1.5V18.5C22.7852 20.7091 20.9943 22.5 18.7852 22.5H1.78516C-0.423982 22.5 -2.21484 20.7091 -2.21484 18.5V1.5Z"
          fill="#006A4E"
        />
        <path
          d="M10.2188 16.668C13.9014 16.668 16.8867 13.6826 16.8867 10C16.8867 6.31738 13.9014 3.33203 10.2188 3.33203C6.53613 3.33203 3.55078 6.31738 3.55078 10C3.55078 13.6826 6.53613 16.668 10.2188 16.668Z"
          fill="#F42A41"
        />
      </g>
      <defs>
        <clipPath id="clip0_11043_5941">
          <rect x="0.285156" width="20" height="20" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BangladeshFlagIcon;
