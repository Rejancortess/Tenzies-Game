import { useState } from "react";

import "./App.css";
import Die from "./components/Die";

function App() {
  function randomDice() {
    let arr = [];
    let i = 1;
    while (i <= 10) {
      arr.push(Math.ceil(Math.random() * 6));
      i++;
    }
    return arr;
  }
  const [dice, setDice] = useState(randomDice);
  const renderDice = dice.map((value) => <Die value={value} />);
  const reRoll = () => {
    setDice(randomDice);
  };

  return (
    <>
      <main className="flex h-200 w-250 flex-col items-center justify-center gap-20 rounded-2xl bg-[#F5F5F5]">
        <div className="grid grid-cols-5 gap-15">{renderDice}</div>
        <button
          onClick={reRoll}
          className="font-karla h-25 w-60 cursor-pointer rounded-2xl bg-[#5035FF] text-5xl font-bold text-white shadow-2xl active:scale-95"
        >
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
