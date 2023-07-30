/* eslint-disable jsx-a11y/alt-text */
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className=" bg-base-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>PC Builder</a>
              </li>
              <li>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <a>CPU</a>
                  </li>
                  <li>
                    <a>Motherboard</a>
                  </li>
                  <li>
                    <a>RAM</a>
                  </li>
                  <li>
                    <a>Power Supply Unit</a>
                  </li>
                  <li>
                    <a>Storage Device</a>
                  </li>
                  <li>
                    <a>Monitor</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} width={100} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>PC Builder</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <a>CPU</a>
                  </li>
                  <li>
                    <a>Motherboard</a>
                  </li>
                  <li>
                    <a>RAM</a>
                  </li>
                  <li>
                    <a>Power Supply Unit</a>
                  </li>
                  <li>
                    <a>Storage Device</a>
                  </li>
                  <li>
                    <a>Monitor</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {session?.user ? (
            <button onClick={() => signOut()} className="btn btn-error">
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
