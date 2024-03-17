import { ReactNode } from "react";
import Title from "../atoms/title/Title";
import CircleIcon from "../icons/circle-icon/CircleIcon";
import Delivered from "./delivered/Delivered";



const Timeline = () => {
  return (
    <div className="rounded-xl bg-white p-6">
      <Title>Product Timeline</Title>
      <div>
        <div className="relative space-y-8 border-s border-s-2  ">
          <Delivered />
          <Delivered />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
