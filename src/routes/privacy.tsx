import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Vyraaz Firetech" },
      { name: "description", content: "Privacy policy of Vyraaz Firetech — how we collect, use and protect your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link to="/" className="text-sm text-ember uppercase tracking-[0.2em]">← Back to Home</Link>
        <h1 className="font-display text-5xl md:text-6xl uppercase mt-6 mb-4">Privacy <span className="text-fire">Policy</span></h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">1. Introduction</h2>
            <p>Vyraaz Firetech ("we", "our", "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">2. Information We Collect</h2>
            <p>We may collect personal details such as your name, phone number, email address, and site location when you contact us for fire safety services, request a quotation, or schedule an AMC visit. We also collect non-personal information such as browser type and pages visited for analytics.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to enquiries and provide quotations.</li>
              <li>To schedule installation, refilling, and AMC visits.</li>
              <li>To send service reminders and important safety updates.</li>
              <li>To improve our website and customer experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">4. Data Sharing</h2>
            <p>We do not sell or rent your personal information. Data may be shared only with our service technicians and authorised partners who help us deliver our services, or when required by law.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">5. Data Security</h2>
            <p>We use reasonable physical, technical, and administrative safeguards to protect your information. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">6. Your Rights</h2>
            <p>You may request access, correction, or deletion of your personal information at any time by writing to us at vyraazfiretech@gmail.com.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">7. Contact Us</h2>
            <p>For any privacy-related questions, contact Vyraaz Firetech, Indore, Madhya Pradesh — Phone: +91 81034 97409 — Email: vyraazfiretech@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}