"use client";
import { useEffect, useState } from "react";

export default function Affirmation() {
  // Had to use ChatGPT for useEffect because I was running into CORS errors.
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    fetch("/api/affirmation")
      .then((res) => res.json())
      .then((data) => setAffirmation(data.affirmation))
      .catch((err) => {
        console.error(err);
        setAffirmation("Failed to load affirmation.");
      });
  }, []);

  return (
    <div className="font-imbue flex flex-col border-1 border-gray-300 rounded-lg p-5 text-center gap-2 justify">
      <p className="font-imbue uppercase text-3xl">Daily Affirmation</p>
      <div className="h-55 w-55 rounded-full bg-radial from-pink-100 from-40% to-yellow-100"></div>
      <p className="font-figtree">{affirmation || "Loading..."}</p>
    </div>
  );
}
