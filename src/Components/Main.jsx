import React from "react";
import { useState } from "react";

const Main = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(userName, password);
  };
  return (
    <div>
      <form className="p-5 m-20 border-2 border-gray-600">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white m-5">Login</h1>
            <input
              type="text"
              placeholder="User Name"
              className="text-center text-white m-2 p-2 border-1 border-blue-400 rounded-2xl"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-center text-white m-2 p-2 border-1 border-blue-400 rounded-2xl"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-5 justify-center">
            <button
              type="button"
              className="text-white m-2 p-2 rounded-2xl border-1 border-cyan-400 cursor-pointer"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button
              type="button"
              className="text-white m-2 p-2 rounded-2xl border-1 border-cyan-400 cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
    </div>
  );
};

export default Main;
