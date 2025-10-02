export default function Die(props) {
  const style = {
    background: props.isHeld === true ? "#59E391" : "white",
  };
  return (
    <button
      onClick={props.hold}
      style={{ background: style.background }}
      className="font-karla h-30 w-30 cursor-pointer rounded-2xl bg-white text-6xl font-bold text-[#2B283A] drop-shadow-lg"
    >
      {props.value}
    </button>
  );
}
