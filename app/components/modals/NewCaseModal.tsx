import React, { useContext } from "react";
import {
  XMarkIcon,
  HeartIcon,
  LifebuoyIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import ActionButton from "../buttons/ActionButton";

type AppProps = {
  navTab: number;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewCaseModal = ({ navTab, closeModal }: AppProps) => {
  return (
    <div
      className={`fixed top-0 right-0 ${
        navTab === 0 ? "0 left-20" : "left-[288px]"
      } bottom-0 bg-neutral-900 bg-opacity-50 z-50 transition-all ease-in-out `}
    >
      <div className="absolute top-1/4 left-2/4 block mt-44 pb-20 bg-neutral-800 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5 max-w-[1000px]">
        <div className="w-full h-full relative p-6">
          <div className="absolute right-0 top-0 p-6">
            <XMarkIcon
              className="h-8 w-8 cursor-pointer p-1 rounded hover:bg-neutral-700 transition-all ease-in-out"
              onClick={() => closeModal()}
            />
          </div>
          <div className="px-20 mt-20">
            <form>
              <div className="">
                <label />
                <input
                  className="text-5xl bg-neutral-800 text-neutral-400"
                  placeholder="Untitled"
                />
              </div>
            </form>
            <div className="mt-8">
              <p className="mb-2 text-md text-neutral-600 font-bold">
                Product Type
              </p>
              <ul>
                <li className="mb-1 text-neutral-400 cursor-pointer text-lg pl-2 p-1 rounded hover:bg-neutral-700 transition-all ease-in-out flex">
                  <CurrencyDollarIcon className="h-6 w-6 mr-2 text-teal-400" />{" "}
                  Investments
                </li>
                <li className="mb-1 text-neutral-400 cursor-pointer text-lg pl-2 p-1 rounded hover:bg-neutral-700 transition-all ease-in-out flex">
                  <LifebuoyIcon className="h-6 w-6 mr-2 text-yellow-400" /> Life
                  Insurance
                </li>
                <li className="mb-1 text-neutral-400 cursor-pointer text-lg pl-2 p-1 rounded hover:bg-neutral-700 transition-all ease-in-out flex">
                  <HomeModernIcon className="h-6 w-6 mr-2 text-purple-400" />{" "}
                  Short Term
                </li>
                <li className="mb-1 text-neutral-400 cursor-pointer text-lg pl-2 p-1 rounded hover:bg-neutral-700 transition-all ease-in-out flex">
                  <HeartIcon className="h-6 w-6 mr-2 text-rose-400" /> Medical
                  Aid
                </li>
              </ul>
            </div>
            <div className="float-right">
              <ActionButton btnText="Create Case" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCaseModal;
