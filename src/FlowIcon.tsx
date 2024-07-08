type PropsType = {
  iconName: string;
  isReverse: boolean;
};

export default function FlowIcon({ iconName, isReverse }: PropsType) {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <p
        className={`${isReverse ? "animate-reverse-flow-icon" : "animate-flow-icon"}`}
      >
        <img
          src={`${base}${iconName}`}
          alt=""
          className="animate-rotate-icon block w-10 mx-auto"
        />
      </p>
    </div>
  );
}
