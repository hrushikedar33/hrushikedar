import userData from "../helper/data";

function Icons({ direction }) {
  const { contact } = userData;
  return (
    <div className={`flex mt-4 ${direction && "space-y-6 flex-col"}`}>
      {contact.map((x, i) => (
        <div key={i} className={`${!direction && "h-16 w-16"}`}>
          <a href={x.link} rel="noopener noreferrer" target="_blank">
            <svg
              role="img"
              title={x.name}
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-8 w-8"
            >
              <title>{x.name}</title>
              <path d={x.path}></path>
            </svg>
            {direction && (
              <span className="ml-3 text-xl font-semibold hover:text-secondary">
                {x.name}
              </span>
            )}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Icons;
