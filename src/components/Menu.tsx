// header 2nd menue bar,
// 
import React from "react";
import Link from "next/link";
import { menuArray } from "@/constant/data";

function Menu() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <nav>
        <ul className="bg-semidark h-8 text-white text-md flex items-center justify-center gap-3 md:gap-7 z-10">
          {/* menu main item */}
          {menuArray.map((i) => (
            <li key={i.id} className="group flex flex-col relative justify-center">
              <Link href={i.url} className="capitalize group-hover:underline ">
                {i.titel}
              </Link>
              {/* hover section */}
              {/* hover section */}
              <div className=' hidden group-hover:inline-flex z-[2]'>
                <div className="bg-white text-dark absolute right-[-160%] top-[27px]">
                  <ul className="grid grid-cols-4 gap-16 px-10 py-5">
                    <li>111</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>7</li>
                    <li>7</li>
                    <li>7</li>
                  </ul>
                </div>
              </div>  
            </li>
          ))}
        </ul>
      </nav>
      
    </main>
  );
}

export default Menu;
