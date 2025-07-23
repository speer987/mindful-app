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
    <div className="border-1 border-gray-300 rounded-lg divide-y-1 divide-solid divide-gray-300">
      <div className="text-center text-7xl font-imbue p-2.5">
        {hours}:{minutes} {ampm}
      </div>
      <div className="flex flex-row divide-x-1 divide-solid divide-gray-300">
        <div className="w-1/2 p-2.5 font-figtree uppercase">
          {daysOfTheWeek[day]}
        </div>
        <div className="w-1/2 p-2.5 font-figtree">
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
