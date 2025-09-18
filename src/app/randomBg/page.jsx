"use client";
import { useState } from "react";
import Link from "next/link";

export default function RandomBg() {
  const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "pink",
    "yellow",
    "cyan",
    "lime",
  ];
  const [color, setColor] = useState("white");
  const random = () => {
    const randomColors = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColors]);
  };
  return (
    <div
      className="bg-black w-full h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <Link
        className="bg-red-500 text-center text-6xl font-bold rounded-3xl w-[200px] h-[100px]"
        href="/"
      >
        Home
      </Link>
      <div className="bg-gray-500 w-[500px] h-[300px] text-5xl text-center pt-20">
        Current color is {color}
      </div>
      <div className="flex gap-5">
        <button
          onClick={random}
          className="bg-red-500 rounded-2xl font-bold w-[120px] h-[60px] text-2xl"
        >
          Click here
        </button>
      </div>
    </div>
  );
}
