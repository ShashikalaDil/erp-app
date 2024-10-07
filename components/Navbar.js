import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import { ModeToggle } from "./ui/toggle-mode";
import Profile from "./Profile";

import logo from "@/public/images/nwsdb_logo.png";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 w-full p-2 border-b z-50 bg-white dark:bg-black bg-opacity-90">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo/Image */}
        <Link href="/">
          <Image
            className="dark:invert"
            src={logo}
            // src="https://nextjs.org/icons/next.svg"
            alt="NWSDB logo"
            width={60}
            height={38}
            priority
          />
        </Link>

        {/* Right Side: Links */}
        <div className=" flex item-center space-x-6">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/Bill" className="hover:underline">
            Bill Calculator
          </Link>
          <Link href="/Loan" className="hover:underline">
            Loan Calculator
          </Link>
          <ModeToggle />
          <Profile />
        </div>
      </div>
    </nav>
  );
}
