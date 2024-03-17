import React from "react";
import ProductDetails from "./ProductDetails";
import DeliveryAddress from "./delivery-address/DeliveryAddress";
import Title from "../atoms/title/Title";

const Details = () => {
  return (
    <>
      <div className="space-y-6">
        <ProductDetails />
        <DeliveryAddress />
        <div className="p-6 bg-white rounded-xl space-y-6">
          <Title>Claim for your refund</Title>

          <p className="leading-6">
            If you have paid your balance in full you will file a formal claim.
            If you have not paid your balance in full, you will file an informal
            claim.
          </p>

          <button
            className="border rounded text-label font-semibold py-3 px-4"
            type="button"
          >
            Make Refund
          </button>
        </div>
        <div className="p-6 bg-white rounded-xl space-y-6">
          <Title>Need for help?</Title>

          <p className="leading-6">
            If you have paid your balance in full you will file a formal claim.
            If you have not paid your balance in full, you will file an informal
            claim.
          </p>

          <button
            className="border rounded text-label font-semibold py-3 px-4"
            type="button"
          >
            Ask Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
