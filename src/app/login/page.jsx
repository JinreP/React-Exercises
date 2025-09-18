"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const submit = () => {
    if (userInput.trim() !== "" && passInput.trim() !== "") {
      setUsername(userInput);
      setPassword(passInput);
      setUserInput("");
      setPassInput("");
    }
  };
  function usernameChange(e) {
    setUserInput(e.target.value);
  }
  function passwordChange(e) {
    setPassInput(e.target.value);
  }
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <Link
        className="bg-red-500 text-center text-6xl font-bold rounded-3xl w-[200px] h-[100px]"
        href="/"
      >
        Home
      </Link>
      <div className="w-[400px] h-[500px] border-4 border-red-500 flex flex-col">
        <div className="flex flex-col items-center pt-30 gap-5 w-full h-screen">
          <input
            type="text"
            placeholder="Enter Your Username"
            value={userInput}
            onChange={usernameChange}
            className="border-2 border-red-500 text-white font-bold focus:bg-green-200 w-[300px] h-[50px]  focus:text-red-600"
          />

          <input
            type="password"
            value={passInput}
            onChange={passwordChange}
            placeholder="Enter Your Password"
            className="border-2 border-red-500 text-white font-bold focus:bg-green-200 w-[300px] h-[50px]  focus:text-red-600"
          />
          <button
            onClick={() => submit()}
            className="bg-[red] text-2xl font-bold w-[100px] rounded-2xl h-[50px]"
          >
            Submit
          </button>
        </div>
      </div>{" "}
      <div className="border-2 border-red-500 w-[300px] h-[250px] text-gray-300">
        <p className="text-red-500 font-bold text-2xl text-center">
          {" "}
          Hello {username} welcome to hell's kitchen and your goddamm password
          is {password}
        </p>
      </div>
    </div>
  );
}
