import React from "react";
import Link from "next/link";
import {
  HeartIcon,
  LifebuoyIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const CasesNav = () => {
  return (
    <div className="pl-8">
      <p className="mt-6 text-2xl text-neutral-800">Cases</p>
      <p className="mt-12">All Cases</p>
      <p className="mt-10 text-neutral-800">Product</p>
      <ul className="h-72 w-52 text-neutral-300">
        <li className="mt-4 text-sm text-neutral-800 hover:text-neutral-300 transition-all ease-in-out cursor-pointer flex">
          <LifebuoyIcon className="h-4 w-4 mr-1 text-yellow-400" /> Life
          Insurance
        </li>
        <li className="mt-2 text-sm text-neutral-800 hover:text-neutral-300 transition-all ease-in-out cursor-pointer flex">
          <CurrencyDollarIcon className="h-4 w-4 mr-1 text-teal-400" />{" "}
          Investments
        </li>
        <li className="mt-2 text-sm text-neutral-800 hover:text-neutral-300 transition-all ease-in-out cursor-pointer flex">
          <HeartIcon className="h-4 w-4 mr-1 text-rose-400" />
          Medical Aid
        </li>
        <li className="mt-2 text-sm text-neutral-800 hover:text-neutral-300 transition-all ease-in-out cursor-pointer flex">
          <HomeModernIcon className="h-4 w-4 mr-1 text-purple-400" /> Short Term
          Insurance
        </li>
      </ul>
    </div>
  );
};

export default CasesNav;
