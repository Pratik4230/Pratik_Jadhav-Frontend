import { Check } from "lucide-react";
import React from "react";

const ProjectTimeline = () => {
  const count = [1, 2, 3, 4];

  const rawData = [
    {
      Heading: "Project Assigned",
      subText: "some subtext",
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
      date: "Jan 31",
      time: "03:06:40 PM",
    },
    {
      Heading: "Project Active",
      subText: "some subtext",
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible",
      date: "Jan 31",
      time: "03:06:40 PM",
    },
    {
      Heading: "Project Added",
      subText: "some subtext",
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible",
      date: "Jan 31",
      time: "03:06:40 PM",
    },
    {
      Heading: "Project Active",
      subText: "some subtext",
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible",
      date: "Jan 31",
      time: "03:06:40 PM",
    },
    {
      Heading: "Project Active",
      subText: "some subtext",
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible",
      date: "Jan 31",
      time: "03:06:40 PM",
    },
  ];

  return (
    <div className=" p-5 bg-white my-3 w-full rounded-2xl  ">
      <section className="flex justify-between items-center ">
        {" "}
        <h1 className="font-semibold text-lg">Project Timeline</h1>{" "}
        <button className="bg-[#155e75] px-4 py-2 rounded-full font-medium text-white">
          Add
        </button>{" "}
      </section>

      <main className="flex gap-4 pt-7  ">
        <section className="flex flex-col items-center w-20  p-4 pt-9 ">
          <div className="text-white bg-slate-300 h-12  w-12 rounded-full flex justify-center items-center">
            <Check />
          </div>
          {count.map((item) => (
            <>
              {" "}
              <p className="border-2 h-28"></p>
              <div className=" bg-white h-12 border-2 border-slate-300 w-12 rounded-full flex justify-center items-center">
                <p className="h-[45%] w-[45%] rounded-full bg-slate-300"></p>
              </div>{" "}
            </>
          ))}
        </section>

        <section>
          {rawData.map((item) => (
            <section className="p-4 flex bg-slate-100 items-center justify-between h-36 rounded-2xl w-full mb-4 ">
              <div>
                <h1 className="font-semibold text-xl">{item.Heading}</h1>
                <p className="font-medium">{item.subText}</p>
                <p className="">{item.text}</p>
              </div>

              <div className="w-24 ">
                <p className="font-semibold">{item.date}</p>
                <p>{item.time}</p>
              </div>
            </section>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProjectTimeline;
