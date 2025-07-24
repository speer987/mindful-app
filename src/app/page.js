import Image from "next/image";
import Clock from "./components/Clock";
import Affirmation from "./components/Affirmation";
import Journal from "./components/Journal";
import Gratitude from "./components/Gratitude";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <div className="bg-(--gray-background) h-full w-screen border-2 border-black flex flex-col gap-5 p-5">
      <Header />
      <div className="flex flex-row gap-5">
        <div className="flex flex-col w-1/5 gap-3 h-full">
          <Clock />
          {/* <div className="border-2">Weather</div> */}
          <Affirmation />
          {/* <div className="border-2">Mood Tracker</div> */}
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <ToDoList
            panelName={"Top Three Priorities"}
            localName={"priorities"}
          />
          <Journal />
          <Gratitude />
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <div className="border-2">Habit Tracker</div>
          <ToDoList panelName={"To Do List"} localName={"todos"} />
          <div className="border-2">Images</div>
        </div>
      </div>
    </div>
  );
}
