"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  display: string;
  href: string;
};
const links: Array<Link> = [
  {
    display: "Home",
    href: "/",
  },
  {
    display: "Spot Tracker",
    href: "/tracker",
  },
  {
    display: "Progression Tree",
    href: "/progression",
  },
  {
    display: "Your Profile",
    href: "/profile",
  },
];

export default function NavBar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="w-full p-4">
      <div className="w-3/5 mx-auto p-4 flex flex-row justify-between">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={
              pathName.split("/")[1] == link.href.split("/")[1]
                ? "underline"
                : ""
            }
          >
            {link.display}
          </Link>
        ))}
      </div>
    </div>
  );
}
