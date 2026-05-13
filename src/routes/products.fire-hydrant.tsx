import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Download, Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vyraaz-logo.png";
import { useState } from "react";

import hoseReelDrum from "@/assets/hydrant-products/hose-reel-drum.jpg";
import fireHydrantValve from "@/assets/hydrant-products/fire-hydrant-valve.jpg";
import waterJetMonitor from "@/assets/hydrant-products/water-jet-monitor.jpg";
import foamMonitor from "@/assets/hydrant-products/foam-monitor.jpg";
import flexidropBraided from "@/assets/hydrant-products/flexidrop-braided.jpg";
import flexidropUnbraided from "@/assets/hydrant-products/flexidrop-unbraided.jpg";
import rrlType1 from "@/assets/hydrant-products/rrl-type-1.jpg";
import rrlType2 from "@/assets/hydrant-products/rrl-type-2.jpg";
import coupling from "@/assets/hydrant-products/coupling.jpg";
import fireReleaseValve from "@/assets/hydrant-products/fire-release-valve.jpg";
import hydrantAdapter from "@/assets/hydrant-products/hydrant-adapter.jpg";
import tripleBranchpipe from "@/assets/hydrant-products/triple-purpose-branchpipe.jpg";
import jetSprayShutoff from "@/assets/hydrant-products/jet-spray-shutoff-nozzle.jpg";
import branchPipeNozzle from "@/assets/hydrant-products/branch-pipe-nozzle.jpg";
import shutOffNozzle from "@/assets/hydrant-products/shut-off-nozzle.jpg";
import dualPressureNozzle from "@/assets/hydrant-products/dual-pressure-nozzle.jpg";
import multipurposeFlowNozzle from "@/assets/hydrant-products/multipurpose-flow-nozzle.jpg";
import revolvingBranchPipe from "@/assets/hydrant-products/revolving-branch-pipe.jpg";
import hosePipeCoupling from "@/assets/hydrant-products/hose-pipe-coupling.jpg";
import hoseNipple from "@/assets/hydrant-products/hose-nipple.jpg";
import sprinklerPendent from "@/assets/hydrant-products/sprinkler-pendent.jpg";
import sprinklerUpright from "@/assets/hydrant-products/sprinkler-upright.jpg";
import sprinklerSidewall from "@/assets/hydrant-products/sprinkler-sidewall.jpg";
import butterflyValve from "@/assets/hydrant-products/butterfly-valve.jpg";
import fireAlarmValve from "@/assets/hydrant-products/fire-alarm-valve.jpg";
import delugeValve from "@/assets/hydrant-products/deluge-valve.jpg";
import nrv from "@/assets/hydrant-products/nrv.jpg";
import ballValve from "@/assets/hydrant-products/ball-valve.jpg";
import pressureGauge from "@/assets/hydrant-products/pressure-gauge.jpg";
import pressureSwitch from "@/assets/hydrant-products/pressure-switch.jpg";
import hoseBoxSingle from "@/assets/hydrant-products/hose-box-single.jpg";
import hoseBoxDouble from "@/assets/hydrant-products/hose-box-double.jpg";
import endSuctionPump from "@/assets/hydrant-products/end-suction-pump.jpg";
import verticalTurbinePump from "@/assets/hydrant-products/vertical-turbine-pump.jpg";
import multistageCentrifugal from "@/assets/hydrant-products/multistage-centrifugal.jpg";
import monoblockPump from "@/assets/hydrant-products/monoblock-pump.jpg";
import pumpPanel from "@/assets/hydrant-products/pump-panel.jpg";

export const Route = createFileRoute("/products/fire-hydrant")({
  component: FireHydrantPage,
  head: () => ({
    meta: [
      { title: "Fire Hydrant System & Accessories | Vyraaz Firetech" },
      { name: "description", content: "Complete fire hydrant systems — landing valves, hoses, monitors, sprinklers, valves, pumps and accessories. ISI marked, BIS-certified components for industrial fire protection." },
      { property: "og:title", content: "Fire Hydrant System & Accessories | Vyraaz Firetech" },
      { property: "og:description", content: "End-to-end fire hydrant systems and accessories — supply, installation and AMC across Indore and central India." },
    ],
  }),
});

