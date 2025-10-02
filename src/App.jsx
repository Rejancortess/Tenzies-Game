import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import Instruction from "./components/Instruction";
import Toast from "./components/Toast";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(randomDice);
  const [showToast, setShowToast] = useState(false);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      setShowToast(true);
    }
  }, [gameWon]);

  function randomDice() {
    let arr = [];
    let i = 1;
    while (i <= 10) {
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
      i++;
    }
    return arr;
  }

  const hold = (id) => {
    setDice((prev) =>
      prev.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const renderDice = dice.map((diceObj) => (
    <Die
      hold={() => hold(diceObj.id)}
      key={diceObj.id}
      isHeld={diceObj.isHeld}
      value={diceObj.value}
    />
  ));
  const reRoll = () => {
    setDice((prev) =>
      prev.map((dice) => {
        return !dice.isHeld
          ? { ...dice, value: Math.ceil(Math.random() * 6) }
          : dice;
      })
    );
  };

  return (
    <>
      <Toast
        message="You Won!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <main className="flex h-200 w-250 flex-col items-center justify-center gap-20 rounded-2xl bg-[#F5F5F5]">
        <Instruction />
        <div className="grid grid-cols-5 gap-15">{renderDice}</div>
        {gameWon ? (
          <button
            onClick={() => setDice(randomDice)}
            className="font-karla h-25 w-80 cursor-pointer rounded-2xl bg-[#5035FF] text-5xl font-bold text-white shadow-2xl active:scale-95"
          >
            New Game
          </button>
        ) : (
          <button
            onClick={reRoll}
            className="font-karla h-25 w-60 cursor-pointer rounded-2xl bg-[#5035FF] text-5xl font-bold text-white shadow-2xl active:scale-95"
          >
            Roll
          </button>
        )}
        {gameWon && <Confetti />}
      </main>
    </>
  );
}

export default App;
