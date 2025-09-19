"use client";

import { useState } from "react";

export default function DarkLightMode() {
  const [likes, setLikes] = useState(0);
  const liked = () => {
    setLikes(liked + 1);
  };
  const dislike = () => {
    setLikes(liked - 1);
  };
  return (
    <div className="w-full h-screen">
      <button
        onClick={() => liked()}
        className="bg-emerald-500 w-[100px] h-[50px] text-5xl"
      >
        👍
      </button>
      <button
        onClick={() => dislike()}
        className="bg-emerald-500 w-[100px] h-[50px] text-5xl"
      >
        👎
      </button>
    </div>
  );
}
