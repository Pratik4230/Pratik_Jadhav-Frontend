import { BellDot, ChevronDown, Pencil } from "lucide-react";
import React from "react";

const HeadBar = () => {
  const rawData = [
    "View Sitemap",
    "ViewCs",
    "KW Main",
    "Update Increment",
    "Upgrade / downgrade",
  ];

  return (
    <div className="rounded-2xl bg-white py-7 px-9 flex justify-between my-5 ">
      <section className="  ">
        <h1 className="text-xl font-semibold">#999:Project Name</h1>
        <div className="flex">
          <p className="mr-9">Hinjewadi</p>
          <div className="flex">
            {" "}
            <p className="bg-[#fecdd3] text-[#e11d48] py-0.5 px-4 mx-3 rounded-full flex items-center ">
              {" "}
              <span className="bg-[#e11d48]  h-1.5 w-1.5 rounded-full mr-2 "></span>{" "}
              Cancelled
            </p>{" "}
            <p className="bg-[#fef9c3]  text-[#eab308] py-0.5 px-4 mx-3 rounded-full flex items-center ">
              <span className=" bg-[#eab308] h-1.5 w-1.5 rounded-full mr-2 "></span>{" "}
              Pause
            </p>{" "}
          </div>
        </div>
      </section>

      <section className="  border-3   ">
        <div className="flex justify-evenly justify-self-end items-center w-64 my-2 ">
          {" "}
          <p className="bg-[#d97706] p-2 px-4 rounded-3xl text-white flex ">
            {" "}
            Pause
            <span className="">
              <ChevronDown />
            </span>{" "}
          </p>
          <p>
            <Pencil />{" "}
          </p>{" "}
          <p>
            <BellDot />
          </p>{" "}
        </div>
        <div className="flex  ">
          {rawData.map((item) => (
            <p
              key={item}
              className="py-1 px-2 h-9 rounded-xl hover:bg-[#155e75] hover:text-white border  border-black mx-3 font-medium"
            >
              {item}
            </p>
          ))}
        </div>{" "}
      </section>
    </div>
  );
};

export default HeadBar;
