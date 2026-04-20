import { motion } from "motion/react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Download,
  EyeOff,
  Globe,
  Layout,
  Lock,
  Menu,
  Shield,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const BAKY_LOGO = "/BakyBrowser.png";
const BAKY_CLOUD_LOGO = "/Baky_cloud_-removebg.png";
const DOWNLOAD_URL = "https://github.com/GeneralMartin180/baky-browser-auto-uptade-/releases/download/v0.1.10/Baky.Browser.Setup.0.1.10.exe";

const BrandMark = ({ large = false }: { large?: boolean }) => (
  <img
    src={BAKY_LOGO}
    alt="Baky Browser"
    className={`${
      large ? "w-14 h-14 rounded-[18px]" : "w-9 h-9 rounded-[12px]"
    } object-cover shadow-[0_10px_30px_rgba(37,99,235,0.20)]`}
  />
);

const CloudMark = ({ large = false, framed = false }: { large?: boolean; framed?: boolean }) => (
  <div
    className={`inline-flex items-center justify-center ${
      large ? "w-14 h-14 rounded-[18px]" : "w-9 h-9 rounded-[12px]"
    } ${framed ? "border border-white/50 bg-white/90 p-1.5 shadow-sm" : "p-0.5"}`}
  >
    <img
      src={BAKY_CLOUD_LOGO}
      alt="Baky Cloud"
      className="w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(37,99,235,0.18)]"
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <div className="text-lg font-bold tracking-tight text-slate-900">Baky Browser</div>
              <div className="text-[11px] font-medium text-slate-500">od Baky OS</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#funkcie" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">
              Funkcie
            </a>
            <a href="#cloud" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">
              Baky Cloud
            </a>
            <a href="#rozhranie" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">
              Rozhranie
            </a>
            <a
              href={DOWNLOAD_URL}
              className="px-4 py-2 bg-brand text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
              target="_blank"
              rel="noreferrer"
            >
              Stiahnuť
            </a>
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Otvoriť menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-slate-200/60 px-4 py-4 flex flex-col gap-4"
        >
          <a href="#funkcie" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700">
            Funkcie
          </a>
          <a href="#cloud" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700">
            Baky Cloud
          </a>
          <a href="#rozhranie" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700">
            Rozhranie
          </a>
          <a
            href={DOWNLOAD_URL}
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 bg-brand text-white text-sm font-semibold rounded-2xl text-center"
            target="_blank"
            rel="noreferrer"
          >
            Stiahnuť pre Windows
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const HeroPreview = () => (
  <div className="relative">
    <div className="absolute -top-10 -right-12 w-40 h-40 rounded-full bg-blue-300/25 blur-3xl" />
    <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-sky-200/30 blur-3xl" />

    <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white p-2 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
      <div className="rounded-[22px] overflow-hidden border border-slate-100 bg-white">
        <div className="h-14 bg-[#eef2f7] border-b border-slate-200 flex items-end px-3 pt-3 gap-2">
          <div className="h-10 min-w-[210px] rounded-t-[14px] bg-white border border-slate-200 border-b-white px-3 flex items-center gap-2 text-[13px] font-semibold text-slate-700">
            <CloudMark />
            <span>Baky Cloud</span>
            <X size={14} className="ml-auto text-slate-400" />
          </div>
          <button className="w-8 h-8 rounded-full text-slate-500 flex items-center justify-center mb-1">
            +
          </button>
        </div>

        <div className="h-14 bg-[#f8fafc] border-b border-slate-200 px-4 flex items-center gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <ChevronRight size={16} className="rotate-180" />
            <ChevronRight size={16} />
            <Shield size={16} />
          </div>
          <div className="flex-1 h-10 rounded-full bg-[#e9eef5] border border-slate-200 flex items-center px-4 gap-3 text-sm text-slate-500">
            <Globe size={16} />
            <span>Vyhľadajte cez Brave alebo zadajte adresu</span>
          </div>
          <div className="text-slate-400">
            <Menu size={18} />
          </div>
        </div>

        <div className="bg-[radial-gradient(circle_at_top,#f8fbff_0%,#eff5fb_38%,#f8fafc_100%)] px-8 py-12 min-h-[460px] flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <BrandMark large />
            <div>
              <div className="text-[38px] md:text-[44px] font-black tracking-tight text-slate-900">
                Baky Browser
              </div>
              <div className="text-sm text-slate-500">Baky Cloud, adblock a kontrola nad súkromím</div>
            </div>
          </div>

          <div className="w-full max-w-[680px] h-[54px] rounded-[16px] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center px-5 gap-3">
            <Globe size={18} className="text-slate-400" />
            <span className="text-sm text-slate-500">Vyhľadajte cez Brave alebo zadajte adresu</span>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-sm">
            <CloudMark />
            <span className="text-sm font-semibold text-slate-700">Baky Cloud je pripravený</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-10 w-full max-w-[620px]">
            {[
              { label: "Baky Cloud", text: "Oddelená session s Tor routovaním a .onion podporou" },
              { label: "Anti-tracking", text: "Blokovanie reklám, Google tagov a tracking requestov" },
              { label: "Bezpečnosť", text: "Úrovne Standard, Safer a Safest priamo v nastaveniach" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-slate-200 bg-white px-4 py-4 text-left shadow-sm"
              >
                <div className="text-sm font-bold text-slate-900">{item.label}</div>
                <div className="mt-2 text-[11px] leading-4 text-slate-500">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Windows build", "Tor bundle", "Bez klasickej histórie"].map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-6">
          <Sparkles size={14} />
          Produkt od Baky OS
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.02] tracking-tight mb-6">
          Windows browser s Baky Cloud, adblockom a väčšou kontrolou nad súkromím.
        </h1>
        <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
          Baky Browser je desktopový prehliadač od Baky OS. Prináša Baky Cloud režim s Tor
          routovaním, blokovanie reklám a trackerov, bezpečnostné úrovne Standard, Safer a
          Safest a čisté rozhranie pripravené pre Windows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={DOWNLOAD_URL}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200/60"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={20} />
            Stiahnuť pre Windows
          </a>
          <a
            href="#funkcie"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Pozrieť funkcie
            <ChevronRight size={20} />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-brand" />
            <span>Baky Cloud používa Tor routovanie a oddelenú session</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-brand" />
            <span>Windows build obsahuje aj pribalený Tor bundle</span>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-slate-500">
          Najnovší build sa sťahuje priamo z GitHub release assetu.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <HeroPreview />
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Globe className="text-blue-500" />,
      title: "Baky Cloud",
      desc: "Oddelená cloud session s Tor routovaním, .onion adresami a vlastným súkromným tokom prehliadania.",
    },
    {
      icon: <EyeOff className="text-rose-500" />,
      title: "AdBlock a anti-tracking",
      desc: "Blokovanie reklám, Google tagov, analytics, doubleclick requestov a ďalších sledovacích vrstiev.",
    },
    {
      icon: <Shield className="text-emerald-500" />,
      title: "Bezpečnostné úrovne",
      desc: "Standard, Safer a Safest. Ty rozhoduješ, koľko webových funkcií majú stránky dostať.",
    },
    {
      icon: <Layout className="text-indigo-500" />,
      title: "Čisté rozhranie",
      desc: "Nová karta, horný panel a homepage bez chaosu. Dôraz je na použiteľnosť a čitateľnosť.",
    },
    {
      icon: <Lock className="text-violet-500" />,
      title: "Súkromie bez histórie",
      desc: "Browser nemá klasickú históriu prehliadania. Prihlásenia si vie ponechať cez cookies, keď to potrebuješ.",
    },
    {
      icon: <Zap className="text-amber-500" />,
      title: "Windows build s Torom",
      desc: "Portable build je pripravený na stiahnutie a Baky Cloud vie fungovať aj s pribaleným Tor bundle.",
    },
  ];

  return (
    <section id="funkcie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Funkcie, ktoré už v Baky Browseri reálne sú
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Žiadne vymyslené milióny používateľov. Len to, čo dnes Baky Browser prináša na
            Windowse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-[28px] border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyBaky = () => {
  const points = [
    "Patrí pod značku Baky OS a má vlastné vizuálne smerovanie.",
    "Baky Cloud beží cez oddelenú session s Tor routovaním, nie len cez obyčajné nové okno.",
    "Blokuje reklamy, Google tagy a tracking requesty priamo v browseri.",
    "Browser nemá klasickú históriu prehliadania, ale cookies môže ponechať na prihlásenie.",
    "Windows build môžeš zdieľať ako portable balík aj s pribaleným Tor bundle.",
  ];

  return (
    <section id="cloud" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-8">
              Prečo Baky Cloud a nie len ďalší skin na browser
            </h2>
            <div className="space-y-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium text-slate-700 leading-6">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/5 blur-3xl rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="aspect-square rounded-[28px] bg-brand p-8 flex flex-col justify-end text-white shadow-xl">
              <CloudMark large framed />
              <h4 className="font-bold text-lg">Baky Cloud</h4>
              <p className="mt-2 text-sm text-blue-100">
                Tor routovanie, .onion podpora a oddelená session bez zbytočného UX chaosu.
              </p>
            </div>
            <div className="aspect-[3/4] rounded-[28px] bg-white border border-slate-200 p-8 flex flex-col justify-end shadow-sm">
              <EyeOff size={32} className="mb-4 text-rose-500" />
              <h4 className="font-bold text-lg text-slate-900">Bez klasickej histórie</h4>
              <p className="mt-2 text-sm text-slate-500">
                Browser sa nespolieha na klasickú históriu prehliadania. Prihlásenia ostávajú cez cookies.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4 pt-12">
            <div className="aspect-[3/4] rounded-[28px] bg-slate-900 p-8 flex flex-col justify-end text-white shadow-xl">
              <Shield size={32} className="mb-4 text-blue-300" />
              <h4 className="font-bold text-lg">Anti-tracking</h4>
              <p className="mt-2 text-sm text-slate-300">
                Google ads, tagy, analytics a ďalšie trackery dostávajú blok už na request vrstve.
              </p>
            </div>
            <div className="aspect-square rounded-[28px] bg-white border border-slate-200 p-8 flex flex-col justify-end text-slate-900 shadow-sm">
              <Lock size={32} className="mb-4 text-brand" />
              <h4 className="font-bold text-lg">Standard, Safer, Safest</h4>
              <p className="mt-2 text-sm text-slate-500">
                Bezpečnostné úrovne prepínajú JavaScript a ďalšie webové funkcie podľa tvojho nastavenia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const items = [
    { value: "Baky Cloud", label: "Oddelená session, Tor routovanie a .onion podpora" },
    { value: "Anti-tracking", label: "Blokovanie reklám, Google tagov a tracking endpointov" },
    { value: "3 úrovne", label: "Standard, Safer a Safest pre rôzne úrovne ochrany" },
    { value: "Windows", label: "Portable build s pribaleným Tor bundle pripravený na zdieľanie" },
  ];

  return (
    <section id="statistiky" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">Čo dnes Baky Browser prináša</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Reálne body, ktoré sedia s tým, ako je Baky Browser spravený dnes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-8"
            >
              <div className="text-3xl lg:text-4xl font-black text-blue-300 mb-3">{item.value}</div>
              <div className="text-sm leading-6 text-slate-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InterfacePreview = () => (
  <section id="rozhranie" className="py-24 bg-bg-subtle">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-4">
          Rozhranie navrhnuté na normálne používanie
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Baky Browser sa nesnaží tváriť ako obrovský korporátny projekt. Cieľ je čisté okno,
          rýchly štart a viac kontroly nad tým, čo web môže robiť.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-[32px] bg-white border border-slate-200 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
        >
          <div className="rounded-[24px] overflow-hidden border border-slate-100">
            <div className="h-11 bg-[#eef2f7] border-b border-slate-200 flex items-center px-4 gap-3">
              <div className="w-20 h-6 rounded-full bg-white border border-slate-200" />
              <div className="flex-1 h-7 rounded-full bg-[#dde6f0]" />
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200" />
            </div>
            <div className="p-8 md:p-12 bg-[linear-gradient(180deg,#f9fbff_0%,#ffffff_100%)]">
              <div className="flex items-center gap-4 justify-center mb-8">
                <BrandMark large />
                <div className="text-4xl font-black tracking-tight text-slate-900">Baky Browser</div>
              </div>
              <div className="h-14 rounded-[18px] border border-slate-200 shadow-sm bg-white flex items-center px-5 gap-3 max-w-[720px] mx-auto">
                <Globe size={18} className="text-slate-400" />
                <span className="text-sm text-slate-500">Vyhľadajte cez Brave alebo zadajte adresu</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-10">
                {[
                  "Baky Cloud okno s Tor routovaním a .onion podporou",
                  "Bezpečnostné úrovne Standard, Safer a Safest",
                  "AdBlock a anti-tracking priamo v browseri",
                ].map((text) => (
                  <div
                    key={text}
                    className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              icon: <Globe size={18} className="text-brand" />,
              title: "Baky Cloud",
              body: "Cloud režim vie bežať v samostatnom okne aj cez toggle. Routing ide cez Tor, nie len cez vizuálny skin.",
            },
            {
              icon: <Shield size={18} className="text-emerald-500" />,
              title: "Anti-tracking",
              body: "Browser seká reklamy, tagy a tracking requesty ešte skôr, než sa stihnú normálne rozbehnúť.",
            },
            {
              icon: <Download size={18} className="text-rose-500" />,
              title: "Windows build",
              body: "Stiahneš, rozbalíš a spustíš. Najnovší build ide priamo cez GitHub release asset a obsahuje aj Tor bundle.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[28px] bg-white border border-slate-200 p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <div className="text-lg font-bold text-slate-900">{card.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="stiahnut" className="py-24 px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-5xl mx-auto rounded-[40px] bg-brand p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-[0_30px_80px_rgba(37,99,235,0.28)]"
    >
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
          Stiahni si najnovší Baky Browser
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Windows browser od Baky OS pre tých, ktorí chcú Baky Cloud, adblock, anti-tracking
          a viac kontroly nad súkromím. Najnovší build ide priamo cez GitHub release asset.
        </p>
        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand font-bold text-lg rounded-2xl hover:bg-blue-50 transition-colors shadow-xl"
          target="_blank"
          rel="noreferrer"
        >
          <Download size={24} />
          Stiahnuť teraz
        </a>
        <p className="mt-6 text-sm text-blue-200">Dostupné pre Windows</p>
        <p className="mt-2 text-sm font-medium text-blue-100">
          Súčasťou buildu je aj Tor bundle pre Baky Cloud.
        </p>
        <div className="mt-6 max-w-2xl mx-auto rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-amber-200">
              <AlertTriangle size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Tip po stiahnutí</div>
              <p className="mt-1 text-sm leading-6 text-blue-100">
                Po stiahnutí nechaj build pokope v jednom priečinku. Baky Cloud potrebuje
                priečinok <span className="font-semibold text-white">resources</span> aj
                <span className="font-semibold text-white"> tor-bundle</span>, takže
                nespúšťaj iba vytrhnuté <span className="font-semibold text-white">.exe</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <BrandMark />
            <span className="text-xl font-bold tracking-tight text-slate-900">Baky Browser</span>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed">
            Produkt Baky OS. Windows browser s Baky Cloud režimom, adblockom, anti-trackingom
            a väčšou kontrolou nad tým, čo web robí.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Produkt</h5>
          <ul className="space-y-4">
            <li><a href="#funkcie" className="text-slate-500 hover:text-brand transition-colors">Funkcie</a></li>
            <li><a href="#cloud" className="text-slate-500 hover:text-brand transition-colors">Baky Cloud</a></li>
            <li><a href="#stiahnut" className="text-slate-500 hover:text-brand transition-colors">Stiahnuť</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Build</h5>
          <ul className="space-y-4">
            <li><a href="#rozhranie" className="text-slate-500 hover:text-brand transition-colors">Rozhranie</a></li>
            <li><a href={DOWNLOAD_URL} className="text-slate-500 hover:text-brand transition-colors" target="_blank" rel="noreferrer">Priamy .exe download</a></li>
            <li><a href="#stiahnut" className="text-slate-500 hover:text-brand transition-colors">Windows build</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">© 2026 Baky OS. Všetky práva vyhradené.</p>
        <div className="flex gap-8">
          <a href="#cloud" className="text-slate-400 hover:text-brand transition-colors text-sm">Baky Cloud</a>
          <a href="#funkcie" className="text-slate-400 hover:text-brand transition-colors text-sm">Funkcie</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand/20 selection:text-brand">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyBaky />
        <Stats />
        <InterfacePreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
