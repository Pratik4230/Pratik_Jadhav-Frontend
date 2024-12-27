import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navline from "./components/Navline";
import HeadBar from "./components/HeadBar";
import ProjectDetails from "./components/ProjectDetails";
import ProjectTimeline from "./components/ProjectTimeline";
import AssignmentReporting from "./components/AssignmentReporting";
import AddOns from "./components/AddOns";
import Attachment from "./components/Attachment";
import Comments from "./components/Comments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navline />

      <div className="bg-[#e6e6e6] flex flex-col px-16  ">
        {" "}
        <HeadBar />
        <div className="flex ">
          <section className="-mt-4 w-[67%] mr-3">
            <ProjectDetails />
            <ProjectTimeline />
            <AssignmentReporting />
            <AddOns />
          </section>
          <section className=" -mt-1 w-[33%]">
            <Attachment />
            <Comments />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
