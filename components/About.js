import React from "react";
import Image from "next/image";

import avatarImage from "../public/avatar.webp";

function About() {
  return (
    <div className="section">
      <h1>About Me</h1>
      {/* className="start-heading" */}
      <hr />
      <div className="mt-8 md:grid md:grid-cols-12 md:gap-6 grid-cols-1 place-items-center">
        <div className="flex md:hidden justify-center mb-5">
          <Image
            className="rounded-2xl border-solid border-2 border-primary"
            src={avatarImage}
            alt="Hrushikesh Kedar"
            height={240}
            width={200}
            // TODO: Change height and width
          ></Image>
        </div>
        <div
          className="hidden
          md:flex
          justify-center
          md:col-span-4 md:justify-start
          mb-3"
        >
          <Image
            src={avatarImage}
            alt="Hrushikesh Kedar"
            className="h-72 rounded-2xl border-solid border-2 border-primary"
          ></Image>
        </div>
        <div className="text-justify md:col-span-8">
          <p className="font-text text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            facilis ad delectus, earum sequi molestias vitae praesentium quia
            accusantium, deserunt, numquam quis quasi velit? Culpa odit
            recusandae iure hic architecto?
            {/* I am a computer engineer, who is
            filled with enthusiasm about application developing, building
            projects & learning new technologies. I love developing ideas that
            come to my mind. Learning new technologies is my hobby along with
            playing games and watching web series and movies. I keep myself
            up-to-date with the new trends going around the world. Passionate
            about project planning and development. I have pleasant knowledge
            about native application development as I have developed few
            interesting projects using them. */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
