import CheckedIcon from "@/components/icons/CheckedIcon";
import CircleIcon from "@/components/icons/circle-icon/CircleIcon";
import PendingIcon from "@/components/icons/panding-icon/PandingIcon";
import clx from "@/utils/clx";
import { ReactNode } from "react";

interface DeliveredProps {
  iconTitle?: ReactNode;
  label?: string;
  time?: string;
  desc?: string;
  labelClass?: string;
  iconTitleClass?: string;
  images?: string[] | number[];
  timeList?: number[] | string[];
  containerClassName?: string;
}





const Pending: React.FC<DeliveredProps> = ({
  iconTitle,
  iconTitleClass: iconTitleClassName,
  label,
  labelClass,
  time,
  timeList = [],
  desc,
  images = [],
  containerClassName,
}) => {
  return (
    <div className={clx("", containerClassName)}>
      <div className="ms-6">
        <span
          className={clx(
            "absolute -start-2 flex h-6 w-6 items-center justify-center rounded-full bg-white ",
            iconTitleClassName,
          )}
        >
          {iconTitle ? iconTitle : <PendingIcon />}
        </span>
        <h3 className=" flex items-center gap-2 rounded-full">
          <span className="   text-nowrap text-base font-bold text-msGreen">
            {label || "Delivered"}
          </span>
          <div className="bg-silver-300 h-[1px] w-full"></div>
        </h3>
      </div>

      <div className="ms-6 mt-4 ">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-center ">
          <CheckedIcon />
        </span>
        <div className="">
          <time className="block text-nowrap text-silver">
            {time || "01 January 2024 at 10:35am"}
          </time>
          <p className=" pb-3 pt-2">
            Order created. Please pay your invoice{" "}
            <span className="text-msGreen">#3225</span> with in 24h, otherwise
            your order will be cancelled automatically.
          </p>

          {images?.length > 0 && (
            <div className="flex items-center gap-2">
              {images?.map(() => {
                return (
                  <img
                    src="https://picsum.photos/50/50"
                    className=" rounded-md"
                    alt=""
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pending;
