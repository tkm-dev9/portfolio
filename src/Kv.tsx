import FlowIcon from "FlowIcon";

export default function Kv() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="flex flex-col justify-center h-screen mb-10 pt-20 bg-blue-50">
      <div className="w-100 mx-auto p-5 bg-white border-2 border-neutral-300">
        <img
          src={`${base}cat.png`}
          alt=""
          className="block w-full h-80 mx-auto mt-4 mb-5 rounded-full shadow-[0_0_10px_5px_#333]"
        />
        <p className="w-full mb-4 py-2 text-3xl bg-white border-2 border-double border-black text-center font-extrabold tracking-widest">
          S.TAKUMU
        </p>
      </div>
    </div>
  );
}
