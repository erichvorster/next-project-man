import React from "react";

const Column = () => {
  return (
    <div className="rounded bg-teal-500 w-[400px] h-[620px] flex-col">
      <div className="flex items-center rounded bg-teal-700 px-4 mb-4">
        <p>Todo</p>
      </div>
      <div className="flex px-4 flex-1 flex-col">
        <div className="flex mb-4 h-[72px] bg-teal-200 rounded p-4">
          <p>This is a task</p>
        </div>
      </div>
    </div>
  );
};

export default Column;