const products = [
  { img: hoseReelDrum, title: "Hose Reel Drum", desc: "Wall-mounted hose reel drum with 30 m of small-bore rubber hose for first-aid fire fighting." },
  { img: fireHydrantValve, title: "Fire Hydrant Valve SS/GM", desc: "Stainless steel and gun-metal landing valves for internal and external hydrant points." },
  { img: waterJetMonitor, title: "Water Jet Monitor", desc: "High-flow swivel water monitor for long-throw cooling and suppression on industrial sites." },
  { img: foamMonitor, title: "Foam Monitor", desc: "Self-inducing foam monitor for tank farms and flammable-liquid storage areas." },
  { img: flexidropBraided, title: "Flexidrop Braided", desc: "Braided stainless flexible drop for sprinkler connections in suspended ceilings." },
  { img: flexidropUnbraided, title: "Flexidrop Un-Braided", desc: "Un-braided flexible drop hose for clean, fast sprinkler installation in false ceilings." },
  { img: rrlType1, title: "RRL SS/GM Type 1", desc: "Reinforced Rubber Lined Type-1 fire hose with SS or GM couplings, BIS certified." },
  { img: rrlType2, title: "RRL SS/GM Type 2", desc: "Heavy-duty RRL Type-2 hose for industrial hydrant systems and high-pressure use." },
  { img: coupling, title: "Coupling SS / GM", desc: "Instantaneous male/female couplings in stainless steel and gun metal for hoses." },
  { img: fireReleaseValve, title: "Fire Release Valve", desc: "Quick-action release valve used in deluge and water-spray protection systems." },
  { img: hydrantAdapter, title: "Hydrant Adapter SS/GM", desc: "Adapters and reducers connecting hydrant outlets to standard hose couplings." },
  { img: tripleBranchpipe, title: "Triple Purpose / Universal Branchpipe", desc: "Universal branch pipe with jet, spray and shut-off operation in a single unit." },
  { img: jetSprayShutoff, title: "Jet · Spray & Shut-off Nozzle", desc: "Multi-mode nozzle delivering straight jet, fog spray and full shut-off." },
  { img: branchPipeNozzle, title: "Branch Pipe Nozzle SS/GM", desc: "Standard short branch-pipe nozzles in stainless steel or gun metal." },
  { img: shutOffNozzle, title: "Shut-off Nozzle", desc: "Inline shut-off nozzle for controlled flow during fire-fighting operations." },
  { img: dualPressureNozzle, title: "Dual Pressure Nozzle", desc: "Two-stage pressure nozzle giving high and low flow on the same line." },
  { img: multipurposeFlowNozzle, title: "Multipurpose Flow Nozzle", desc: "Adjustable flow nozzle for varying GPM output and spray pattern." },
  { img: revolvingBranchPipe, title: "Revolving Type Branch Pipe", desc: "Rotating-head branch pipe for cooling and circular spray coverage." },
  { img: hosePipeCoupling, title: "Hose Pipe Coupling SS/GM", desc: "Hose-end couplings in SS and GM for binding RRL fire hoses." },
  { img: hoseNipple, title: "Hose Nipple", desc: "Threaded hose nipples for permanent hose-to-coupling connection." },
  { img: sprinklerPendent, title: "Sprinkler Pendent Type", desc: "Pendent quartzoid-bulb sprinklers for ceiling-mounted protection." },
  { img: sprinklerUpright, title: "Sprinkler Upright Type", desc: "Upright sprinklers for exposed pipework in warehouses and plant rooms." },
  { img: sprinklerSidewall, title: "Sprinkler Side Wall Mount", desc: "Side-wall sprinklers for corridors and rooms without ceiling pipework." },
  { img: butterflyValve, title: "Butterfly Valve", desc: "Wafer / lug butterfly valves for isolation in fire-water mains." },
  { img: fireAlarmValve, title: "Fire Alarm Valve", desc: "Wet-pipe alarm check valve activating water-motor gong on flow." },
  { img: delugeValve, title: "Deluge Valve", desc: "Deluge valve for open-head spray systems protecting high-hazard areas." },
  { img: nrv, title: "Non-Returnable Valve (NRV)", desc: "Swing-type check valves preventing reverse flow in fire-pump discharge lines." },
  { img: ballValve, title: "Ball Valve", desc: "Quarter-turn brass / SS ball valves for instrumentation and small-bore lines." },
  { img: pressureGauge, title: "Pressure Gauge", desc: "Glycerine-filled pressure gauges for pump and hydrant line monitoring." },
  { img: pressureSwitch, title: "Pressure Switch", desc: "Field-adjustable pressure switches for jockey, main and standby pump control." },
  { img: hoseBoxSingle, title: "Hose Box Single Door", desc: "MS powder-coated single-door hose box housing hose, branch and key." },
  { img: hoseBoxDouble, title: "Hose Box Double Door", desc: "Double-door hose box for two hoses with glass-fronted visibility." },
  { img: endSuctionPump, title: "End Suction Pump", desc: "Horizontal end-suction centrifugal pumps for hydrant and sprinkler duty." },
  { img: verticalTurbinePump, title: "Vertical Turbine Pump", desc: "Vertical turbine fire pumps for underground tanks and deep-well sources." },
  { img: multistageCentrifugal, title: "Multistage Centrifugal", desc: "Multistage jockey pumps maintaining line pressure in fire mains." },
  { img: monoblockPump, title: "Monoblock Pumps", desc: "Compact monoblock pump sets for small hydrant and booster applications." },
  { img: pumpPanel, title: "Pump Panel", desc: "Auto / manual fire-pump control panels with starters, indicators and alarms." },
];

