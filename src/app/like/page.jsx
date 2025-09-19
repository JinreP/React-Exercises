"use client";

import { useState } from "react";

export default function DarkLightMode() {
  const [likes, setLikes] = useState(0);
  const [zurh, setZurh] = useState(0);
  const [angry, setAngry] = useState(0);
  const [wow, setWow] = useState(0);
  const [finger, setFinger] = useState(0);

  const liked = () => {
    setLikes(likes + 1);
  };
  const dislike = () => {
    setLikes(likes - 1);
  };

  const heart = () => {
    setZurh(zurh + 1);
  };
  const angryEmo = () => {
    setAngry(angry + 1);
  };

  const wowalda = () => {
    setWow(wow + 1);
  };
  const fu = () => {
    setFinger(finger + 1);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="text-5xl">
        You're total like is : {likes} <br />
        You're total heart is : {zurh} <br />
        You're total angry is : {angry} <br />
        You're total wow is : {wow} <br />
        You're total FU is : {finger} <br />
      </p>
      <div className="flex gap-5">
        <button
          onClick={() => liked()}
          className="bg-emerald-500 rounded-2xl w-[100px] h-[50px] text-5xl"
        >
          👍
        </button>
        <button
          onClick={() => dislike()}
          className="bg-emerald-500 rounded-2xl w-[100px] h-[50px] text-5xl"
        >
          👎
        </button>
        <button
          onClick={() => heart()}
          className="bg-emerald-500 rounded-2xl w-[100px] h-[50px] text-5xl"
        >
          💚
        </button>
        <button
          onClick={() => angryEmo()}
          className="bg-emerald-500 rounded-2xl w-[100px] h-[50px] text-5xl"
        >
          🤬
        </button>
        <button
          onClick={() => wowalda()}
          className="bg-emerald-500 rounded-2xl w-[100px] h-[50px] text-5xl"
        >
          😱
        </button>
        <button
          onClick={() => fu()}
          className="bg-emerald-500 rounded-2xl w-[100px] h-[50px] text-5xl"
        >
          🖕
        </button>
      </div>
    </div>
  );
}
