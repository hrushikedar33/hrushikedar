import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

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
    <div className="ml-5 relative cursor-pointer">
      {toggleMenu ? (
        <RiCloseLine
          color="primary"
          size={27}
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <RiMenu3Line
          color="secondary"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
      )}
      {toggleMenu && (
        <div className="flex justify-center align-middle px-2 py-3 absolute right-0 mt-3 w-32 rounded-xl bg-primary/90 z-10 scale-up-center">
          <div className="flex flex-col">
            {pages.map((x, i) => (
              <Link key={i} href={x.link} passHref>
                <span className="py-2 px-3.5 ml-2 font-semibold text-black">
                  {x.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
