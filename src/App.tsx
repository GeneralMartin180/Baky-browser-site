import { motion } from "motion/react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Download,
  EyeOff,
  Globe,
  History,
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
const DOWNLOAD_URL = "https://drive.google.com/drive/folders/1pnSBlqJQI-wZGXkVXkfRIp-OKipQDnFt?usp=sharing";

const BrandMark = ({ large = false }: { large?: boolean }) => (
  <img
    src={BAKY_LOGO}
    alt="Baky Browser"
    className={`${
      large ? "w-14 h-14 rounded-[18px]" : "w-9 h-9 rounded-[12px]"
    } object-cover shadow-[0_10px_30px_rgba(37,99,235,0.20)]`}
  />
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
            <a href="#preco" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">
              Prečo Baky Browser
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
          <a href="#preco" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700">
            Prečo Baky Browser
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
          <div className="h-10 min-w-[188px] rounded-t-[14px] bg-white border border-slate-200 border-b-white px-3 flex items-center gap-2 text-[13px] font-semibold text-slate-700">
            <BrandMark />
            <span>Nová karta</span>
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
            <History size={16} />
          </div>
          <div className="flex-1 h-10 rounded-full bg-[#e9eef5] border border-slate-200 flex items-center px-4 gap-3 text-sm text-slate-500">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Vyhľadajte cez Google alebo zadajte adresu</span>
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
              <div className="text-sm text-slate-500">Moderný browser od Baky OS</div>
            </div>
          </div>

          <div className="w-full max-w-[680px] h-[54px] rounded-[16px] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center px-5 gap-3">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
              referrerPolicy="no-referrer"
            />
            <span className="text-sm text-slate-500">Search with Google or enter address</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-10 w-full max-w-[560px]">
            {[
              { label: "AdBlock", text: "Blokovanie rušivých reklám" },
              { label: "AI panel", text: "Rýchly prístup k AI nástrojom" },
              { label: "Súkromie", text: "Jedno kliknutie na vymazanie stôp" },
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
          Rýchly, čistý a moderný browser pre Windows.
        </h1>
        <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
          Baky Browser je desktopový webový prehliadač od Baky OS. Stavia na rýchlom štarte,
          čistom rozhraní, blokovaní reklám a väčšej kontrole nad súkromím.
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
            <span>Vytvorený pod značkou Baky OS</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-brand" />
            <span>Zameraný na výkon a súkromie</span>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-slate-500">Sťahuje sa z Google Disku.</p>
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
      icon: <Zap className="text-amber-500" />,
      title: "Rýchle spustenie",
      desc: "Odľahčený štart a svižnejší pocit pri práci s kartami a stránkami.",
    },
    {
      icon: <Layout className="text-blue-500" />,
      title: "Moderné karty",
      desc: "Prehľadné horné rozhranie, nová karta a čistý browser layout bez zbytočností.",
    },
    {
      icon: <Shield className="text-emerald-500" />,
      title: "Ochrana súkromia",
      desc: "Viac kontroly nad cookies, históriou a stopami po prehliadaní.",
    },
    {
      icon: <EyeOff className="text-rose-500" />,
      title: "Blokovanie reklám",
      desc: "Integrované filtrovanie rušivých reklám a trackerov pre čistejší web.",
    },
    {
      icon: <Sparkles className="text-violet-500" />,
      title: "AI panel",
      desc: "Bočný panel s rýchlym prístupom k AI nástrojom priamo počas prehliadania.",
    },
    {
      icon: <History className="text-indigo-500" />,
      title: "Záložky a história",
      desc: "Jednoduchší návrat k obľúbeným stránkam a prehľad o navštívenom obsahu.",
    },
  ];

  return (
    <section id="funkcie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Funkcie, ktoré dávajú zmysel
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bez marketingových rozprávok. Len veci, ktoré majú zlepšiť každodenné prehliadanie.
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
    "Patrí pod značku Baky OS",
    "Navrhnutý pre rýchly štart a čisté používanie",
    "Má vlastné moderné rozhranie novej karty",
    "Ponúka blokovanie reklám a väčšiu kontrolu nad súkromím",
    "Mieri na jednoduchý browser pre Windows bez zbytočného balastu",
  ];

  return (
    <section id="preco" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-8">
              Prečo Baky Browser
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
              <Zap size={32} className="mb-4" />
              <h4 className="font-bold text-lg">Rýchlosť pri štarte</h4>
              <p className="mt-2 text-sm text-blue-100">Pocitovo svižnejší browser bez zbytočných vrstiev navyše.</p>
            </div>
            <div className="aspect-[3/4] rounded-[28px] bg-white border border-slate-200 p-8 flex flex-col justify-end shadow-sm">
              <Shield size={32} className="mb-4 text-emerald-500" />
              <h4 className="font-bold text-lg text-slate-900">Viac kontroly</h4>
              <p className="mt-2 text-sm text-slate-500">Mazanie histórie, cookies a stôp po prehliadaní priamo v nastaveniach.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4 pt-12">
            <div className="aspect-[3/4] rounded-[28px] bg-slate-900 p-8 flex flex-col justify-end text-white shadow-xl">
              <Sparkles size={32} className="mb-4 text-blue-300" />
              <h4 className="font-bold text-lg">AI po ruke</h4>
              <p className="mt-2 text-sm text-slate-300">Bočný panel pre rýchle prepnutie medzi webom a AI nástrojmi.</p>
            </div>
            <div className="aspect-square rounded-[28px] bg-white border border-slate-200 p-8 flex flex-col justify-end text-slate-900 shadow-sm">
              <Layout size={32} className="mb-4 text-brand" />
              <h4 className="font-bold text-lg">Čisté rozhranie</h4>
              <p className="mt-2 text-sm text-slate-500">Vizuál zameraný na obsah, nie na chaos a zbytočné prvky.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const items = [
    { value: "Windows", label: "Desktopový browser pripravený pre Windows" },
    { value: "AdBlock", label: "Integrované blokovanie reklám a trackerov" },
    { value: "AI panel", label: "Rýchly prístup k AI nástrojom priamo z rozhrania" },
    { value: "1 klik", label: "Vymazanie histórie, cookies a lokálnych stôp" },
  ];

  return (
    <section id="statistiky" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">Čo Baky Browser prináša</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Radšej pravdivé silné body než vymyslené milióny stiahnutí.
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
          Rozhranie navrhnuté pre každodenné používanie
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Nová karta, horný browser panel a bočné nástroje majú pôsobiť čisto, moderne a zrozumiteľne.
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
                <span className="text-sm text-slate-500">Search with Google or enter address</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-10">
                {[
                  "Nová karta s čistým rozhraním",
                  "Bočný AI panel pre rýchlu pomoc",
                  "AdBlock a súkromie priamo v browseri",
                ].map((text) => (
                  <div key={text} className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
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
              icon: <Sparkles size={18} className="text-brand" />,
              title: "AI panel",
              body: "Rýchle prepínanie medzi prehliadaním a AI nástrojmi bez zbytočne zložitého UI.",
            },
            {
              icon: <Lock size={18} className="text-emerald-500" />,
              title: "Súkromie",
              body: "Vymazanie histórie, cookies a webových stôp z jedného miesta v nastaveniach.",
            },
            {
              icon: <Shield size={18} className="text-rose-500" />,
              title: "AdBlock",
              body: "Čistejšie výsledky a menej rušivých prvkov počas bežného prehliadania webu.",
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
          Vyskúšaj Baky Browser
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Browser od Baky OS pre tých, ktorí chcú rýchlejšie prehliadanie, modernejšie rozhranie a viac kontroly nad súkromím.
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
        <p className="mt-2 text-sm font-medium text-blue-100">Sťahuje sa z Google Disku.</p>
        <div className="mt-6 max-w-2xl mx-auto rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-amber-200">
              <AlertTriangle size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Tip po stiahnutí</div>
              <p className="mt-1 text-sm leading-6 text-blue-100">
                Ak sa Baky Browser po prvom spustení nenačíta správne alebo bude chvíľu reagovať pomalšie,
                zavri ho a spusti znova. V niektorých prípadoch pomôže aj opätovný dvojklik na súbor, aby si si
                mohol naplno užiť čistejšie a súkromnejšie prehliadanie.
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
            Produkt firmy Baky OS. Browser pre Windows zameraný na rýchlosť, čistejšie rozhranie a väčšiu kontrolu nad súkromím.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Produkt</h5>
          <ul className="space-y-4">
            <li><a href="#funkcie" className="text-slate-500 hover:text-brand transition-colors">Funkcie</a></li>
            <li><a href="#rozhranie" className="text-slate-500 hover:text-brand transition-colors">Rozhranie</a></li>
            <li><a href="#stiahnut" className="text-slate-500 hover:text-brand transition-colors">Stiahnuť</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Baky OS</h5>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-500 hover:text-brand transition-colors">O projekte</a></li>
            <li><a href="#" className="text-slate-500 hover:text-brand transition-colors">Súkromie</a></li>
            <li><a href="#" className="text-slate-500 hover:text-brand transition-colors">Kontakt</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">© 2025 Baky OS. Všetky práva vyhradené.</p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-brand transition-colors text-sm">Podmienky</a>
          <a href="#" className="text-slate-400 hover:text-brand transition-colors text-sm">Cookies</a>
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
