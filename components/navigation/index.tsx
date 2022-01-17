import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav>
      <ul className="flex justify-center space-x-10 items-center border-b-2 h-10 bg-indigo-700 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Admin Panel</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
