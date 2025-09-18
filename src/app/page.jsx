"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400 gap-5">
      <h1 className="text-3xl p-4">Welcome to My Playground</h1>
      <Link
        className="bg-red-500 text-center rounded-3xl font-bold pt-3 w-[100px] h-[60px]"
        href="/login"
      >
        Login
      </Link>
      <Link
        className="bg-red-500 text-center rounded-3xl font-bold pt-3 w-[100px] h-[60px]"
        href="/mood"
      >
        Mood
      </Link>
      <Link
        className="bg-red-500 text-center rounded-3xl font-bold pt-3 w-[100px] h-[60px]"
        href="/randomBg"
      >
        Random BG
      </Link>
      <Link
        className="bg-red-500 text-center rounded-3xl font-bold pt-3 w-[100px] h-[60px]"
        href="/randomQuote"
      >
        Random Quote
      </Link>
    </div>
  );
}
