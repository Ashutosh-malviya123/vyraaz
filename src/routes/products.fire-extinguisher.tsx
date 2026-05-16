import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/vyraaz-logo.png";

import abcImg from "@/assets/extinguisher-products/abc-powder.jpg";
import bcImg from "@/assets/extinguisher-products/bc-powder.jpg";
import foamImg from "@/assets/extinguisher-products/mechanical-foam.jpg";
import co2Img from "@/assets/extinguisher-products/co2.jpg";
import cleanImg from "@/assets/extinguisher-products/clean-agent.jpg";
import trolleyImg from "@/assets/extinguisher-products/trolley-foam.jpg";
import floodingImg from "@/assets/extinguisher-products/co2-flooding.jpg";
import ceilingImg from "@/assets/extinguisher-products/ceiling-modular.jpg";
import ballImg from "@/assets/extinguisher-products/fire-ball.jpg";
import heroImg from "@/assets/extinguisher-products/hero.jpg";

export const Route = createFileRoute("/products/fire-extinguisher")({
  component: FireExtinguisherPage,
  head: () => ({
    meta: [
      { title: "Fire Extinguishers — ABC, BC, CO₂, Foam, Clean Agent | Vyraaz Firetech" },
      { name: "description", content: "Complete range of portable and trolley-mounted fire extinguishers — ABC powder, BC powder, mechanical foam, CO₂, clean agent, modular and fire ball. ISI marked, IS:15683 compliant." },
      { property: "og:title", content: "Fire Extinguishers | Vyraaz Firetech" },
      { property: "og:description", content: "ABC, BC, CO₂, foam, clean agent, modular and fire ball extinguishers — supply, installation and refilling." },
    ],
  }),
});

type Product = {
  id: string;
  img: string;
  title: string;
  bestUse?: string;
  intro: string;
};

const products: Product[] = [
  {
    id: "abc-powder",
    img: abcImg,
    title: "ABC Powder Type",
    bestUse: "Home, Office, Buildings, Warehouses, Farms, Wood-working areas",
    intro: "Stored-pressure ABC dry powder extinguisher charged with mono-ammonium phosphate (MAP) base powder. Effective on Class A, B and C fires — solids, flammable liquids and gases.",
  },
  {
    id: "bc-powder",
    img: bcImg,
    title: "BC Powder Type",
    intro: "Sodium-bicarbonate based BC dry powder extinguisher — both stored-pressure and cartridge-operated variants. Designed for flammable liquid and gas fires in industrial and kitchen environments.",
  },
  {
    id: "mechanical-foam",
    img: foamImg,
    title: "Mechanical Foam Type",
    intro: "AFFF aqueous film-forming foam extinguisher for Class A and B fires. Suitable for fuel storage, hangars, paint booths and locations handling flammable liquids.",
  },
  {
    id: "co2",
    img: co2Img,
    title: "Carbon Dioxide Type",
    intro: "Stored-pressure CO₂ extinguisher with discharge horn — clean, residue-free and ideal for electrical equipment, server rooms, switchgear and laboratories.",
  },
];

const otherProducts: Product[] = [
  { id: "clean-agent", img: cleanImg, title: "Clean Agent Type", intro: "HFC-227ea / FM-200 clean agent extinguisher leaving no residue — ideal for data centres, control rooms and high-value electronics." },
  { id: "trolley-foam", img: trolleyImg, title: "Trolley-Mount Mechanical Foam — 45 Ltr", intro: "Wheel-mounted 45-litre AFFF foam unit for warehouses, fuel depots and large industrial premises requiring extended discharge." },
  { id: "co2-flooding", img: floodingImg, title: "4 kg CO₂ Flooding", intro: "Modular CO₂ flooding cylinder for total-flooding suppression of electrical panels and enclosed risk areas." },
  { id: "ceiling-modular", img: ceilingImg, title: "Ceiling-Mount Modular Type", intro: "Automatic ceiling-mounted modular extinguisher with thermal bulb activation — protects unmanned areas 24×7." },
  { id: "fire-ball", img: ballImg, title: "Fire Ball", intro: "Self-activating fire-extinguishing ball that bursts on contact with flame — easy throw-and-go protection for kitchens, godowns and vehicles." },
];

const whyUs = [
  ["ISI / IS:15683 Compliant", "Every cylinder is BIS-certified and conforms to IS:15683:2018 design and performance standards."],
  ["Refilling & AMC", "Prompt on-site refilling, hydro-testing and annual maintenance contracts for full extinguisher fleets."],
  ["Right Class for Right Risk", "We size and select the correct extinguisher class for each hazard — A, B, C, electrical or kitchen."],
  ["Trained Installation", "Wall-mounting, signage and user training included so equipment is ready when seconds matter."],
];

function FireExtinguisherPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Vyraaz Firetech" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="relative group text-foreground/80 hover:text-foreground transition">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+918103497409" className="hidden sm:block">
              <Button className="bg-fire text-white hover:opacity-90 shadow-glow">
                <PhoneCall className="w-4 h-4 mr-2" /> 8103 497 409
              </Button>
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-11 h-11 grid place-items-center rounded-lg border border-border bg-card hover:bg-muted transition"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition"
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:+918103497409" className="sm:hidden mt-2">
                <Button className="w-full bg-fire text-white shadow-glow">
                  <PhoneCall className="w-4 h-4 mr-2" /> 8103 497 409
                </Button>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-fire opacity-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-ember">Fire Extinguisher</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
              Fire <span className="text-fire">Extinguishers</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/80 leading-relaxed">
              ABC, BC, mechanical foam, CO₂, clean agent, trolley-mounted and modular extinguishers — engineered for
              every fire class and every environment. ISI marked, BIS certified and conforming to IS:15683:2018.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-fire hover:bg-fire/90 text-white">Request a Quote</Button>
              <Link to="/"><Button size="lg" variant="outline">Back to Home</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Why Vyraaz</div>
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-[1]">
                The right extinguisher. Ready when it counts.
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Choosing the wrong extinguisher costs more than money. Our team surveys your site, recommends the
                correct class and capacity for each risk area, installs to code, and keeps every cylinder in service
                through scheduled refills and hydrostatic testing.
              </p>
            </div>
            <ul className="space-y-5">
              {whyUs.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-fire shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MAIN PRODUCTS WITH SPEC TABLES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Catalogue</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Portable <span className="text-fire">Extinguishers</span></h2>
          </motion.div>

          <div className="space-y-20">
            {products.map((p, i) => (
              <motion.article
                key={p.id}
                id={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start"
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-card group">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-ember mb-2">Type {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase">{p.title}</h3>
                  {p.bestUse && (
                    <div className="mt-3 text-sm">
                      <span className="text-muted-foreground">Best for: </span>
                      <span className="text-foreground/90">{p.bestUse}</span>
                    </div>
                  )}
                  <p className="mt-4 text-foreground/75 leading-relaxed">{p.intro}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PRODUCTS GRID */}
      <section className="py-20 border-t border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Specialised</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">More <span className="text-fire">Solutions</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((p, i) => (
              <motion.article
                key={p.id}
                id={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-fire transition-all hover:-translate-y-1 hover:shadow-fire"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.intro}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Need extinguishers or <span className="text-fire">refilling?</span></h2>
          <p className="mt-6 text-foreground/70">Talk to our team for a site assessment, the right class for each risk and an itemised quotation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/"><Button size="lg" className="bg-fire hover:bg-fire/90 text-white">Contact Us</Button></Link>
            <Link to="/"><Button size="lg" variant="outline">Back to Home</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
