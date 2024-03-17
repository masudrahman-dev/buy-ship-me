import CircleIcon from "@/components/icons/circle-icon/CircleIcon";
import { ReactNode } from "react";

const Icon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.0261 14.6782C23.3816 14.6782 22.7566 14.766 22.1561 14.9223V8.10142C22.1561 8.05261 22.1316 7.9403 22.0877 7.86705C22.0877 7.86705 22.0877 7.86705 22.0877 7.86217C22.0291 7.75967 21.9363 7.68155 21.8191 7.64736L11.4926 2.19361C11.3509 2.12036 11.1801 2.12036 11.0384 2.19361C9.93987 2.77461 1.95206 6.99317 0.711875 7.64736C0.501937 7.71573 0.375 7.93055 0.375 8.10142V22.5732C0.375 22.7588 0.4775 22.9248 0.63375 23.0078L11.0384 28.4957C11.0824 28.5202 11.1947 28.5543 11.2679 28.5543C11.3363 28.5543 11.4437 28.525 11.4926 28.4957L17.1709 25.5027C18.3867 28.0759 20.9989 29.8629 24.026 29.8629C28.2152 29.8629 31.6232 26.4549 31.6232 22.2705C31.6233 18.0813 28.2153 14.6782 24.0261 14.6782ZM11.268 3.17986L20.6229 8.11611L16.2726 10.4158L7.44987 5.19142L11.268 3.17986ZM11.268 13.0572L1.90819 8.11605L6.43919 5.72848L15.2571 10.9479L11.268 13.0572ZM21.1796 15.2348C18.4014 16.3627 16.4386 19.0871 16.4386 22.2705C16.4386 23.081 16.5656 23.8573 16.8048 24.5897L11.7563 27.2555V13.9018L15.7551 11.7925V15.3373C15.7551 15.6107 15.9749 15.8255 16.2434 15.8255C16.5168 15.8255 16.7316 15.6107 16.7316 15.3373V11.275L21.1796 8.92655V15.2348H21.1796ZM26.7798 25.3221C26.6187 25.5369 26.3111 25.5809 26.0962 25.4198L23.1862 23.2275C23.0642 23.1348 22.9909 22.9932 22.9909 22.8369V17.7151C22.9909 17.4417 23.2107 17.2269 23.4792 17.2269C23.7477 17.2269 23.9674 17.4417 23.9674 17.7151V22.5928L26.6821 24.6386C26.897 24.7997 26.9409 25.1073 26.7798 25.3221Z"
      fill={"#00622B"}
    />
  </svg>
);

interface DeliveredProps {
  icon?: ReactNode;
  label?: string;
  time?: string;
  desc?: string;
  images?: string[];
}

const Delivered: React.FC<DeliveredProps> = ({
  icon,
  label,
  time,
  desc,
  images,
}) => {
  return (
    <div>
      <div className="ms-6">
        <span className="absolute -start-2 flex h-6 w-6 items-center justify-center rounded-full bg-white ">
          {Icon}
        </span>
        <h3 className=" flex items-center gap-2 rounded-full">
          <span className="   text-base font-bold text-msGreen">Delivered</span>
          <div className="bg-silver-300 h-[1px] w-full"></div>
        </h3>
      </div>
      <div className="ms-6 mt-4 ">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-center ">
          <CircleIcon />
        </span>

        <div className="">
          <time className="block text-silver ">19 January 2024 at 10:35am</time>

          <p className="pb-3 pt-2">Your product has been delivered.</p>
          <div className="flex items-center gap-2">
            <img
              src="https://picsum.photos/50/50"
              className=" rounded-md"
              alt=""
            />
            <img
              src="https://picsum.photos/50/50"
              className=" rounded-md"
              alt=""
            />
            <img
              src="https://picsum.photos/50/50"
              className=" rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivered;
