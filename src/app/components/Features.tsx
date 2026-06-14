import { ShieldCheck, Search, ClipboardList, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Wide Property Selection",
    desc: "Hundreds of verified listings across residential, commercial, and rental properties in prime locations.",
  },
  {
    icon: ClipboardList,
    title: "Easy Inspection Booking",
    desc: "Schedule a property inspection in seconds — we'll confirm within 24 hours and bring the expertise to you.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Transparent",
    desc: "Every listing is verified by our team. No hidden fees, no surprises — just straightforward real estate.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "Our agents are available 7 days a week via call, email, or WhatsApp to answer every question you have.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm tracking-widest uppercase" style={{ color: "var(--accent)" }}>Why Choose Us</span>
          <h2 className="mt-2" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--foreground)" }}>
            Real Estate Made Simple
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <Icon size={22} style={{ color: "var(--primary)" }} />
              </div>
              <h3 style={{ fontSize: "1rem", color: "var(--foreground)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
