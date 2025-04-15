import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaBriefcase, FaHome, FaLightbulb, FaTools, FaUser } from "react-icons/fa";
import { MenuIcon } from "lucide-react";

const navigationItems = [
  {
    icon:FaHome,
    href: "/",
    label: "Home",
  },
  {
    icon:FaBriefcase,
    href: "/#services",
    label: "Services",
  },
  {
    icon:FaTools,
    href: "/#skills",
    label: "Skills",
  },
  {
    icon:FaUser,
    href: "/about-me",
    label: "About Me",
  },
];

const Navbar = () => {
  return (
    <header className="flex sticky top-0 z-50 justify-between mb-2 lg:my-4 lg:mx-6 items-center border py-3 px-4 bg-white/60 backdrop-blur-md shadow rounded-sm dark:bg-slate-600/25 dark:border-purple-950/25 dark:shadow-white/20">
      <Link href="/" className="font-semibold tracking-wider text-lg">
        HypeXDev
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex space-x-1">
          {navigationItems.map(({ href, label,icon:Icon }) => (
            <li key={href}>
              <Link
                className="transition-all duration-200 inline-flex items-center hover:bg-violet-600/25 px-3 py-1 rounded-sm font-medium"
                href={href}
              >
                <Icon className="w-4 h-4 me-2"/>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
      <div className="me-2"><ThemeToggle/></div>
      <div className="pt-2 sm:hidden"><MobileNav /></div>
      </div>
    </header>
  );
};

export default Navbar;

function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger aria-label="Menu Button"><MenuIcon/></DrawerTrigger>
      <DrawerContent>
        <nav>
          <ul className="mt-4 flex flex-col space-y-2">
            {navigationItems.map(({ href, label, icon:Icon }) => (
              <DrawerClose key={href}>
                <li>
                  <Link
                    className="transition-all duration-200 hover:bg-violet-600/10 px-3 py-1 rounded-sm text-base dark:text-slate-200 tracking-widest inline-flex items-center uppercase font-medium"
                    href={href}
                  >
                    <Icon className="w-4 h-4 me-2"/>
                    {label}
                  </Link>
                </li>
              </DrawerClose>
            ))}
          </ul>
        </nav>
        <DrawerFooter>
          <DrawerClose>
            <button>Close</button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
