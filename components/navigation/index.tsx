import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className="flex justify-between space-x-10 items-center border-b-2 h-20 bg-indigo-700 text-white">
      <img className="h-20" src="/logo.png" alt="logo" />
      <ul className="flex  justify-end">
        <li className="mx-5 hover:animate-spin">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-5 hover:animate-spin">
          <Link href="/login">Login</Link>
        </li>
        <li className="mx-5 hover:animate-spin">
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
