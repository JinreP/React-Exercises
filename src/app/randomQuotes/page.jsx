"use client";
import { useState } from "react";
import Link from "next/link";

export default function RandomQuotes() {
  const quotes = [
    "Stay hungry, stay foolish.",
    "Talk is cheap. Show me the code.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "The best way to predict the future is to invent it.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "In order to be irreplaceable, one must always be different.",
    "Don’t comment bad code — rewrite it.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  ];
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const randomWords = () => {
    const randomQuotes = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomQuotes]);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400">
      <Link
        className="bg-red-500 text-center text-6xl font-bold rounded-3xl w-[200px] h-[100px]"
        href="/"
      >
        Home
      </Link>
      <div className="bg-black w-[500px] h-[200px] border-4 border-red-600 flex flex-col items-center justify-center mb-5">
        <p className="text-4xl font-black text-red-500 text-center">
          {currentQuote}
        </p>
      </div>

      <button
        onClick={() => randomWords()}
        className="w-[220px] h-[120px] text-amber-200 active:bg-amber-600 hover:bg-amber-300 rounded-3xl bg-green-400 text-3xl font-bold"
      >
        Click here to get random quotes
      </button>
    </div>
  );
}
