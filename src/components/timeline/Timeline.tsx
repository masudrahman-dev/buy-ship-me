import React from "react";
import * as Separator from "@radix-ui/react-separator";
import Title from "../atoms/title/Title";
import PendingIcon from "../icons/panding-icon/PandingIcon";

const Timeline = () => {
  return (
    <div className="rounded-xl bg-white p-6">
      <div>
        <section className="">
          <Title>Product Timeline</Title>
          <div className="mt-6">
            <ul>
              <li className="relative flex items-baseline gap-6 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">18-8-2022</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores incidunt blanditiis dignissimos, enim earum
                    mollitia. dolor sit amet, consectetur adipisicing elit.
                    Maiores incidunt blanditiis dignissimos, enim earum
                    mollitia.dolor sit amet, consectetur adipisicing elit.
                    Maiores incidunt blanditiis dignissimos, enim earum
                    mollitia.dolor sit amet, consectetur adipisicing elit.
                    Maiores incidunt blanditiis dignissimos, enim earum
                    mollitia.dolor sit amet, consectetur adipisicing elit.
                    Maiores incidunt blanditiis dignissimos, enim earum
                    mollitia.
                  </p>
                </div>
              </li>
              <li className="relative flex items-baseline gap-6 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">18-8-2022</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </li>
              <li className="relative flex items-baseline gap-6 pb-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">18-8-2022</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
