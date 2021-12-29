import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "../components/Menu";

function Navbar() {
  const router = useRouter();

  const pages = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "PROJECTS",
      link: "/projects",
    },
    {
      name: "TIMELINE",
      link: "/timeline",
    },
    {
      name: "CONTACT",
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
                className={
                  router.pathname == x.link ? "active nav-link" : "nav-link"
                }
              >
                {x.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="block md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
