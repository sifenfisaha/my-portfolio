import React from "react";
import HeroText from "./HeroText";

const Hero: React.FC = () => {
  return (
    <section className="w-full border-gray-300 px-6 border-b-0 border-2">
      <HeroText />
      <div className="flex md:justify-end">
        <div className="grid md:grid-cols-2 md:w-[70%] gap-10">
          <div className="istok ">
            <h2 className="underline text-xl font-semibold decoration-[1px] pb-1 underline-offset-3 inter">
              This Portfolio?*
            </h2>
            <p>
              It’s kind of like me: straightforward, charming, and packed with
              personality—if you hang around long enough, you might even catch a
              joke or two! ^_~ 🎉
            </p>
          </div>
          <div className="istok">
            <p>
              Hi, I’m Sifen! I’m a self-taught front-end developer who loves
              turning ideas into real, usable things on the web. I care about
              clean code, good design, and making stuff that actually works.
              Still learning, always improving—but ready to build something
              awesome together. Let’s create!
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-400  py-12">
        "Keep those fingers busy and scroll down—there’s more awesomeness
        waiting! ^_~ 🚀"
      </p>
    </section>
  );
};

export default Hero;

// Hey, I’m Sifen!
// I’m a self-taught front-end developer who loves turning ideas into real, usable things on the web. I care about clean code, good design, and making stuff that actually works. Still learning, always improving—but ready to build something awesome together. Let’s create!
