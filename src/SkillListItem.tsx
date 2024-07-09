type PropsType = {
  skillIcon: string;
  skillName: string;
};

export default function SkillListItem({ skillIcon, skillName }: PropsType) {
  const base = import.meta.env.BASE_URL;
  return (
    <li>
      <div className="flex flex-col gap-2 w-20 text-center">
        <img
          src={`${base}${skillIcon}`}
          alt={`${skillName}のアイコン`}
          className="block w-full h-20 object-contain"
        />
        <span>{skillName}</span>
      </div>
    </li>
  );
}
