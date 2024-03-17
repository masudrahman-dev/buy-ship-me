import React from "react";
import IconWrapper from "../IconWrapper";
import clx from "@/utils/clx";

const DestinationIcon = ({
  className,
  iconWrapperStyle,
  fillColor,
}: {
  className?: string;
  iconWrapperStyle?: string;
  fillColor?: string;
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={clx("", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12627_21804)">
        <path
          d="M31.5268 26.5607L29.2076 23.47L30.936 21.7417C31.5414 21.1362 31.5414 20.145 30.936 19.5397L30.1645 18.7682C29.5542 18.1579 28.5679 18.1579 27.9576 18.7682L26.6588 20.067L22.8163 14.95C24.0467 13.8075 27.0885 10.9854 28.3286 9.83316C28.3335 9.82828 28.3384 9.82341 28.3433 9.81847C29.9301 8.23653 29.9057 5.67322 28.3433 4.11566C26.7858 2.55322 24.2273 2.52397 22.6258 4.12541L21.5516 5.2826L17.5089 9.63778L12.6119 5.96616L13.8862 4.69666C14.4965 4.08635 14.4965 3.09522 13.8862 2.48978L13.1148 1.71835C12.5093 1.10803 11.5182 1.11291 10.9079 1.71835L9.21364 3.41741L5.89839 0.932221C5.70308 0.78572 5.42964 0.805283 5.25877 0.976158L2.5197 3.71528C2.34389 3.8911 2.32927 4.17422 2.48552 4.36953L11.7867 15.8044L7.61702 20.3012L3.02252 17.3619C2.8272 17.235 2.5782 17.2642 2.4122 17.4254L0.517828 19.3198C0.327391 19.5103 0.327391 19.8178 0.517828 20.0083L4.34083 23.8313L3.94045 24.261C2.81258 25.467 2.81745 27.3712 3.9502 28.5088C5.08295 29.6415 6.98714 29.6464 8.19314 28.5185L8.70089 28.0498L13.4418 31.0867C13.6371 31.2137 13.891 31.1844 14.0521 31.0232L15.9466 29.1288C16.137 28.9384 16.137 28.6308 15.9466 28.4404L12.2554 24.7492L16.6545 20.6723L28.0895 29.9687C28.2848 30.1298 28.5631 30.1152 28.7438 29.9393L31.4828 27.2003C31.6538 27.0245 31.6733 26.7559 31.5268 26.5607ZM25.365 5.4486C26.3366 5.53647 26.9225 6.12235 27.0105 7.09403C27.0349 7.3626 26.8347 7.59691 26.5661 7.62135C26.3073 7.64578 26.0632 7.45535 26.0388 7.18191C25.99 6.67897 25.78 6.46903 25.2771 6.42022C25.0086 6.39578 24.8084 6.15653 24.8328 5.88803C24.8621 5.61947 25.1014 5.42416 25.365 5.4486ZM9.9997 4.00822L11.6012 2.40672C11.8258 2.18216 12.1968 2.18216 12.4263 2.40672L13.1978 3.17816C13.4223 3.4076 13.4223 3.77872 13.1978 4.00328L11.8258 5.37528L9.9997 4.00822ZM7.52914 27.8057C6.70402 28.5771 5.41014 28.582 4.64358 27.8154C3.87702 27.0488 3.88189 25.755 4.65333 24.9249L21.7715 6.4836C22.6796 8.36822 24.0906 9.77441 25.9753 10.6875L7.52914 27.8057ZM28.6168 22.679L27.2496 20.8578L28.651 19.4565C28.8756 19.2319 29.2466 19.2319 29.4761 19.4565L30.2426 20.228C30.4721 20.4575 30.4721 20.8237 30.2426 21.0531L28.6168 22.679Z"
          fill={fillColor ? fillColor : "#00622B"}
        />
      </g>
      <defs>
        <clipPath id="clip0_12627_21804">
          <rect
            width="32"
            height="32"
            fill={fillColor ? fillColor : "#00622B"}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DestinationIcon;
