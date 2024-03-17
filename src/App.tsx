import Stepper from "./components/stepper/Stepper";

import Details from "./components/product-details/Details";
import Timeline from "./components/timeline/Timeline";

const App = () => {
  return (
    <div className="mx-auto  max-w-[1441px] py-20  ">
      <div className="mb-12 h-40 w-full border">header</div>
      <div className="flex gap-6">
        <div className="w-[280px] border bg-white">sidebar</div>

        <div>
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
      </div>
    </div>
  );
};

export default App;
