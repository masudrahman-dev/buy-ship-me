import CheckedIcon from "@/components/icons/CheckedIcon";
import CircleIcon from "@/components/icons/circle-icon/CircleIcon";
import PendingIcon from "@/components/icons/panding-icon/PandingIcon";
import clx from "@/utils/clx";
import { Children, ReactNode } from "react";
import StackCard from "../stack-card/StackCard";

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
  children: ReactNode;
}

const Pending: React.FC<DeliveredProps> = ({
  iconTitle,
  iconTitleClass: iconTitleClassName,
  label,
  children,
}) => {
  return (
    <div>
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

      {children}
    </div>
  );
};

export default Pending;
