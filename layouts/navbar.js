import Link from "next/link";
function Navbar() {
  const pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Timeline",
      link: "/timeline",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="x-adj py-2 sticky top-0 z-10 shadow-md bg-primary/25 backdrop-blur-sm transition-effect">
      <div className="main-set flex justify-between items-center">
        <h2 className="font-bold cursor-pointer">Hrushi Kedar</h2>
        <div className="hidden md:block">
          {pages.map((x, i) => (
            <Link key={i} href={x.link} passHref>
              <span
                className="py-2 px-4 ml-2 font-heading rounded
            hover:bg-primary hover:text-white transition-effect"
              >
                {x.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="block md:hidden">{/* DRAWER */}</div>
      </div>
    </nav>
  );
}

export default Navbar;
