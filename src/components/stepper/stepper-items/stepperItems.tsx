import CourierIcon from "@/components/icons/courier-icon/CourierIcon";
import DestinationIcon from "@/components/icons/destination-icon/DestinationIcon";
import PendingIcon from "@/components/icons/panding-icon/PandingIcon";
import PurchasedIcon from "@/components/icons/purchased-icon/PurchasedIcon";
import ReceivedIcon from "@/components/icons/received-icon/ReceivedIcon";
import WarehouseIcon from "@/components/icons/warehouse-icon/WarehouseIcon";

const stepperItems = [
  {
    completeIcon: <PendingIcon />,
    inCompleteIcon: <PendingIcon fillColor="#6B717A80" />,
    label: "after:content-['Pending']",
    isComplete: true,
  },
  {
    completeIcon: <PurchasedIcon />,
    inCompleteIcon: <PurchasedIcon fillColor="#6B717A80" />,
    label: "after:content-['Purchased']",
    isComplete: true,
  },
  {
    completeIcon: <WarehouseIcon />,
    inCompleteIcon: <WarehouseIcon fillColor="#6B717A80" />,
    label: "after:content-['At_China_Warehouse']",
    isComplete: true,
  },
  {
    completeIcon: <DestinationIcon />,
    inCompleteIcon: <DestinationIcon fillColor="#6B717A80" />,
    label: "after:content-['Way_to_destination']",
    isComplete: true,
  },
  {
    completeIcon: <ReceivedIcon />,
    inCompleteIcon: <ReceivedIcon fillColor="#6B717A80" />,
    label: "after:content-['Received_at_MoveOn']",
    isComplete: false,
  },
  {
    completeIcon: <CourierIcon />,
    inCompleteIcon: <CourierIcon fillColor="#6B717A80" />,
    label: "after:content-['At_Courier']",
    isComplete: false,
  },
  {
    completeIcon: <PendingIcon />,
    inCompleteIcon: <PendingIcon fillColor="#6B717A80" />,
    label: "after:content-['Delivered']",
    isComplete: false,
  },
];

export default stepperItems;
