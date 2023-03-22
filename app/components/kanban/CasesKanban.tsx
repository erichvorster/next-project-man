"use client";

import React, {useState} from "react";
import dynamic from "next/dynamic";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const CasesKanban = () => {
  const [state, setState] = useState(initialData)
   const onDragEnd = (result:any) => {
    const {destination, source} = result;
   }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col bg-teal-900 w-full min-h-screen rounded-md">
        <div className="flex flex-col"></div>
        <div className="flex justify-between px-8">
          {state.columnOrder.map((columnId:any) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId:any) => state.tasks[taskId]);

            return <Column key={columnId.id} column={column} tasks={tasks}/>
          })}
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </DragDropContext>
  );
};

export default CasesKanban;

type initialData = {
  tasks: {
    number:{id:number, content:string}
  },
  columns:{
    "column-1":{
      id:string
    }
  }
}

const initialData = {
  tasks: {
    1:{ id: 1, content: "The first task" },
    2:{ id: 2, content: "The second task" },
    3:{ id: 3, content: "The third task" },
    4:{ id: 4, content: "The fourth task" },
    5:{ id: 5, content: "The fifth task" },
  },
  columns:{
    "column-1":{
      id:"column-1",
      title:"To-Do",
      taskIds:[1,2,3,4,5],
    },
    "column-2":{
      id:"column-2",
      title:"In-progress",
      taskIds:[],
    },
    "column-3":{
      id:"column-3",
      title:"Completed",
      taskIds:[],
    },
 
  },
  columnOrder:["column-1", "column-2", "column-3"]
};