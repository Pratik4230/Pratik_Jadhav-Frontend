import React from "react";

const ProjectDetails = () => {
  const rawData1 = [
    {
      text_left: "Monthly Content Units",

      text_right: "Increment Month",
    },
    {
      text_left: "Monthly Backlinks",

      text_right: "Total Spend",
    },
  ];

  const rawData2 = [
    {
      text: "First Main Geographic Target",
      info: "Chicago",
    },
    {
      text: " Additional Geographic Target",
      info: "Nationwide",
    },
    {
      text: " Practice area or Area to Target",
      info: "None",
    },
    {
      text: "Target Practice Area",
      info: " Nationwide",
    },
    {
      text: "Estimated Starting Month ",
      info: "Jun 11, 2024",
    },
    {
      text: "Content Live date",
      info: "Jun 11, 2024",
    },
    {
      text: " Cancel Date",
      info: "Jun 11, 2023",
    },
    {
      text: "Content Approver ",
      info: "Jun 11, None",
    },
    {
      text: "Notes ",
      info: "Impressive! Though it seems the drag feature could be improved.",
    },
    {
      text: "Free Consultations ",
      info: "Yes",
    },
  ];

  return (
    <div className="p-3 bg-white rounded-3xl w-full my-3  ">
      <h1 className=" bg-[#155e75] h-16 flex justify-start items-center p-7 font-semibold text-white rounded-2xl ">
        Project Details
      </h1>

      <div className=" grid grid-cols-2 px-7">
        {rawData1.map((item) => {
          return (
            <div key={item.text_left} className=" font-semibold text-lg  ">
              <p className="border-t-2 p-3  ">
                {" "}
                <span>{item.text_left}</span> 1
              </p>
              <p className="border-t-2 p-3 ">
                {" "}
                <span>{item.text_right}</span> 1
              </p>
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-2 px-7  ">
        {rawData2.map((item) => {
          return (
            <div key={item.text} className="border-t-2 p-3 ">
              <p className="font-semibold text-medium ">{item.text}</p>
              <p className=" w-[75%] ">{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
