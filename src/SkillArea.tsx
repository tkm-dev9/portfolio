import Heading from "Heading";
import SkillListItem from "SkillListItem";

export default function SkillArea() {
  return (
    <section id="skill" className="mb-20">
      <Heading>Skill</Heading>
      <ul className="grid grid-cols-3 gap-y-10 justify-items-center">
        <SkillListItem skillIcon="html-logo.png" skillName="HTML" />
        <SkillListItem skillIcon="css-logo.png" skillName="CSS" />
        <SkillListItem skillIcon="sass-logo.png" skillName="Sass" />
        <SkillListItem
          skillIcon="tailwindcss-logo.svg"
          skillName="TailwindCSS"
        />
        <SkillListItem skillIcon="js-logo.png" skillName="JavaScript" />
        <SkillListItem skillIcon="jquery-logo.png" skillName="jQuery" />
        <SkillListItem skillIcon="ts-logo.png" skillName="TypeScript" />
        <SkillListItem skillIcon="react-logo.svg" skillName="React" />
        <SkillListItem skillIcon="nextjs-logo.png" skillName="Next.js" />
        <SkillListItem skillIcon="php-logo.png" skillName="PHP" />
        <SkillListItem skillIcon="docker-logo.png" skillName="Docker" />
        <SkillListItem skillIcon="wordpress-logo.png" skillName="WordPress" />
        <SkillListItem skillIcon="gulp-logo.svg" skillName="Gulp" />
        <SkillListItem skillIcon="webpack-logo.png" skillName="Webpack" />
        <SkillListItem skillIcon="vite-logo.png" skillName="Vite" />
        <SkillListItem skillIcon="storybook-logo.svg" skillName="Storybook" />
        <SkillListItem skillIcon="playwright-logo.png" skillName="Playwright" />
        <SkillListItem skillIcon="eslint-logo.png" skillName="EsLint" />
        <SkillListItem skillIcon="prettier-logo.svg" skillName="Prettier" />
        <SkillListItem skillIcon="biome-logo.png" skillName="Biome" />
        <SkillListItem skillIcon="git-logo.png" skillName="Git" />
        <SkillListItem skillIcon="github-logo.png" skillName="GitHub" />
        <SkillListItem
          skillIcon="github-actions-logo.png"
          skillName="GitHubActions"
        />
        <SkillListItem skillIcon="vscode-logo.png" skillName="Vscode" />
      </ul>
    </section>
  );
}
