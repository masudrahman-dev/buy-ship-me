import { HomeIcon } from "@radix-ui/react-icons";
import Title from "./components/atoms/title/Title";
import ProductDetails from "./components/product-details/ProductDetails";
import Stepper from "./components/stepper/Stepper";
import IconWrapper from "./components/icons/IconWrapper";
import UserIcon from "./components/icons/UserIcon";
import EmailIcon from "./components/icons/EmailIcon";
import PhoneIcon from "./components/icons/PhoneIcon";
import NavigateIcon from "./components/icons/NavigateIcon";
import DeliveryAddress from "./components/product-details/delivery-address/DeliveryAddress";
import Details from "./components/product-details/Details";
import Timeline from "./components/timeline/Timeline";

const App = () => {
  return (
    <div className="max-w-[1441px]  mx-auto py-20  ">
      <div className=" grid grid-cols-2 gap-6">
        <div className="col-span-full  ">
          <Stepper />
        </div>
        <div className="col-span-1  ">
          <Details />
        </div>

        <div className="col-span-1">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default App;
