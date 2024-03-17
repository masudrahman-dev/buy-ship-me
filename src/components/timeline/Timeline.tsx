import React from "react";
import * as Separator from "@radix-ui/react-separator";
import Title from "../atoms/title/Title";
import PendingIcon from "../icons/panding-icon/PandingIcon";

const Timeline = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <Title>Product Timeline</Title>

      <div className="mt-6">
        {/* <!-- Item --> */}
        <div className="flex gap-x-3">
          {/* <!-- Icon --> */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10  flex justify-center gap-2 items-center">
              <PendingIcon iconWrapperStyle=" p-0 bg-white border  " />
              <p className="font-bold  text-msGreen">Delivered</p>
            </div>
          </div>
          {/* <!-- End Icon --> */}

          {/* <!-- Right Content --> */}
          <div className="grow pt-0.5 pb-8"></div>
          {/* <!-- End Right Content --> */}
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <div className="flex gap-x-3">
          {/* <!-- Icon --> */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <span className="flex flex-shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                A
              </span>
            </div>
          </div>
          {/* <!-- End Icon --> */}

          {/* <!-- Right Content --> */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
          {/* <!-- End Right Content --> */}
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Heading --> */}
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            31 Jul, 2023
          </h3>
        </div>
        {/* <!-- End Heading --> */}

        {/* <!-- Item --> */}
        <div className="flex gap-x-3">
          {/* <!-- Icon --> */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                <svg
                  className="flex-shrink-0 size-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 3h5v5" />
                  <path d="M8 3H3v5" />
                  <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
                  <path d="m15 9 6-6" />
                </svg>
              </span>
            </div>
          </div>
          {/* <!-- End Icon --> */}

          {/* <!-- Right Content --> */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Take a break ⛳️
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Just chill for now... 😉
            </p>
          </div>
          {/* <!-- End Right Content --> */}
        </div>
        {/* <!-- End Item --> */}
      </div>
    </div>
  );
};

export default Timeline;
