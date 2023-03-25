import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

type Column = {
  id: string;
  title: string;
  taskIds: number[];
};

type Task = {
  id: number;
  content: string;
};

type ColumnProps = {
  column: Column;
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div className=" bg-nuetral-800 w-[400px] h-[620px] flex-col mr-4">
      <div className="flex items-center rounded bg-neutral-900  mb-4 mt-6">
        <p>{column.title}</p>
      </div>
      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="flex flex-1 flex-col"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    className={`flex mb-2 h-[320px] bg-neutral-800 rounded-lg p-4 ${
                      draggableSnapshot.isDragging
                        ? "bg-neutral-700 shadow-lg shadow-black/50 border-2 border-neutral-400"
                        : ""
                    }`}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <p>{task.content}</p>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
