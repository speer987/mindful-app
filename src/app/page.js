import Image from "next/image";
import Clock from "./components/Clock";
import Affirmation from "./components/Affirmation";
import PrioritiesAndName from "./components/PrioritiesAndName";
import Journal from "./components/Journal";
import Gratitude from "./components/Gratitude";

export default function Home() {
  return (
    <div className="bg-(--gray-background)">
      <div className="border-2">Header</div>
      <div className="h-full w-screen border-2 flex flex-row gap-3 p-10">
        <div className="flex flex-col w-1/5 gap-3 h-full">
          <Clock />
          {/* <div className="border-2">Weather</div> */}
          <Affirmation />
          {/* <div className="border-2">Mood Tracker</div> */}
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <PrioritiesAndName />
          <Journal />
          <Gratitude />
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <div className="border-2">Habit Tracker</div>
          <div className="border-2">To Do List</div>
          <div className="border-2">Images</div>
        </div>
      </div>
    </div>
  );
}
