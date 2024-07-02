import Kv from "./Kv";
import SkillArea from "./SkillArea";
import AboutArea from "./AboutArea";
import LinksArea from "./LinksArea";

export default function Contents() {
  return (
    <div className="pt-20">
      <Kv />
      <AboutArea />
      <SkillArea />
      <LinksArea />
    </div>
  );
}