const whyUs = [
  ["Quality Assurance", "Only the highest-quality products that meet or exceed industry standards, including ISI marked hydrant accessories."],
  ["Expertise", "Years of hands-on experience let us advise on the right system for your site and risk profile."],
  ["Customer-Centric", "Personalised solutions, transparent pricing and prompt support from enquiry through AMC."],
  ["Reliability", "Equipment built to perform when it matters most — durable, certified and field-proven."],
  ["Competitive Pricing", "Honest pricing without compromise on product quality — making safety affordable for every project."],
];

function FireHydrantPage() {
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
            <a href="tel:+918103498409" className="hidden sm:block">
              <Button className="bg-fire text-white hover:opacity-90 shadow-glow">
                <PhoneCall className="w-4 h-4 mr-2" /> 8103 498 409
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
              <a href="tel:+918103498409" className="sm:hidden mt-2">
                <Button className="w-full bg-fire text-white shadow-glow">
                  <PhoneCall className="w-4 h-4 mr-2" /> 8103 498 409
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
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-fire opacity-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-ember">Fire Hydrant</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
              Fire <span className="text-fire">Hydrant</span> System
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              A complete range of fire hydrant equipment and accessories — landing valves, hoses, branch pipes, monitors,
              sprinklers, valves and pump sets — engineered to combat fires effectively and efficiently across industrial,
              commercial and residential installations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-fire hover:bg-fire/90 text-white">Request a Quote</Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download Brochure
              </Button>
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
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-[1]">Built for trust. Backed by experience.</h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                We supply, install and service hydrant equipment for plants, warehouses, hospitals, hotels and high-rises.
                Every component is sourced from BIS-certified manufacturers and matched to the hydraulic design of your site.
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

      {/* PRODUCT GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Catalogue</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Hydrant System <span className="text-fire">Components</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-fire transition-all hover:-translate-y-1 hover:shadow-fire"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-semibold text-sm md:text-base leading-snug mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Need a custom <span className="text-fire">hydrant system?</span></h2>
          <p className="mt-6 text-foreground/70">Talk to our team for a site survey, hydraulic calculation and itemised quotation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/"><Button size="lg" className="bg-fire hover:bg-fire/90 text-white">Contact Us</Button></Link>
            <Link to="/"><Button size="lg" variant="outline">Back to Home</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}