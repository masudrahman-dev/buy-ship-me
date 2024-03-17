import CourierIcon from "@/components/icons/courier-icon/CourierIcon";
import DestinationIcon from "@/components/icons/destination-icon/DestinationIcon";
import PendingIcon from "@/components/icons/panding-icon/PandingIcon";
import PurchasedIcon from "@/components/icons/purchased-icon/PurchasedIcon";
import ReceivedIcon from "@/components/icons/received-icon/ReceivedIcon";
import WarehouseIcon from "@/components/icons/warehouse-icon/WarehouseIcon";

const stepperItems = [
  {
    completeIcon: <PendingIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <PendingIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "Pending",
    isComplete: true,
  },
  {
    completeIcon: <PurchasedIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <PurchasedIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "Purchased",
    isComplete: true,
  },
  {
    completeIcon: <WarehouseIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <WarehouseIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "At China Warehouse",
    isComplete: true,
  },
  {
    completeIcon: <DestinationIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <DestinationIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "Way to destination",
    isComplete: false,
  },
  {
    completeIcon: <ReceivedIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <ReceivedIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "Received at MoveOn",
    isComplete: false,
  },
  {
    completeIcon: <CourierIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <CourierIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "At Courier",
    isComplete: false,
  },
  {
    completeIcon: <PendingIcon iconWrapperStyle="ring  ring-msGreen" />,
    inCompleteIcon: (
      <PendingIcon fillColor="#6B717A80" iconWrapperStyle="bg-msGray" />
    ),
    label: "Delivered",
    isComplete: false,
  },
];

export default stepperItems;
