"use client";

import React, { useState } from "react";
import {
  ChatBubbleOvalLeftIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  BellAlertIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { useRouter } from 'next/navigation';
import CasesNav from "./CasesNav";

type AppProps = {
  setNavTab: React.Dispatch<React.SetStateAction<number>>;
  navTab: number;
};

const SideNav = ({ setNavTab, navTab }: AppProps) => {
  return (
    <div className="flex relative h-screen">
      <div className="w-20 fixed h-full top-0 bottom-0 bg-black border-[3px] border-neutral-900 z-10">
        <ul className="h-[450px] flex flex-col justify-between items-center text-center w-12 ml-4">
          <li className="mt-4 cursor-pointer" onClick={() => setNavTab(0)}>
            <div className="rounded-full bg-neutral-900 h-12 w-12 pt-1 text-4xl font-bold text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 transition-all ease-in-out">
              B
            </div>
          </li>
          <li>
            <Link href="/">
            <BriefcaseIcon
              onClick={() => setNavTab(1)}
              className="text-neutral-800 h-8 w-8 cursor-pointer hover:text-neutral-300 transition-all ease-in-out"
            />
            </Link>
          </li>
          <li>
            <Link href="/messages">
            <ChatBubbleOvalLeftIcon
              onClick={() => setNavTab(2)}
              className="text-neutral-800 h-8 w-8 cursor-pointer hover:text-neutral-300 transition-all ease-in-out"
            />
            </Link>
          </li>
          <li>
            <CalendarDaysIcon
              onClick={() => setNavTab(3)}
              className="text-neutral-800 h-8 w-8 cursor-pointer hover:text-neutral-300 transition-all ease-in-out"
            />
          </li>
          <li>
            <BellAlertIcon
              onClick={() => setNavTab(4)}
              className="text-neutral-800 h-8 w-8 cursor-pointer hover:text-neutral-300 transition-all ease-in-out"
            />
          </li>
          <li>
            <UserGroupIcon
              onClick={() => setNavTab(5)}
              className="text-neutral-800 h-8 w-8 cursor-pointer hover:text-neutral-300 transition-all ease-in-out"
            />
          </li>
          <li>
            <Cog6ToothIcon
              onClick={() => setNavTab(6)}
              className="text-neutral-800 h-8 w-8 cursor-pointer hover:text-neutral-300 transition-all ease-in-out"
            />
          </li>
        </ul>
      </div>
      <div
        className={`fixed h-full left-20 bottom-0 bg-black border-[3px] border-l-0 border-r-0 border-neutral-900 ${
          navTab === 0 ? "-translate-x-64" : "translate-x-0"
        } z-0 transition-all ease-in-out`}
      >
        {(() => {
          switch (navTab) {
            case 1:
              return (
                <CasesNav/>
              );
            case 2:
              return (
                <ul className="h-72 flex flex-col justify-between w-52 pl-8">
                  <li className="mt-16 text-xl font-bold">Messages</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              );
            case 3:
              return (
                <ul className="h-72 flex flex-col justify-between w-52 pl-8">
                  <li className="mt-16 text-xl font-bold">Calender</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              );
            case 4:
              <ul className="h-72 flex flex-col justify-between w-52 pl-8">
                <li className="mt-16 text-xl font-bold">Notifications</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
              </ul>;
            case 5:
              return (
                <ul className="h-72 flex flex-col justify-between w-52 pl-8">
                  <li className="mt-16 text-xl font-bold">Team</li>
                  <li>Item 1</li>
                </ul>
              );
            case 6:
              return (
                <ul className="h-72 flex flex-col justify-between w-52 pl-8">
                  <li className="mt-16 text-xl font-bold">Settings</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              );
          }
        })()}
      </div>
    </div>
  );
};

export default SideNav;
