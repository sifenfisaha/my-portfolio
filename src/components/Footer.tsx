import React from "react";
import arrowIcon from "../assets/arrow.svg";

const Footer: React.FC = () => {
  return (
    <footer className="border-gray-300 md:px-12 px-4 border-b-0 border-2 border-t-0 ">
      <div className="py-10">
        <div className="w-full flex justify-end">
          <h2 className="italiana underline decoration-[2px] py-10 underline-offset-3 text-xl font-semibold md:text-4xl">
            Let’s Build Something Amazing Together 🚀
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 order-1 md:order-2">
          <div className="self-end max-w-xl order-2 md:order-1  ">
            <p>
              Whether you need a fresh website, a sleek design, or just someone
              to make you laugh with quirky code jokes, I’m here for it. Reach
              out and let’s create magic! <strong>[Contact Me]</strong>
            </p>
          </div>
          <div className="flex flex-col py-4 items-center md:mx-20  flex-1 max-w-sm justify-center ">
            <img
              className="text-gray-50 opacity-50 "
              src={arrowIcon}
              alt="arrw"
            />
            <p className="max-w-sm  text-gray-500 comic p-10 underline decoration-[1px] pb-1 underline-offset-3">
              "Oh, look at that font strutting —someone’s in a showoff mood!"
              ¬_¬
            </p>
          </div>
        </div>
        <div className="grid md:gap-10 grid-cols-2 py-10">
          <div className="">
            <h2 className="font-bold text-lg md:text-xl py-4">
              Find me online:
            </h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sifenfisaha/"
                  className="md:font-bold underline"
                >
                  LinkedIn:
                </a>{" "}
                <span className="hidden md:inline">
                  Let’s connect and talk ideas—or just admire each other's
                  career moves.
                </span>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/sifenfisaha"
                  className="underline md:font-bold"
                >
                  GitHub:
                </a>{" "}
                <span className="hidden md:inline">
                  Where all the coding magic happens—step into my nerdy kingdom.
                </span>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://t.me/sifendev"
                  className="md:font-bold underline"
                >
                  Telegram:
                </a>{" "}
                <span className="hidden md:inline">
                  Where is share all the coding magic into my nerdy kingdom.
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-lg md:text-xl py-4">Quick lInks:</h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="#projects"
                  className="md:font-bold underline"
                >
                  My Work:
                </a>{" "}
                <span className="hidden md:inline">
                  Dive into the good stuff—creativity starts here!
                </span>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#about"
                  className="underline md:font-bold"
                >
                  About Me:
                </a>{" "}
                <span className="hidden md:inline">
                  Warning: Personality overload ahead. Proceed with curiosity.
                </span>
              </li>
              <li>
                <a target="_blank" href="#" className="md:font-bold underline">
                  Hire Me:
                </a>{" "}
                <span className="hidden md:inline">
                  Let’s team up and make internet magic happen!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-between">
        <p className="text-gray-500  py-8">&copy; 2025 sifenfisaha.</p>
        <p className="text-gray-500  py-8">Designed and Developed with ❤️ </p>
      </div>
    </footer>
  );
};

export default Footer;

//
