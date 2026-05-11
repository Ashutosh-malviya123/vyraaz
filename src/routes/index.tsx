import { createFileRoute } from "@tanstack/react-router";
import { Flame, Shield, Wrench, GraduationCap, PhoneCall, MapPin, Mail, CheckCircle2, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-firefighters.jpg";
import extImg from "@/assets/extinguishers.jpg";
import sprinklerImg from "@/assets/sprinkler.jpg";
import trainingImg from "@/assets/training.jpg";
import hydrantImg from "@/assets/hydrant.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fit Fire Service Indore | Fire Safety Equipment & AMC" },
      {
        name: "description",
        content:
          "Fit Fire Service in Indore — fire extinguishers, sprinkler & hydrant systems, refilling, AMC and fire safety training for homes, offices and industries.",
      },
    ],
  }),
});

const services = [
  { icon: Flame, title: "Fire Extinguishers", desc: "ABC, CO₂, Foam, Water & K-type extinguishers — sales, installation & refilling.", img: extImg },
  { icon: Shield, title: "Hydrant & Hose Systems", desc: "Design, supply and installation of wet/dry riser fire hydrant systems.", img: hydrantImg },
  { icon: Wrench, title: "Sprinkler & Alarm Systems", desc: "Automatic sprinklers, smoke detectors and addressable fire alarm panels.", img: sprinklerImg },
  { icon: GraduationCap, title: "Fire Safety Training", desc: "On-site mock drills and staff training as per Indian fire safety norms.", img: trainingImg },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-md grid place-items-center text-white" style={{ background: "var(--gradient-fire)" }}>
              <Flame className="w-5 h-5" />
            </span>
            <span>Fit Fire Service</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-[color:var(--brand)]">Services</a>
            <a href="#about" className="hover:text-[color:var(--brand)]">About</a>
            <a href="#why" className="hover:text-[color:var(--brand)]">Why Us</a>
            <a href="#contact" className="hover:text-[color:var(--brand)]">Contact</a>
          </nav>
          <a href="tel:+919999999999">
            <Button className="text-white" style={{ background: "var(--gradient-fire)" }}>
              <PhoneCall className="w-4 h-4 mr-2" /> Call Now
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img src={heroImg} alt="Fit Fire Service team Indore" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44 text-white">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[color:var(--accent-yellow)] mb-6">
            <Siren className="w-4 h-4" /> Indore's Trusted Fire Safety Partner
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] max-w-4xl">
            Protecting Lives & Property with <span style={{ background: "var(--gradient-fire)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Reliable Fire Safety</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Fit Fire Service supplies, installs and maintains complete fire-fighting equipment for homes, offices, factories and institutions across Indore and Madhya Pradesh.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button size="lg" className="text-white h-12 px-7 text-base" style={{ background: "var(--gradient-fire)", boxShadow: "var(--shadow-fire)" }}>
                Get Free Site Survey
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="h-12 px-7 text-base bg-transparent text-white border-white/40 hover:bg-white hover:text-foreground">
                Explore Services
              </Button>
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[["10+", "Years"], ["1500+", "Clients"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl md:text-4xl font-bold text-[color:var(--accent-yellow)]">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[color:var(--brand)]">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Indore's dedicated team for end-to-end fire safety solutions.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Based in Indore, Fit Fire Service is a trusted name in fire protection. From a single extinguisher refill to designing complete hydrant and sprinkler networks for industrial plants, we deliver certified equipment, professional installation and reliable annual maintenance contracts (AMC).
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "ISI-marked & MSME certified equipment",
              "Licensed technicians and timely AMC visits",
              "Compliance with Indian fire safety standards",
              "Fast emergency refilling & service across Indore",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[color:var(--brand)] shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={trainingImg} alt="Fire safety training in Indore" loading="lazy" width={1280} height={960} className="rounded-2xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-[color:var(--brand)] text-white p-6 rounded-2xl max-w-[220px] shadow-xl">
            <div className="text-3xl font-black">100%</div>
            <div className="text-sm mt-1">Compliance & Safety Guaranteed</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-[color:var(--brand)]">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Complete Fire Safety, Under One Roof</h2>
            <p className="mt-4 text-muted-foreground">From supply to installation, refilling and training — everything you need to keep your premises fire-safe.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1280} height={960} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-11 h-11 rounded-lg grid place-items-center text-white mb-4" style={{ background: "var(--gradient-fire)" }}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-[color:var(--brand)]">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Safety You Can Count On</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            { icon: Shield, t: "Certified Equipment", d: "All products are ISI-marked and tested to Indian safety standards." },
            { icon: Wrench, t: "Expert Installation", d: "Trained engineers ensure correct placement and code compliance." },
            { icon: PhoneCall, t: "24/7 Emergency Support", d: "Quick response across Indore for refills, repairs and emergencies." },
          ].map((f) => (
            <div key={f.t} className="p-8 rounded-2xl border border-border bg-card hover:border-[color:var(--brand)] transition">
              <div className="w-12 h-12 rounded-xl grid place-items-center text-white mb-5" style={{ background: "var(--gradient-fire)" }}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl">{f.t}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-24 text-white overflow-hidden" style={{ background: "var(--brand-dark)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-fire)" }} />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Need a fire safety audit for your premises?</h2>
            <p className="mt-5 text-white/80 text-lg">Talk to our experts today. We provide free site surveys and customized quotations across Indore.</p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <PhoneCall className="w-5 h-5 mt-1 text-[color:var(--accent-yellow)]" />
                <div>
                  <div className="text-sm text-white/60">Call us</div>
                  <a href="tel:+919999999999" className="font-semibold text-lg">+91 99999 99999</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-[color:var(--accent-yellow)]" />
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <a href="mailto:info@fitfireservice.in" className="font-semibold text-lg">info@fitfireservice.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-[color:var(--accent-yellow)]" />
                <div>
                  <div className="text-sm text-white/60">Address</div>
                  <div className="font-semibold text-lg">Indore, Madhya Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold">Request a Quote</h3>
            <input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:border-[color:var(--accent-yellow)]" placeholder="Your Name" />
            <input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:border-[color:var(--accent-yellow)]" placeholder="Phone Number" />
            <input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:border-[color:var(--accent-yellow)]" placeholder="Email Address" />
            <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:border-[color:var(--accent-yellow)]" placeholder="Tell us about your requirement" />
            <Button type="submit" className="w-full h-12 text-base text-white" style={{ background: "var(--gradient-fire)" }}>
              Send Enquiry
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 items-center text-sm">
          <div className="flex items-center gap-2 font-bold text-background">
            <Flame className="w-4 h-4 text-[color:var(--brand)]" />
            Fit Fire Service · Indore
          </div>
          <div>© {new Date().getFullYear()} Fit Fire Service. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
