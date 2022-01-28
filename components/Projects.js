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
        {projectsData
          .slice(0, 5)
          .map(({ title, slug, desc, skills, githubUrl }, i) => (
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
      <div className="bg-primary flex flex-col p-3 rounded grow hover:cursor-pointer">
        <h2>{title}</h2>
        <p className="line-clamp-4 flex-1 mb-2">{desc}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:block">
            {skills.slice(0, 2).map((x, i) => (
              <a key={i}>
                <span className="px-2 py-1 rounded-xl bg-secondary text-white mr-1 text-xs md:text-sm">
                  {x}
                </span>
              </a>
            ))}
          </div>
          <div className="ml-1">
            <a href={githubUrl} rel="noopener noreferrer" target="_blank">
              <svg
                role="img"
                className="w-6 h-6"
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
