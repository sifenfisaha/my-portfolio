import React from "react";
import arrowIcon from "../assets/arrow.svg";
import Project from "./Project";
const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="border-gray-300 px-6 py-6  border-b-0 border-2 border-t-0"
    >
      <h1 className="manjaro text-4xl max-w-xl">
        Featured Work (AKA My Greatest Hits)*
      </h1>
      <div className="flex flex-col items-start md:mx-20  flex-1 max-w-sm justify-center ">
        <img
          className="text-gray-50 ml-9 opacity-50 pt-10"
          src={arrowIcon}
          alt="arrw"
        />
        <p className="max-w-sm  text-gray-500 comic p-5 underline decoration-[1px] pb-1 underline-offset-3">
          "Whoa, did the font just go undercover? I can't read this spy code!"
          😂
        </p>
        <p className="max-w-sm self-end text-gray-500 comic p-5 text-end underline decoration-[1px] pb-1 underline-offset-3">
          "Just read it! <br /> This font needs a translator!" 😂
        </p>
      </div>
      <div className="py-8 flex flex-col gap-10">
        <div className="flex gap-20 md:p-10">
          <img className="hidden md:inline" src="/1 1.svg" alt="hi" />
          <Project />
        </div>
        <div className="flex gap-20 md:p-10">
          <Project />
          <img
            className="md:inline-block hidden w-[360px]"
            src="/Layer 2.svg"
            alt="hi"
          />
        </div>
        <div className="flex gap-20 md:p-10">
          <img
            className="md:inline-block hidden w-[360px]"
            src="/3 1.svg"
            alt="hi"
          />
          <Project />
        </div>
      </div>
      <p className="text-gray-500 my-4">
        "Take the leap, scroll a bit, and discover where ideas come to life! ^_~
        ✨"
      </p>
    </section>
  );
};

export default Projects;
