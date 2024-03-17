import ProductDetails from "./components/product-details/ProductDetails";
import Stepper from "./components/stepper/Stepper";

const App = () => {
  return (
    <div className="max-w-[1441px]  mx-auto py-20  ">
      <div className=" grid grid-cols-2 gap-6">
        <div className="col-span-full  ">
          <Stepper />
        </div>
        <div className="col-span-1 ">
          <ProductDetails />
        </div>
        <div className="col-span-1 border">time line</div>
      </div>
    </div>
  );
};

export default App;
