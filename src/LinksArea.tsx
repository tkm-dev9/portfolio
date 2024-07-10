import Heading from "Heading";

export default function LinksArea() {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="links" className="mb-20">
      <Heading>Links</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 justify-items-center">
        <a
          href="https://github.com/tkm-dev9/"
          className="relative flex items-center gap-5 w-60 p-4 bg-slate-300 cursor-pointer transition-opacity duration-700 ease-out hover:opacity-60"
        >
          <img src={`${base}github-logo.png`} alt="" className="w-14" />
          <span className="columns-1 text-2xl">Github</span>
          <img
            src={`${base}external_link_icon.png`}
            alt=""
            className="absolute top-1/2 right-2 -translate-y-1/2 w-8"
          />
        </a>
        <a
          href="https://cosen.se/sumikawa-web/"
          className="relative flex items-center gap-5 w-60 p-4 bg-slate-300 cursor-pointer transition-opacity duration-700 ease-out hover:opacity-60"
        >
          <img src={`${base}cosense-logo.svg`} alt="" className="w-14" />
          <span className="text-2xl">Cosense</span>
          <img
            src={`${base}external_link_icon.png`}
            alt=""
            className="absolute top-1/2 right-2 -translate-y-1/2 w-8"
          />
        </a>
        <a
          href="https://zenn.dev/tkm99"
          className="relative flex items-center gap-5 w-60 p-4 bg-slate-300 cursor-pointer transition-opacity duration-700 ease-out hover:opacity-60"
        >
          <img src={`${base}zenn-logo.svg`} alt="" className="w-14" />
          <span className="text-2xl">Zenn</span>
          <img
            src={`${base}external_link_icon.png`}
            alt=""
            className="absolute top-1/2 right-2 -translate-y-1/2 w-8"
          />
        </a>
      </div>
    </section>
  );
}
