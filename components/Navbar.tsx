import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const navigationItems = [
    {
      href: "/home",
      label: "Home"
    },
    {
      href: "/services",
      label: "Services"
    },
    {
      href: "/portfolio",
      label: "Portfolio"
    },
    {
      href: "/about-me",
      label: "About Me"
    }
  ];

const Navbar = () => {
  return (
    <header className="flex sticky top-0 z-50 justify-between m-4 items-center border py-3 px-4 bg-white shadow rounded-sm dark:bg-slate-800 dark:border-purple-950/25 dark:shadow-white/20">
      <Link href="/" className="font-semibold tracking-wider text-lg">HypeXDev</Link>
      <nav>
        <ul className="flex space-x-1">
          {
            navigationItems.map(({href,label})=>(
                <li><Link className="transition-all duration-200 hover:bg-violet-600/25 px-3 py-1 rounded-sm font-medium" href={href}>{label}</Link></li>
            ))
          }
        </ul>
      </nav>
      <ThemeToggle/>
    </header>
  );
};

export default Navbar;
