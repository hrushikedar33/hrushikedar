import Link from "next/link";
import { siGithub } from "simple-icons/icons";

function ProjectCard({ title, slug, desc, skills, githubUrl }) {
  return (
    <Link
      href={"/project/" + slug}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <div className="bg-primary p-3 rounded grow">
        <h1>{title}</h1>
        <p className="h-24 md:h-20">{desc}</p>
        <div className="mt-3 flex flex-wrap ">
          {skills.map((x, i) => (
            <a key={i}>
              <div className="p-2 rounded-xl bg-secondary text-white mr-2 mt-1 text-xs">
                {x}
              </div>
            </a>
          ))}
          <a
            href={githubUrl}
            className="flex justify-center p-2 grow hover:bg-primary rounded-xl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              role="img"
              className="w-8 h-8"
              title={"GitHub"}
              // viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{"GitHub"}</title>
              <path d={siGithub.path}></path>
            </svg>
          </a>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
