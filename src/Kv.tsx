export default function Kv() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="mb-10">
      <img
        src={`${base}cat.png`}
        alt=""
        className="block w-80 h-80 mx-auto mb-5 rounded-full"
      />
      <p className="text-3xl text-center">Name: TKM</p>
    </div>
  );
}
