import React from "react";

const ProductDetailsCard = () => {
  return (
    <div className="flex  items-start gap-6 mt-6">
      <img className="rounded-md" src="https://picsum.photos/100/100" alt="" />

      <div className="space-y-2">
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
  );
};

export default ProductDetailsCard;
