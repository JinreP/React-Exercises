"use client";
import { useState } from "react";
import Link from "next/link";

export default function Mood() {
  const emojis = [
    "😁",
    "😎",
    "😴",
    "🤩",
    "😢",
    "😁",
    "😂",
    "🤩",
    "😴",
    "🥳",
    "😢",
    "😡",
    "🤪",
    "🐶",
    "🍕",
  ];

  const random = () => {
    const randomEmoji = Math.floor(Math.random() * emojis.length);
    setMood(emojis[randomEmoji]);
  };
  const [mood, setMood] = useState("🙂");

  return (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <Link href="/">Home</Link>
      <div className="bg-gray-500 w-[500px] h-[300px] text-9xl text-center pt-20">
        {mood}
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => random()}
          className="bg-red-500 rounded-2xl font-bold w-[120px] h-[60px] text-2xl"
        >
          Click here
        </button>
      </div>
    </div>
  );
}
