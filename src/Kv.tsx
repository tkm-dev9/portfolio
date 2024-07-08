import FlowIcon from "FlowIcon";

export default function Kv() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="flex flex-col justify-center h-screen mb-10 pt-20 bg-blue-50">
      <FlowIcon iconName="soccer-ball.png" isReverse={false} />
      <img
        src={`${base}cat.png`}
        alt=""
        className="block w-80 h-80 mx-auto mt-4 mb-5 rounded-full shadow-[0_0_10px_5px_#333]"
      />
      <p className="mb-4 text-3xl text-center">Name: TKM</p>
      <FlowIcon iconName="soccer-ball.png" isReverse={true} />
    </div>
  );
}
