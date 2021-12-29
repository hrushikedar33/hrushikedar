import { useRouter } from "next/router";
import userData from "../../helper/data";

function Project() {
  const router = useRouter();
  const { projectsData } = userData;
  const { slug } = router.query;

  const project = projectsData.find((project) => project.slug === slug);

  return (
    <div>
      <h1>{project?.title}</h1>
      <hr />
      <p>{project?.desc}</p>
    </div>
  );
}

export default Project;
