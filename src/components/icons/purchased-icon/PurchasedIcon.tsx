import React from "react";
import IconWrapper from "../IconWrapper";
import clx from "@/utils/clx";

const PurchasedIcon = ({
  className,
  iconWrapperStyle,
  fillColor,
}: {
  className?: string;
  iconWrapperStyle?: string;
  fillColor?: string;
}) => {
  return (
    <IconWrapper iconWrapperStyle={iconWrapperStyle}>
      <svg
        width="32"
        height="32"
        className={clx("", className)}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_12627_21812)">
          <path
            d="M29.9436 16.4208V8.84803C29.9436 7.51509 28.8596 6.43603 27.5316 6.43603H19.9588L14.6076 1.07991C13.6701 0.14247 12.1419 0.137595 11.1996 1.07991L5.84344 6.43603H4.46656C3.1385 6.43603 2.05456 7.51509 2.05456 8.84803V10.2249C1.49794 10.8987 0.375 11.4602 0.375 12.9054C0.375 14.336 1.454 14.8535 2.05456 15.5859V23.1538C2.05456 24.4819 3.1385 25.5658 4.46656 25.5658H12.0394L17.3906 30.922C18.3281 31.8594 19.8563 31.8643 20.7986 30.922L26.1547 25.5658H27.5316C28.8597 25.5658 29.9436 24.482 29.9436 23.1538V21.777C30.5002 21.1032 31.6232 20.5417 31.6232 19.0964C31.6232 17.6659 30.5441 17.1483 29.9436 16.4208ZM28.9671 23.1538C28.9671 23.9448 28.3226 24.5893 27.5316 24.5893H4.4665C3.67556 24.5893 3.03106 23.9448 3.03106 23.1538V15.8887H28.9671V23.1538ZM28.9671 10.8206H3.03106V8.84803C3.03106 8.05709 3.67556 7.41259 4.4665 7.41259H27.5316C28.3225 7.41259 28.967 8.05709 28.967 8.84803V10.8206H28.9671Z"
            fill={fillColor ? fillColor : "#00622B"}
          />
          <path
            d="M5.57028 19.4023H9.13728C9.40716 19.4023 9.62553 19.1839 9.62553 18.914C9.62553 18.6442 9.40716 18.4258 9.13728 18.4258H5.57028C5.30041 18.4258 5.08203 18.6442 5.08203 18.914C5.08203 19.1839 5.30041 19.4023 5.57028 19.4023Z"
            fill={fillColor ? fillColor : "#00622B"}
          />
          <path
            d="M11.4508 21.2402H5.56833C5.29845 21.2402 5.08008 21.4586 5.08008 21.7285C5.08008 21.9984 5.29845 22.2167 5.56833 22.2167H11.4507C11.7206 22.2167 11.939 21.9984 11.939 21.7285C11.939 21.4586 11.7206 21.2402 11.4508 21.2402Z"
            fill={fillColor ? fillColor : "#00622B"}
          />
        </g>
        <defs>
          <clipPath id="clip0_12627_21812">
            <rect
              width="32"
              height="32"
              fill={fillColor ? fillColor : "#00622B"}
            />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};

export default PurchasedIcon;
