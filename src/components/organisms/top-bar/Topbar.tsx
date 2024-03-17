import BangladeshFlagIcon from "@/components/icons/BangladeshFlagIcon";
import HeadPhoneIcon from "@/components/icons/HeadPhoneIcon";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon copy";
import NavigationOutlineIcon from "@/components/icons/NavigationOutlineIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-[9px] text-silver">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <PhoneIcon />
          <p>MoveOn app</p>
        </div>
        <div className="flex gap-2 items-center">
          <HeadPhoneIcon />
          <p>Support</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <HeartOutlineIcon />
          <p>Wish list</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <NavigationOutlineIcon />
            <p>Ship in</p>
          </div>
          <div className="flex gap-2 items-center">
            <BangladeshFlagIcon />
            <p>EN/ BDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
