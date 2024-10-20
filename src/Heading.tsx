type PropsType = {
  children: string;
};

export default function Heading({ children }: PropsType) {
  return (
    <h2 className="relative flex items-center gap-4 mb-10 before:block before:w-16 before:border-b-2 before:border-slate-300 after:block after:w-full after:border-b-2 after:border-slate-300">
      <span className="px-5 text-5xl text-blue-300 border-x-4 border-dashed text-shadow-heading">
        {children}
      </span>
    </h2>
  );
}
