import { ReactNode } from "react";
import Title from "../atoms/title/Title";
import CircleIcon from "../icons/circle-icon/CircleIcon";
import Delivered from "./delivered/Delivered";
import Courier from "./courier/Courier";
import TimelineStack from "./TimelineStack/TimelineStack";
import CourierIcon from "../icons/courier-icon/CourierIcon";
import ReceivedIcon from "../icons/received-icon/ReceivedIcon";
import DestinationIcon from "../icons/destination-icon/DestinationIcon";
import PendingIcon from "../icons/panding-icon/PandingIcon";
import WarehouseIcon from "../icons/warehouse-icon/WarehouseIcon";
import PurchasedIcon from "../icons/purchased-icon/PurchasedIcon";

const Timeline = () => {
  return (
    <div className="rounded-xl bg-white ">
      <div className="p-6">
        <Title>Product Timeline</Title>
      </div>
      <div className="pl-6">
        <div className="relative space-y-8  border-s-2  ">
          <TimelineStack images={[1, 2, 3]} />
          <TimelineStack
            iconTitleClass="-start-3"
            iconTitle={<CourierIcon />}
            label="Delivered"
          />
          <TimelineStack
            iconTitleClass="-start-3"
            timeList={[1, 2, 3, 4]}
            iconTitle={<ReceivedIcon />}
            label="Received at MoveOn"
          />

          <TimelineStack
            iconTitleClass="-start-3"
            timeList={[1, 2, 3]}
            iconTitle={<DestinationIcon />}
            label="Way To Destination"
          />
        </div>
      </div>

      <div className="bg-[#F3FFF8] pl-6">
        <div className="relative  space-y-8 border-s-2 pt-6   ">
          <TimelineStack
            iconTitleClass="-start-3"
            timeList={[1, 2, 3, 4]}
            iconTitle={<WarehouseIcon />}
            label="At China Warehouse"
          />
        </div>
      </div>
      <div className="relative ml-6 space-y-8 border-s-2 pt-6  ">
        <TimelineStack
          iconTitleClass="-start-3"
          timeList={[1, 2, 3]}
          iconTitle={<PurchasedIcon />}
          label="Purchased"
        />
      </div>

      <div className="relative ml-6 space-y-8 border-s-2   ">
        <TimelineStack
          iconTitleClass="-start-2"
          timeList={[1, 2, 3]}
          iconTitle={<PendingIcon />}
          label="Pending"
        />
      </div>
    </div>
  );
};

export default Timeline;
