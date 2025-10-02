export default function Die(props) {
  return (
    <button className="font-karla h-30 w-30 cursor-pointer rounded-2xl bg-white text-6xl font-bold text-[#2B283A] drop-shadow-lg">
      {props.value}
    </button>
  );
}
