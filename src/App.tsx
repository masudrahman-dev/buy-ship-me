import React from "react";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import Topbar from "./components/organisms/top-bar/Topbar";
import Navbar from "./components/organisms/navbar/Navbar";

const App = () => {
  return (
    <div className="max-w-[1441px] mx-auto  ">
      <Topbar />
      {/* <Navbar /> */}
    </div>
  );
};

export default App;
