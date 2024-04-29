import Link from "next/link";
import React from "react";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Home</Link>
      </div>
      <nav>
        <ul className="">
          <NavLink href={'/news'}>News</NavLink>
          <NavLink href={'/archive'}>Archive</NavLink>

        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
