import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed-flex justify-center">
        <div className="flex justify-center gap-3 px-3 py-3 rounded-xl">
          <button className="px-4bg-black">Red</button>
          <button>Red</button>
          <button>Red</button>
          <button>Red</button>
        </div>
        <button onClick={() => setColor("red")}></button>
      </div>
    </div>
  );
}

export default App;
