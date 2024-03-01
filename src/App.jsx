import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="fixed flex flex-wrap bottom-12 duration-200 justify-center items-center inset-x-0 py-2 w-full h-full"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-5xl font-bold" >
          Click For Change BackgroundColor
        </h1>

        <div className="fixed bottom-20 flex flex-wrap shadow-xl justify-center gap-3 px-3 py-2 rounded-3xl bg-white">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-red-600"
            // style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-green-700"
            // style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-orange-700"
            // style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-pink-700"
            // style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-gray-700"
            // style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-blue-700"
            // style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-purple-700"
            // style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md hover:shadow-4xl bg-yellow-600"
            // style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
