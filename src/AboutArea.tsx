export default function AboutArea() {
  return (
    <section id="about" className="mb-20">
      <h2 className="relative flex items-center gap-4 mb-10 before:block before:w-16 before:border-b-2 before:border-slate-300 after:block after:w-full after:border-b-2 after:border-slate-300">
        <span className="px-5 text-5xl text-blue-300 border-x-4 border-dashed">
          About
        </span>
      </h2>
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
            <th className="w-1/2 h-32 bg-blue-200 font-normal">
              <span className="p-3 bg-slate-50 border-2 border-slate-300 rounded-xl">
                出身地
              </span>
            </th>
            <td className="w-1/2 h-32">愛媛県</td>
          </tr>
          <tr className="border-b-2 border-neutral-300">
            <th className="w-1/2 h-32 bg-blue-300 font-normal">
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
