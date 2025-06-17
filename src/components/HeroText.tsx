import React from "react";

const HeroText: React.FC = () => {
  return (
    <div className="relative w-full mt-20">
      <h1 className="splash md:text-[180px] text-center text-6xl pt-20 py-30 md:pt-28">
        I'm Sifen
      </h1>
      <h2 className="rage absolute text-9xl top-0 left-1/2 transform  -translate-x-1/2 md:text-[210px]  text-black/20">
        HELLO!
      </h2>
    </div>
  );
};

export default HeroText;
