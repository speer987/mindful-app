"use client";
import { ToDoItem } from "./ToDoItem";
import { useRef, useState, useEffect } from "react";

export default function PrioritiesAndName() {
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
    const priorities = localStorage.getItem("priorities");
    if (priorities) {
      setTaskList(JSON.parse(priorities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("priorities", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="border-1 rounded-lg shadow-(--pop-shadow) border-white/40 p-2.5 flex flex-col bg-(--gray-background) gap-2">
      <div>
        <div className="text-3xl uppercase font-imbue">
          Top Three Priorities
        </div>
        {taskList.length === 3 ? (
          <div className="font-figtree">
            Please delete a task or move one to your to do list to add a new
            one.
          </div>
        ) : (
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
        )}
      </div>
      <div className="flex flex-col gap-2 font-figtree">
        {taskList?.map((item, index) => {
          return (
            <ToDoItem
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTask={deleteTask}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}
