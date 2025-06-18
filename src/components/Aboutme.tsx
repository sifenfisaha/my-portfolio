import React from "react";
import arrowIcon from "../assets/arrow.svg";
import catImage from "../assets/cat_gif.svg";
import farmer from "../assets/Frame.svg";

export const Aboutme: React.FC = () => {
  return (
    <section
      id="about"
      className=" border-gray-300 px-6 border-b-0 border-2 border-t-0"
    >
      <h1 className="italiana w-full text-xl font-semibold md:text-4xl underline decoration-[2px] pb-1 underline-offset-3">
        About Me (Spoiler: I’m Awesome… <br /> or just awkwardly humble, who
        knows?)
      </h1>
      <div className="flex flex-col items-center md:mx-20  flex-1 max-w-sm justify-center ">
        <img
          className="text-gray-50 opacity-50 pt-10"
          src={arrowIcon}
          alt="arrw"
        />
        <p className="max-w-sm  text-gray-500 comic p-10 underline decoration-[1px] pb-1 underline-offset-3">
          "Oh, look at that font strutting —someone’s in a showoff mood!" ¬_¬
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <img className="self-end" src={catImage} alt="catimg" />
        <div className=" flex flex-col gap-6 inter">
          <p>
            Hi, I’m Sifen Fisaha — a self-taught front-end developer and a Civil
            and Architectural Engineering student at Adama Science and
            Technology University.
          </p>
          <p>
            I specialize in building responsive, accessible, and engaging user
            interfaces using modern technologies like{" "}
            <strong>
              {" "}
              React, Tailwind CSS, TypeScript, React Router, Zustand, Redux
              Toolkit, and Framer Motion.
            </strong>
            From smooth animations to clean component architecture, I enjoy
            crafting web experiences that are both functional and beautiful.
          </p>
          <p>
            Learning to code has been one of the most rewarding challenges I’ve
            taken on. I’ve built several personal projects, learned how to
            manage state, work with reusable components, and write clean,
            maintainable code. I’m a fast learner, passionate about web
            technologies, and constantly pushing myself to grow.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end py-10">
        <h2 className="italiana underline decoration-[2px] pt-20 underline-offset-3 text-xl font-semibold md:text-4xl">
          What I Bring to the Table (Besides Snacks)*
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="self-center order-2 md:order-1 flex flex-col gap-10">
          <p>
            -<span className="font-bold">Web Design</span>: Crafting modern,
            responsive, and visually engaging designs that provide an intuitive
            user experience. Focused on UI/UX best practices, typography, color
            theory, and mobile-first design.
          </p>

          <p>
            -<span className="font-bold">Frontend Development</span>: Building
            fast, interactive, and scalable web applications using{" "}
            <span className="font-bold inter">
              {" "}
              React, Next.js, TypeScript, and Tailwind CSS
            </span>{" "}
            . Implementing component-based architecture and state management for
            seamless user interactions.
          </p>
          <p>
            -<span className="font-bold">API Integration</span>: Connecting
            frontend applications with RESTful APIs, and WebSockets to enable
            real-time data fetching and dynamic user experiences. Ensuring
            secure authentication and efficient API handling.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <img
            className="block w-1/2 h-auto object-contain"
            src={farmer}
            alt="cook"
          />
        </div>
      </div>
      <p className="text-gray-500  py-8">
        "Just below lies the realm of brilliance—projects that speak louder than
        words. ^_~ 💡"
      </p>
    </section>
  );
};
