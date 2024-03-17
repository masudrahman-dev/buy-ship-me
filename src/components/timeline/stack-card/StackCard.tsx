import CheckedIcon from "@/components/icons/CheckedIcon";
import React from "react";

const StackCard = ({ images, time,desc }) => {
  return (
    <div className="ms-6 mt-4 ">
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-center ">
        <CheckedIcon />
      </span>
      <div className="">
        <time className="block text-nowrap text-silver">
          {time || "01 January 2024 at 10:35am"}
        </time>
        <p className=" pb-3 pt-2">{desc}</p>

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
  );
};

export default StackCard;
