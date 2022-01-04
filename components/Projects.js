import React from "react";
import userData from "../helper/data";
import Link from "next/link";
import { siGithub } from "simple-icons/icons";

function Projects() {
  const { projectsData } = userData;
  return (
    <div className="section">
      <h1>Projects</h1>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projectsData.map(({ title, slug, desc, skills, githubUrl }, i) => (
          <ProjectsCard
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

const ProjectsCard = ({ title, slug, desc, skills, githubUrl }) => {
  return (
    <Link
      href={"/project/" + slug}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <div className="bg-primary p-3 rounded grow hover:cursor-pointer">
        <h2>{title}</h2>
        <p className="h-24 overflow-hidden text-clip">{desc}</p>
        <div className="flex justify-between">
          <div className="flex overflow-clip">
            {skills.map((x, i) => (
              <a key={i}>
                <div className="p-2 rounded-xl bg-secondary text-white mr-1 text-xs">
                  {x}
                </div>
              </a>
            ))}
          </div>
          <div className="ml-1">
            <a href={githubUrl} rel="noopener noreferrer" target="_blank">
              <svg
                role="img"
                className="w-8 h-8"
                title={"GitHub"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{"GitHub"}</title>
                <path d={siGithub.path}></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
