import { useRouter } from "next/router";
import userData from "../../helper/data";
import { siGithub } from "simple-icons/icons";
import Carousel from "../../components/Carousel";

function Project() {
  const router = useRouter();
  const { projectsData } = userData;
  const { slug } = router.query;
  const project = projectsData.find((project) => project.slug === slug);

  return (
    <div className="x-adj">
      <div className="mt-6 md:grid md:grid-cols-3 grid-cols-1 md:gap-6">
        <div>
          <div className="">
            <h1>{project?.title}</h1>
          </div>
          <hr />
          <p>{project?.desc}</p>
          <div className="flex mb-2">
            {project.skills.map((x, i) => (
              <a key={i}>
                <div className="p-2 rounded-xl bg-secondary text-white mr-2 mt-1 text-xs">
                  {x}
                </div>
              </a>
            ))}
          </div>
          <div className="mb-3">
            <div className="my-btn bg-primary inline-block rounded-md hover:bg-secondary mr-3 mb-2">
              {/* TODO: add link */}
              {/* <a href="" rel="noopener noreferrer" target="_blank">
              <svg
                role="img"
                className=" h-8 w-8 fill-white"
                title={"Github"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{"Github"}</title>
                <path d={siGithub.path}></path>
              </svg>
            </a> */}
              <a href="" rel="noopener noreferrer" target="_blank">
                <p className="text-semibold px-4 py-1 text-black hover:text-white">
                  Github
                </p>
              </a>
            </div>
            <div className="my-btn inline-block bg-primary rounded-md hover:bg-secondary">
              {/* TODO: add link */}
              <a href="" rel="noopener noreferrer" target="_blank">
                <p className="text-semibold px-4 py-1 text-black hover:text-white">
                  Dowload
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center col-span-2">
          <Carousel
            slug={project.slug}
            title={project.title}
            totalImages={project.totalImages}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
