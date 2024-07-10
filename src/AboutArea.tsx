import Heading from "Heading";

export default function AboutArea() {
  return (
    <section id="about" className="mb-20">
      <Heading>About</Heading>
      <table className="w-full border-collapse border-4 border-neutral-300 mx-auto text-center">
        <tbody>
          <tr className="border-b-2 border-neutral-300">
            <th className="w-1/2 h-32 bg-blue-100 font-normal">
              <span className="p-3 bg-slate-50 border-2 border-slate-300 rounded-xl">
                生年月日
              </span>
            </th>
            <td className="w-1/2 h-32">1997年10月11日</td>
          </tr>
          <tr className="border-b-2 border-neutral-300">
            <th className="w-1/2 h-32 bg-blue-100 font-normal">
              <span className="p-3 bg-slate-50 border-2 border-slate-300 rounded-xl">
                出身地
              </span>
            </th>
            <td className="w-1/2 h-32">愛媛県</td>
          </tr>
          <tr className="border-b-2 border-neutral-300">
            <th className="w-1/2 h-32 bg-blue-100 font-normal">
              <span className="p-3 bg-slate-50 border-2 border-slate-300 rounded-xl">
                趣味
              </span>
            </th>
            <td className="w-1/2 h-32">
              <ul className="table mx-auto text-left">
                <li>アニメを見ること</li>
                <li>書店に行くこと</li>
                <li>プログラミングすること</li>
                <li>運動すること</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
