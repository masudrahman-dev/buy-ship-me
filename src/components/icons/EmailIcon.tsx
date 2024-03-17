import React from "react";
import clx from "../../utils/clx";
import IconWrapper from "./IconWrapper";
const EmailIcon = ({
  className,
  iconWrapperStyle,
}: {
  className?: string;
  iconWrapperStyle?: string;
}) => {
  return (
    <IconWrapper iconWrapperStyle={iconWrapperStyle}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className={clx("", className)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_10613_9776)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4665 10.5514C14.4665 11.9025 13.3675 12.9999 12.0181 12.9999H3.98505C2.63564 12.9999 1.53655 11.9025 1.53655 10.5514V5.44009C1.53655 4.98916 1.66002 4.56563 1.87433 4.20213L5.79395 8.12175C6.38036 8.70988 7.16564 9.03394 8.00239 9.03394C8.83742 9.03394 9.6227 8.70988 10.2091 8.12175L14.1287 4.20213C14.3431 4.56563 14.4665 4.98912 14.4665 5.44009V10.5514H14.4665ZM12.018 2.99162H3.98505C3.4278 2.99162 2.91339 3.18022 2.50189 3.494L6.46095 7.45478C6.87077 7.86284 7.4177 8.08919 8.00239 8.08919C8.58536 8.08919 9.13233 7.86284 9.54211 7.45478L13.5012 3.494C13.0897 3.18022 12.5753 2.99162 12.018 2.99162ZM12.018 2.04688H3.98505C2.11439 2.04688 0.591797 3.56947 0.591797 5.44012V10.5514C0.591797 12.4238 2.11439 13.9447 3.98505 13.9447H12.018C13.8887 13.9447 15.4113 12.4238 15.4113 10.5514V5.44009C15.4113 3.56944 13.8887 2.04688 12.018 2.04688Z"
            fill="#6B7386"
          />
        </g>
        <defs>
          <clipPath id="clip0_10613_9776">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.00195312 -0.00390625)"
            />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};

export default EmailIcon;
