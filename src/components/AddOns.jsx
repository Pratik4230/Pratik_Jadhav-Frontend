import { Pencil } from "lucide-react";
import React from "react";

const AddOns = () => {
  return (
    <div className="p-5 pr-14 bg-white my-3 w-full rounded-2xl ">
      <div className="flex justify-between">
        <p className="font-medium text-lg"> Add - Ons</p>
        <button className="bg-[#155e75] px-3 py-1 rounded-full text-white">
          Add
        </button>
      </div>

      <div className="flex  border-b p-4">
        {" "}
        <p className="mx-16">Name</p> <p className="mx-5">Spend</p>{" "}
      </div>

      <div className="flex border-b p-4">
        {" "}
        <p>
          <Pencil />
        </p>{" "}
        <p className="mx-8">SEO Spanish</p> <p className="mx-5">500.00</p>{" "}
        <button className="bg-[#155e75] px-3 py-1 rounded-full text-white ml-7">
          TN-22411
        </button>{" "}
      </div>
      <div className="flex  p-4">
        {" "}
        <p>
          <Pencil />
        </p>{" "}
        <p className="mx-8">SEO Spanish</p> <p className="mx-5">500.00</p>{" "}
        <button className="bg-[#155e75] px-3 py-1 rounded-full text-white ml-7">
          TN-22411
        </button>{" "}
      </div>
    </div>
  );
};

export default AddOns;
