"use client";
import { fullTime } from "../hooks/dateAndTime";
export default function Clock() {
  // Credit: https://www.youtube.com/watch?v=Vz4uwGYGl0E
  const now = fullTime();
  const hours = now.getHours() % 12 || 12;
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const ampm = now.getHours < 12 ? "AM" : "PM";
  const day = now.getDay();
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="border-1 border-white/40 rounded-lg shadow-(--pop-shadow) flex flex-col gap-1.5 p-2 bg-(--gray-background)">
      <div className="text-center text-7xl font-imbue p-2">
        {hours}:{minutes} {ampm}
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-1/2 font-figtree uppercase rounded-md text-center p-2 shadow-(--inset-shadow) border-white/40">
          {daysOfTheWeek[day]}
        </div>
        <div className="w-1/2 font-figtree text-center p-2 rounded-md shadow-(--inset-shadow) border-white/40">
          {now.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
