import React from "react";
import ProjectCard from "./ProjectCard";
import userData from "../helper/data";
import Link from "next/link";

function Projects() {
  const { projectsData } = userData;
  return (
    <div className="section">
      <h1>Projects</h1>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projectsData.map(({ title, slug, desc, skills, githubUrl }, i) => (
          <ProjectCard
            key={i}
            title={title}
            slug={slug}
            desc={desc}
            skills={skills}
            githubUrl={githubUrl}
          />
        ))}
        <Link
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <h1 className="text-center bg-primary text-white grow flex justify-center items-center p-3 rounded">
            All...
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
