import userData from "../helper/data";

function Icons() {
  const { contact } = userData;
  return (
    <div className="flex  mt-4">
      {contact.map((x, i) => (
        <div className="h-16 w-16" key={i}>
          <a href={x.link} rel="noopener noreferrer" target="_blank">
            <svg
              role="img"
              className="h-6 w-6 inline-block"
              title={x.name}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{x.name}</title>
              <path d={x.path}></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Icons;
