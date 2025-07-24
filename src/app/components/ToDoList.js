import { ToDoItem } from "./ToDoItem";
import { useRef, useState, useEffect } from "react";
import { useDroppable, DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

export default function ToDoList({ panelName, localName }) {
  // To get the dnd-kit functionality working, I used these tutorials and tools:
  // https://www.youtube.com/watch?v=Z8RoA_YSGDQ
  // https://www.youtube.com/watch?v=dL5SOdgMbRY
  // dnd-kit documentation and when I got stuck, ChatGPT.

  const { setNodeRef } = useDroppable({ id: localName });

  function handleDragEnd(event) {
    console.log("drag end called");
    const { active, over } = event;
    console.log("ACTIVE:" + active.id);
    console.log("OVER:" + over.id);

    if (active.id !== over.id) {
      setTaskList((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  // Gets value entered in input field
  // Used this tutorial: https://www.youtube.com/watch?v=WE8aYoGK0Ec
  const inputRef = useRef();
  const [taskList, setTaskList] = useState([]);

  // Function that adds to do items
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTask = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTaskList((prev) => [...prev, newTask]);
    inputRef.current.value = "";
    console.log(taskList);
  };

  const deleteTask = (id) => {
    setTaskList((prevTasks) => {
      return prevTasks.filter((task) => task.id != id);
    });
  };

  const toggle = (id) => {
    setTaskList((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem(localName);
    if (savedData) {
      setTaskList(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localName, JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="border-1 rounded-lg shadow-(--pop-shadow) border-gray-200/30 p-2 pb-0 flex flex-col bg-(--gray-background) gap-2">
      <div className="text-3xl uppercase font-imbue">{panelName}</div>

      <div className="focus-within:ring-1 focus-within:ring-gray-400 justify-between flex flex-row shadow-(--inset-shadow) rounded-md p-1 pl-2 font-figtree">
        <input
          ref={inputRef}
          className="flex flex-grow focus:outline-none"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="uppercase shadow-md rounded-md p-1 px-2 bg-(--gray-background) overflow-hidden cursor-pointer"
        >
          Add +
        </button>
      </div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={taskList.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div ref={setNodeRef} className="flex flex-col gap-2 font-figtree">
            {taskList?.map((item, index) => {
              return (
                <ToDoItem
                  key={item.id}
                  text={item.text}
                  id={item.id}
                  isComplete={item.isComplete}
                  deleteTask={deleteTask}
                  toggle={toggle}
                />
              );
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
