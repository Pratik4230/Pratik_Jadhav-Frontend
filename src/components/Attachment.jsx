import { FileClock } from "lucide-react";
import React from "react";

const Attachment = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="border-2 p-7  bg-white rounded-2xl mb-1 ">
      <div className="flex justify-between mb-1 ">
        <p className="font-medium text-xl">Attachment</p>
        <button className="bg-[#155e75] px-3 py-1 rounded-full text-white">
          Add
        </button>
      </div>

      {arr.map((item) => (
        <div className="flex justify-between p-3 border-b-2 ">
          <div className="flex items-center gap-3">
            <p>
              <FileClock />
            </p>
            <section className="">
              <p className="font-semibold"> Test File for SO</p>
              <p>jayeshson@incquet.com</p>
            </section>
          </div>
          <div>
            <p>Feb 8, 2023 </p>
            <p>10:07:07 AM </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Attachment;
