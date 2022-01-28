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
      <div className="relative bg-primary p-3 rounded hover:cursor-pointer h-80 min-h-full w-50 min-w-full">
        <h1>{title}</h1>
        <p className="h-24 md:h-20">{desc}</p>
        <div className="absolute inset-x-5 bottom-3">
          <h6 className="font-semibold mb-2">Tech Stack:</h6>
          <div className="flex">
            {skills.map((x, i) => (
              <a key={i}>
                <div className="p-2 rounded-xl bg-secondary text-white mr-2 mt-1 text-xs">
                  {x}
                </div>
              </a>
            ))}
          </div>
          <hr className="bg-black mb-1" />

          <div className="flex justify-between align-baseline">
            <h6 className="font-semibold text-xl">Link:</h6>
            <div className="flex">
              <div className="mr-2">
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
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
