import userData from "../helper/data";

function Icons({ direction }) {
  const { contact } = userData;
  return (
    <div className={`flex mt-4 ${direction && "space-y-6 flex-col"}`}>
      {contact.map((x, i) => (
        <div
          key={i}
          className={`w-12 h-12 flex items-center mr-4 ${!direction && ""}`}
        >
          <a href={x.link} rel="noopener noreferrer" target="_blank">
            <svg
              role="img"
              title={x.name}
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10 w-8 h-8 ml-1"
              viewBox="0 0 24 24"
            >
              <title>{x.name}</title>
              <path d={x.path}></path>
            </svg>
          </a>
          {direction && (
            <span className="ml-5 text-lg font-semibold hover:text-secondary">
              {x.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Icons;
