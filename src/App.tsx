
import Stepper from "./components/stepper/Stepper";

const App = () => {


  return (
    <div className="max-w-[1441px]  mx-auto  ">
      <div className=" grid grid-cols-2">
        <div className="col-span-full  ">
          <Stepper />
        </div>
        {/* <div className="col-span-1 border">details</div>
        <div className="col-span-1 border">time line</div> */}
      </div>
    </div>
  );
};

export default App;
