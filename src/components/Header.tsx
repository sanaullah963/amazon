// top header with search icon
// with logo,location,countary,accoutn........

"use client";
import React, { useState } from "react";
import { whiteLogo } from "@/images/image";
import Image from "next/image";
import Link from 'next/link'
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BiSolidDownArrow, BiUserCircle, BiSolidCart } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const [hiddenAccount, setHiddenAccount] = useState(false);
  // const {sata:session} = useSession()
  const user = useSession().data?.user;
  console.log(user?.image);
  // console.log(useSession());

  return (
    <main>
      <nav className="flex items-center gap-x-4 h-16 bg-dark px-5">
        {/* logo */}
        <div className="">
          <Image src={whiteLogo} alt="logo image" className="w-28" />
        </div>
        {/* current location */}
        <div className=" text-white flex items-center gap-1 cursor-pointer  hover:border hover:border-white border border-dark py-2 p-1">
          <div className="text-2xl">
            <FaLocationDot />
          </div>
          <div className=" leading-5">
            <p className="text-normal">Deliver to</p>
            <h2 className="font-semibold">Bangladash</h2>
          </div>
        </div>
        {/* search section */}
        <div className="flex-1 w-full">
          <div className="flex h-10">
            <input
              type="text"
              className="w-full rounded-s-md outline-none ps-3"
            />
            <button className="bg-secondary text-white w-12 flex items-cente justify-center text-4xl font-semibold rounded-e-md ">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        {/* language */}
        <div className="flex  text-white items-center h-14 hover:border hover:border-white border border-dark px-2 cursor-pointer gap-1">
          <span>
            <LiaFlagUsaSolid />
          </span>
          <h3 className="">EN</h3>
          <span className="text-[10px]">
            <BiSolidDownArrow />
          </span>
        </div>
        {/* login & signup */}
        <div className="relative">
          {/* account */}
          <div
            className="text-white flex items-center justify-center h-14 hover:border hover:border-white border border-dark px-2 cursor-pointer flex-col leading-4"
            onClick={() =>
              hiddenAccount ? setHiddenAccount(false) : setHiddenAccount(true)
            }
          >
            {user ? (
              <Image
                src={user.image as string}
                alt="profile image"
                height={30}
                width={30}
                className="rounded-full"
              />
            ) : (
              <span className="text-3xl text-secondary">
                <BiUserCircle />
              </span>
            )}
            <h2 className="">{user ? user.name : "account"}</h2>
          </div>
          {/* hover */}
          {hiddenAccount &&
            (user ? (
              <div className="bg-secondary w-full absolute z-[2] p-1 flex flex-col gap-y-2">
                <button
                  className="uppercase bg-semidark hover:bg-semidark/80 text-white py-2 rounded-md"
                  onClick={() => signOut()}
                >
                  signoit
                </button>
              </div>
            ) : (
              <div className="bg-secondary w-full absolute z-[2] p-1 flex flex-col gap-y-2">
                <button
                  className="uppercase bg-semidark hover:bg-semidark/80 text-white py-2 rounded-md"
                  onClick={() => signIn()}
                >
                  signin
                </button>
                <button
                  className="uppercase bg-semidark hover:bg-semidark/80 text-white py-2 rounded-md"
                  onClick={() => signIn()}
                >
                  signup
                </button>
              </div>
            ))}
        </div>
        {/* Returns */}
        <Link href={'/gadget'}>
        <div className="text-white flex items-center justify-center h-14 hover:border hover:border-white border border-dark px-2 cursor-pointer flex-col leading-4">
          <p>Return</p>
          <h2 className="font-semibold">& Order</h2>
        </div>
        </Link>
        {/* cart */}
        <div className="text-white flex items-center justify-center h-14 hover:border hover:border-white border border-dark px-2 cursor-pointer flex-col leading-4 ">
          <div className="relative">
            <span className="text-dark absolute right-0 top-[-5px] font-semibold rounded-full p-1 bg-white">
              11
            </span>
            <span className=" text-5xl text-gray-300">
              <BiSolidCart />
            </span>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;
