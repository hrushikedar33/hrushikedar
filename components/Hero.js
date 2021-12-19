import Icons from "./Icons";
import Image from "next/image";

import heroImage from "../public/work.png";

function Hero() {
  return (
    <div
      className="flex justify-between items-center"
      style={{ height: "80vh" }}
    >
      <div>
        <h1 className="text-2xl md:text-4xl ">Hey! There 👋</h1>
        <h1 className="text-6xl my-1">
          <span className="text-primary transition-effect block md:inline">
            Hrushikesh
          </span>
          <span className="md:ml-2">Kedar</span>
        </h1>
        <h1 className="text-secondary">Computer Engineer</h1>
        <h2>Native Application Developer</h2>
        <Icons />
      </div>
      <div className="mt-10 ml-10 w-[400px] h-[400px] hidden lg:block">
        <Image src={heroImage} alt="Hero Image"></Image>
      </div>
    </div>
  );
}

export default Hero;
