import React from "react";
import userData from "../helper/data";

function Skills() {
  const { icons } = userData;
  return (
    <div className="section">
      <h1>Skills</h1>
      {/* className="start-heading" */}
      <hr />
      <div className="mt-8 grid grid-cols-5 gap-2 md:gap-4">
        {icons.map((x, i) => (
          <a
            href={x.url}
            key={i}
            id="skillId"
            className="flex justify-center p-2 md:p-3 grow bg-primary hover:bg-white rounded-xl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              role="img"
              id="abc"
              className="w-12 h-12 md:h-16 md:w-16 fill-white"
              title={x.name}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{x.name}</title>
              <path d={x.path}></path>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Skills;
