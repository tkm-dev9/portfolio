import KvImg from "./img/cat.png";

export default function Kv() {
  return (
    <div>
      <img
        src={KvImg}
        alt=""
        className="block w-80 h-80 mx-auto mb-5 rounded-full"
      />
      <p className="text-3xl text-center">Name: TKM</p>
    </div>
  );
}
