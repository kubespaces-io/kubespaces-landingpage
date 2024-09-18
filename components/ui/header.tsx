"use client";

import Link from "next/link";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import Logo from "@/public/images/cube.svg";
import { useState, useEffect } from "react";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="inline-flex" aria-label="Cruip">
              <Logo className="w-8 h-8 fill-current text-purple-600" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/features"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/pricing"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/blog"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Company">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/about"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mission
                  </Link>
                </li>
              </Dropdown>

              {/* 1st level: hover */}
              <Dropdown title="Learn More">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/contact"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://docs.kubespaces.io/"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Help Center
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
