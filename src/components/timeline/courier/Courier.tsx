import CheckedIcon from "@/components/icons/CheckedIcon";
import CircleIcon from "@/components/icons/circle-icon/CircleIcon";
import CourierIcon from "@/components/icons/courier-icon/CourierIcon";
import { ReactNode } from "react";

interface DeliveredProps {
  icon?: ReactNode;
  label?: string;
  time?: string;
  desc?: string;
  images?: string[];
}

const Courier: React.FC<DeliveredProps> = ({
  icon,
  label,
  time,
  desc,
  images,
}) => {
  return (
    <div>
      <div className="ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ">
          <CourierIcon />
        </span>
        <h3 className=" flex items-center gap-2 rounded-full">
          <span className="  text-nowrap  text-base font-bold text-msGreen">
            At Courier
          </span>
          <div className="bg-silver-300 h-[1px] w-full"></div>
        </h3>
      </div>
      <div className="ms-6 mt-4 ">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-center ">
          <CheckedIcon />
        </span>
        <div className="">
          <time className="block text-silver ">17 January 2024 at 10:35am</time>
          <p className="pb-3 pt-2">Your product has been delivered.</p>
        </div>
      </div>
    </div>
  );
};

export default Courier;
