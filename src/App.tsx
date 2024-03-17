import { ArrowLeftIcon } from "@radix-ui/react-icons";

import stepperItems from "./components/stepper/stepper-items/stepperItems";
import clx from "./utils/clx";

const App = () => {
  const progressCount = 3;

  return (
    <div className="max-w-[1441px]  mx-auto  ">
      <div className=" grid grid-cols-2">
        <div className="col-span-full h-[204px]  pt-[26px] px-6 pb-6 bg-white rounded-xl">
          <div className="flex items-center gap-2">
            <ArrowLeftIcon />
            <p>
              <span className="text-base font-bold">Product No. </span>
              <span className="text-label ">#PB122320490012</span>
            </p>
          </div>
          <div className="">
            <div className="  relative">
              {/* <div className="">
                <div className="relative overflow-hidden">
                  <div className="bg-msGray h-[2px] w-full "></div>
                  <div
                    className="bg-msGreen h-[2px] absolute top-1/2 left-0  -translate-y-1/2  z-10"
                    style={{ width: `${16.666666667 * progressCount}%` }}
                  ></div>
                </div>
              </div> */}

              {/*  absolute top-1/2  left-1/2 w-full z-20 -translate-x-1/2 -translate-y-1/2  */}
              <div className="">
                <div className="flex  justify-between  gap-[88px] items-center ">
                  {stepperItems?.map((item, index) => {
                    if (item.isComplete) {
                      return (
                        <div className=" flex flex-col items-center gap-5">
                          {item.completeIcon}

                          <p
                            className={clx(
                              "text-silver text-center text-nowrap",
                              {
                                "text-msGreen": item.isComplete,
                              }
                            )}
                          >
                            {item.label}
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div className="flex flex-col items-center gap-5">
                        {item.inCompleteIcon}

                        <p
                          className={clx(
                            "text-silver text-center text-nowrap",
                            {
                              "text-msGreen": item.isComplete,
                            }
                          )}
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
        {/* <div className="col-span-1 border">details</div>
        <div className="col-span-1 border">time line</div> */}
      </div>
    </div>
  );
};

export default App;
