import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-evenly items-center w-4/6 h-16 text-3xl">
      <Link href={"/about"} className="hover:scale-125 duration-300">
        About
      </Link>
      <Link href={"/report"} className="hover:scale-125 duration-300">
        Report
      </Link>
      <Link href={"/todo-csr"} className="hover:scale-125 duration-300">
        Todo-CSR
      </Link>
      <Link href={"/todo-ssr"} className="hover:scale-125 duration-300">
        Todo-SSR
      </Link>
    </nav>
  );
};

export default Navigation;
