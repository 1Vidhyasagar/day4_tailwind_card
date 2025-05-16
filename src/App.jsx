import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex flex-col items-center justify-center content-evenly w-screen h-screen; p-20">
        <h1>Hello React</h1>
        <Card
          name="Vidhyasagar"
          role="Full stack dev"
          age={29}
          location="Bangalore"
        />
        <Card name="Alice" role="Designer" age={24} location="Bangalore" />
        <h2>Counter : {count}</h2>
        <button
          class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
