
import Stepper from "./components/stepper/Stepper";

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
