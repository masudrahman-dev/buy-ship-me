import Title from "@/components/atoms/title/Title";
import EmailIcon from "@/components/icons/EmailIcon";
import NavigateIcon from "@/components/icons/NavigateIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import UserIcon from "@/components/icons/UserIcon";
import { HomeIcon } from "@radix-ui/react-icons";
import React from "react";

const DeliveryAddress = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div>
        <Title>Delivery Address</Title>
        <div className="flex items-center gap-2 my-6">
          <HomeIcon className="" />
          <p className="font-bold text-base">Home</p>
        </div>

        <hr className="my-6" />

        <div className="space-y-6">
          <div className="flex items-center gap-2 my-6">
            <UserIcon iconWrapperStyle="border bg-white w-8 h-8 p-0 text-nowrap " />
            <p>Eddie Thomas</p>
          </div>

          <div className="flex items-center gap-2 my-6">
            <PhoneIcon iconWrapperStyle="border bg-white w-8 h-8 p-0 text-nowrap " />
            <p>+8801 8490 02390</p>
          </div>
          <div className="flex items-center gap-2 my-6">
            <EmailIcon iconWrapperStyle="border bg-white w-8 h-8 p-0 text-nowrap " />
            <p>eddiethomas@moveon.com.bd</p>
          </div>
          <div className="flex items-center gap-2 my-6">
            <NavigateIcon iconWrapperStyle="border bg-white w-8 h-8 p-0 text-nowrap " />
            <p>House 45, Block E, Road 8, Mirpur-12, Dhaka-1216</p>
          </div>

          <button
            type="button"
            className="block border text-nowrap py-[6px] px-4
             rounded-full border-msGreen bg-msGreen-light text-msGreen"
          >
            Default Shipping & Billing Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
