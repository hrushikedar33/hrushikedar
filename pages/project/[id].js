import { useRouter } from "next/router";

function Project() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}

export default Project;
