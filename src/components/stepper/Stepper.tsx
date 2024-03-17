import { ArrowLeftIcon } from "@radix-ui/react-icons";
import React from "react";
import stepperItems from "./stepper-items/stepperItems";
import clx from "@/utils/clx";
import IconWrapper from "../icons/IconWrapper";

const Stepper = () => {
  const progressCount = 3;
  return (
    <div className="h-[204px]  rounded-xl bg-white px-6 pb-6 pt-[26px]">
      <div className="flex items-center gap-2">
        <ArrowLeftIcon />
        <p>
          <span className="text-base font-bold">Product No. </span>
          <span className="text-label ">#PB122320490012</span>
        </p>
      </div>
      <div className="mt-6">
        <div className="  relative">
          <div className="absolute top-9 z-20 w-full">
            <div className="relative overflow-hidden">
              <div className="h-[2px] w-full bg-msGray "></div>
              <div
                className="absolute left-0 top-1/2 z-10 h-[2px]  -translate-y-1/2  bg-msGreen"
                style={{ width: `${16.6666666 * progressCount}%` }}
              ></div>
            </div>
          </div>

          {/*  absolute top-1/2  left-1/2 w-full z-20 -translate-x-1/2 -translate-y-1/2  */}
          <div className="absolute z-50  w-full   ">
            <div className="flex  items-center  justify-between ">
              {stepperItems?.map((item, index) => {
                if (item.isComplete) {
                  return (
                    <div className=" flex  flex-col items-center gap-5">
                      <IconWrapper iconWrapperStyle="ring  ring-msGreen">
                        {item.completeIcon}
                      </IconWrapper>

                      <p
                        className={clx(
                          "text-nowrap text-center text-label text-silver",
                          {
                            "text-msGreen": item.isComplete,
                          },
                        )}
                      >
                        {item.label}
                      </p>
                    </div>
                  );
                }
                return (
                  <div className="flex flex-col items-center gap-5">
                    <IconWrapper iconWrapperStyle="bg-msGray">
                      {item.inCompleteIcon}
                    </IconWrapper>

                    <p
                      className={clx("text-nowrap text-center text-silver", {
                        "text-msGreen": item.isComplete,
                      })}
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
