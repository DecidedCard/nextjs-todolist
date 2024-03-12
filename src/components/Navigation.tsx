import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <Link href={"/about"}>About</Link>
      <Link href={"/report"}>Report</Link>
      <Link href={"/todo-csr"}>Todo-CSR</Link>
      <Link href={"/todo-ssr"}>Todo-SSR</Link>
    </nav>
  );
};

export default Navigation;
