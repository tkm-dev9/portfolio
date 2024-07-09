import Heading from "Heading";

export default function SkillArea() {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="skill" className="mb-20">
      <Heading>Skill</Heading>
      <ul className="grid grid-cols-3 gap-y-10 justify-items-center">
        <li>
          <div className="flex flex-col gap-2 w-20 text-center">
            <img src={`${base}html-logo.png`} alt="" className="block w-full" />
            <span>HTML</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 w-20 text-center">
            <img
              src={`${base}css-logo.png`}
              alt=""
              className="block w-full h-20 object-contain"
            />
            <span>CSS</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 w-20 text-center">
            <img
              src={`${base}js-logo.png`}
              alt=""
              className="block w-full h-20 object-contain"
            />
            <span>JavaScript</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 w-20 text-center">
            <img
              src={`${base}ts-logo.png`}
              alt=""
              className="block w-full h-20 object-contain"
            />
            <span>TypeScript</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 w-20 text-center">
            <img
              src={`${base}react-logo.svg`}
              alt=""
              className="block w-full h-20 object-contain"
            />
            <span>React</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 w-20 text-center">
            <img
              src={`${base}nextjs-logo.png`}
              alt=""
              className="block w-full h-20 object-contain"
            />
            <span>Next.js</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
