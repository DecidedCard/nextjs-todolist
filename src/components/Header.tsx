import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center min-w-max h-14 text-4xl font-bold">
      <Link href={"/"}>
        <h1>Next.js TodoList</h1>
      </Link>
    </header>
  );
};

export default Header;
