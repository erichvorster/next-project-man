import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

type AppProps = {
  btnText: string;
  onClick: () => void;
};

const ActionButton = ({ btnText, onClick }: AppProps) => {
  return (
    <button
      onClick={() => onClick()}
      className="bg-black w-44 py-2 rounded flex justify-center items-center mt-6 text-neutral-700 hover:text-neutral-300 transition-all ease-in-out group hover:bg-opacity-80"
    >
      <PlusIcon className="h-4 w-4 text-neutral-700 font-bold group-hover:text-neutral-300 transition-all ease-in-out" />
      {btnText}
    </button>
  );
};

export default ActionButton;
