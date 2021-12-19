import React from "react";
import ProjectCard from "./ProjectCard";
import userData from "../helper/data";

function Projects() {
  const { projectsData } = userData;
  return (
    <div className="section">
      <h1>Projects</h1>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projectsData.map(({ title, link, desc, skills, githubUrl }, i) => (
          <ProjectCard
            key={i}
            title={title}
            link={link}
            desc={desc}
            skills={skills}
            githubUrl={githubUrl}
          />
        ))}
        <a
          href=""
          className=" bg-primary text-white grow flex justify-center items-center p-3 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-center">All...</h1>
        </a>
      </div>
    </div>
  );
}

export default Projects;
