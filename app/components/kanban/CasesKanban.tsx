"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const reorderColumnList = (
  sourceCol: Columns,
  startIndex: number,
  endIndex: number
): Columns => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

type Task = {
  id: number;
  content: string;
};

type Columns = {
  id: string;
  title: string;
  taskIds: number[];
};

type State = {
  tasks: { [key: number]: Task };
  columns: { [key: string]: Columns };
  columnOrder: string[];
};

const initialData: State = {
  tasks: {
    1: { id: 1, content: "The first task" },
    2: { id: 2, content: "The second task" },
    3: { id: 3, content: "The third task" },
    4: { id: 4, content: "The fourth task" },
    5: { id: 5, content: "The fifth task" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To-Do",
      taskIds: [1, 2, 3, 4, 5],
    },
    "column-2": {
      id: "column-2",
      title: "In-progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const CasesKanban = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    //If user tris to drop in a unknown destination
    if (!destination) return;
    //If the drags and drops back in the sam position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //If the use drops within the same column but in a different posiiton
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col bg-beutral-900 w-full  rounded-md">
        <div className="flex flex-col"></div>
        <div className="flex ">
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={columnId.id} column={column} tasks={tasks} />;
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default CasesKanban;
