import React from "react";

const AssignmentReporting = () => {
  const rawData = [
    {
      text: "Sales Rep",
      subText: "Jayesh Sonawane",
    },
    {
      text: "Account Manager",
      subText: "Jayesh CRM Testing",
    },
    {
      text: "Project Owner",
      subText: "Jayesh Sonawane",
    },
    {
      text: "SEO Strategist",
      subText: "Jayesh CRM Testing",
    },
  ];
  return (
    <div className="flex justify-between  w-full  px-1   ">
      {" "}
      <section className="bg-white rounded-2xl mr-2 p-5 w-[49%] ">
        {" "}
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-lg ">Assignment Section</h1>
          <button className="bg-[#155e75] px-3 py-1 rounded-full  text-white ">
            Reassign
          </button>
        </div>{" "}
        <div className="grid grid-cols-2  ">
          {rawData.map((item) => (
            <div className="border-b-2 py-3 flex items-center ">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-an-orange-logo-with-a-man-in-sunglasses-image_2952388.jpg"
                alt="logo"
                className="w-10 h-10 mr-2 rounded-full border-2"
              />{" "}
              <div className="">
                {" "}
                <p className="font-medium">{item.text}</p>
                <p>{item.subText}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white rounded-2xl p-5  ml-2  w-[49%] ">
        {" "}
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg ">Assignment Section</h1>
          <button className="bg-[#155e75] px-3 py-1 rounded-full  text-white ">
            Reassign
          </button>
        </div>{" "}
        <div className="grid grid-cols-2  ">
          {rawData.map((item) => (
            <div className="border-b-2 py-3 flex items-center ">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-an-orange-logo-with-a-man-in-sunglasses-image_2952388.jpg"
                alt="logo"
                className="w-10 h-10 mr-2 rounded-full border-2"
              />{" "}
              <div className="">
                {" "}
                <p className="font-medium">{item.text}</p>
                <p>{item.subText}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssignmentReporting;
