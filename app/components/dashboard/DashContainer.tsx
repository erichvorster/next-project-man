import React from "react";

type AppProps = {
  children: React.ReactNode;
  navTab: number;
};

const DashContainer = ({ children, navTab }: AppProps) => {
  return (
    <div
      className={`bg-black absolute top-0 bottom-0 right-0 p-1 border-[3px] border-l-0 border-neutral-900 ${
        navTab === 0 ? "left-20" : "left-[288px]"
      } z-0 transition-all ease-in-out`}
    >
      <div className="bg-neutral-900 relative z-10 w-full h-full rounded-lg p-4">{children}</div>
    </div>
  );
};

export default DashContainer;
