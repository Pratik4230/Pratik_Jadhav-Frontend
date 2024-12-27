import { Reply, X } from "lucide-react";
import React from "react";

const Comments = () => {
  return (
    <div className="border-2 p-7  bg-white rounded-2xl  mt-2">
      <div className="flex justify-between mb-1 ">
        <p className="font-medium text-xl">Comments</p>
        <button className="bg-[#155e75] px-3 py-1 rounded-full text-white">
          Add
        </button>
      </div>

      <section className="border-b-2 ">
        <div className="flex justify-between p-5 ">
          <div className="flex items-center gap-2">
            <img
              src="https://png.pngtree.com/png-vector/20230103/ourmid/pngtree-a-girl-logo-hair-png-image_6550514.png"
              alt="logo"
              className="w-10 h-10 rounded-full border-2"
            />{" "}
            <div>
              <p className="font-semibold">Apeksha Ramteke</p>
              <p>Mar 8, 2024</p>
            </div>{" "}
          </div>
          <button className="flex items-center gap-1 bg-[#14b8a6] px-4 h-8 rounded-full text-white">
            <Reply size={24} strokeWidth={3} /> Reply
          </button>{" "}
        </div>

        <p className="   px-5 justify-self-center">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible.
        </p>

        <section className="flex justify-between p-3 ">
          {" "}
          <div className="border-2 flex items-center gap-2 justify-center px-3 py-1 rounded-full">
            {" "}
            <p>Jayesh</p>
            <p>
              {" "}
              <X size={22} strokeWidth={2} />
            </p>{" "}
          </div>
          <div className="border-2 flex items-center gap-2 text-white bg-[#14b8a6] justify-center px-3 py-1 rounded-full">
            {" "}
            <p>Reshmi</p>
            <p>
              <X size={22} strokeWidth={2} />
            </p>{" "}
          </div>
          <div className="border-2 flex items-center gap-2 justify-center px-3 py-1 rounded-full">
            {" "}
            <p>Apeksha</p>
            <p>
              {" "}
              <X size={22} strokeWidth={2} />
            </p>{" "}
          </div>{" "}
        </section>
      </section>

      <section className="border-b-2 ">
        <div className="flex justify-between p-5 ">
          <div className="flex items-center gap-2">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-an-orange-logo-with-a-man-in-sunglasses-image_2952388.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full border-2"
            />{" "}
            <div>
              <p className="font-semibold">Jayesh Sonawane</p>
              <p>Mar 8, 2024</p>
            </div>{" "}
          </div>
          <button className="flex items-center gap-1 bg-[#14b8a6] px-4 h-8 rounded-full text-white">
            <Reply size={24} strokeWidth={3} /> Reply
          </button>{" "}
        </div>

        <p className="   px-5 justify-self-center">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible.
        </p>

        <section className="flex justify-between p-3 ">
          {" "}
          <div className="border-2 flex items-center bg-[#14b8a6] text-white gap-2 justify-center px-3 py-1 rounded-full">
            {" "}
            <p>Jayesh</p>
            <p>
              {" "}
              <X size={22} strokeWidth={2} />
            </p>{" "}
          </div>
          <div className="border-2 flex items-center gap-2  justify-center px-3 py-1 rounded-full">
            {" "}
            <p>Reshmi</p>
            <p>
              <X size={22} strokeWidth={2} />
            </p>{" "}
          </div>
          <div className="border-2 flex items-center gap-2 justify-center px-3 py-1 rounded-full">
            {" "}
            <p>Apeksha</p>
            <p>
              {" "}
              <X size={22} strokeWidth={2} />
            </p>{" "}
          </div>{" "}
        </section>
      </section>
    </div>
  );
};

export default Comments;
