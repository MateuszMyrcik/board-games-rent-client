import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BoardGamesApiURL, IUserProfil } from "../../interfaces/generic.def";
import useUserProfile from "../../lib/hooks/userProfile";
import styles from "./index.module.scss";
import Router from "next/router";

interface Props {}

const Navigation = (props: Props) => {
  const { data: profile, isLoading, isError } = useUserProfile();

  const onSignOutClick = () => {
    sessionStorage.setItem("token", "");
    Router.push({
      pathname: "/",
    });
  };

  return (
    <nav className="flex justify-between space-x-10 shadow-lg items-center border-b-2 h-20 bg-indigo-700 text-white ">
      <img className="h-20" src="/logo.png" alt="logo" />
      <ul className="flex  justify-end">
        <li className="mx-5">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-5">
          <Link href="/login">Login</Link>
        </li>
        <li className="mx-5">
          <Link href="/products">Products</Link>
        </li>
      </ul>
      {profile?.username ? (
        <div className="pr-2 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{ height: "30px", width: "30px" }}
          />
          <div className="pl-4">
            <span>{profile.username}</span>
            <div
              className="hover:cursor-pointer"
              onClick={() => onSignOutClick()}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ height: "15px", width: "15px" }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
