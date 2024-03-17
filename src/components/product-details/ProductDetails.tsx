import React from "react";
import ProductDetailsCard from "./product-details-card/ProductDetailsCard";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const ProductDetails = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div>
        <div>
          <p className="text-base font-bold">Product details</p>
          <div className="flex  items-start gap-6 mt-6">
            <img
              className="rounded-md"
              src="https://picsum.photos/100/100"
              alt=""
            />
            <div className="space-y-2">
              <p className="text-base font-semibold line-clamp-2">
                Sports breathable trend universal casual footwear, Korean style,
                for running, softs sol...
              </p>
              <p>
                <span className=" text-silver text-base">Category: </span>
                <span className="text-base font-medium">Shoe </span>
              </p>
              <p>
                <span className=" text-silver text-base">Size: </span>
                <span className="text-base font-medium">42 </span>
              </p>
              <p>
                <span className=" text-silver text-base">Quantity: </span>
                <span className="text-base font-medium">1</span>
              </p>
              <p>
                <span className=" text-silver text-base">Total price: </span>
                <span className="text-base font-medium">৳820 </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-base font-bold">All Variations (10)</p>
          <div className="space-y-6">
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
          </div>
          <button
            type="button"
            className="w-full flex gap-2 items-center  mt-6 justify-center bg-msBlue-100 rounded-md py-[10px]"
          >
            <span className="tex-black">Show more 5 pieces</span>
            <ChevronDownIcon />
          </button>
        </div>

        <hr className="my-6" />

        <ul className="space-y-4">
          <li>
            <p className="flex justify-between font-bold text-base items-center ">
              <span>Subtotal </span>
              <span>৳6000</span>
            </p>
          </li>

          <li className="list-disc list-outside ml-4">
            <p className="flex gap-1 items-center justify-between ">
              <span className="text-base font-semibold">Buying Price </span>
              <span>10 pieces</span>
            </p>
          </li>
          <li>
            <p className="flex gap-1 items-center justify-between ">
              <span>Domestic delivery charge: </span>
              <span>৳200</span>
            </p>
          </li>
          <li>
            <p className="flex gap-1 items-center justify-between ">
              <span>Buying Price:</span>
              <span>৳5700</span>
            </p>
          </li>
          <li className="list-disc list-outside ml-4 ">
            <p className="flex gap-1 items-center justify-between ">
              <span className="text-base font-semibold">
                Shipping & Custom
              </span>
            </p>
          </li>
          <li>
            <p className="flex gap-1 items-center justify-between ">
              <span>Repacking charge: </span>
              <span>৳75</span>
            </p>
          </li>

          <li>
            <p className="flex gap-1 items-center justify-between ">
              <span>Shipping Price (680x6.5) </span>
              <span>৳525</span>
            </p>
          </li>
        </ul>
        <hr className="my-6" />

        <p className="flex justify-between font-bold text-base items-center ">
          <span>Subtotal </span>
          <span>৳6000</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
