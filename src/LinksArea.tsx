import Heading from "Heading";

export default function LinksArea() {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="links" className="mb-20">
      <Heading>Links</Heading>
      <div className="flex justify-center flex-wrap gap-4">
        <a
          href="https://github.com/tkm-dev9/"
          className="flex justify-between items-center gap-4 w-60 p-4 bg-slate-300 cursor-pointer"
        >
          <img src={`${base}github-logo.png`} alt="" className="w-14" />
          <span className="text-2xl">Github</span>
          <img src={`${base}external_link_icon.png`} alt="" className="w-8" />
        </a>
        <a
          href="https://cosen.se/sumikawa-web/"
          className="flex justify-between items-center gap-4 w-60 p-4 bg-slate-300 cursor-pointer"
        >
          <img src={`${base}cosense-logo.png`} alt="" className="w-14" />
          <span className="text-2xl">Cosense</span>
          <img src={`${base}external_link_icon.png`} alt="" className="w-8" />
        </a>
        <a
          href="https://zenn.dev/tkm99"
          className="flex justify-between items-center gap-4 w-60 p-4 bg-slate-300 cursor-pointer"
        >
          <img src={`${base}zenn-logo.svg`} alt="" className="w-14" />
          <span className="text-2xl">Zenn</span>
          <img src={`${base}external_link_icon.png`} alt="" className="w-8" />
        </a>
      </div>
    </section>
  );
}
