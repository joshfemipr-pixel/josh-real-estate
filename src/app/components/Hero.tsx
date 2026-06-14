export function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&h=900&fit=crop&auto=format')",
          backgroundColor: "#2d6a4f",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,43,30,0.82) 0%, rgba(28,43,30,0.4) 60%, rgba(28,43,30,0.1) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-xl">
          <span
            className="inline-block px-4 py-1 rounded-full mb-5 text-sm tracking-wide"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            Trusted Real Estate Experts
          </span>
          <h1
            className="text-white mb-6 leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            Find Your Perfect Home with Confidence
          </h1>
          <p className="text-white/80 mb-10 leading-relaxed" style={{ fontSize: "1.1rem" }}>
            We help families and investors discover properties that truly feel like home. Expert guidance, transparent process, and genuine care at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 rounded-full text-white transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--accent)", fontWeight: 600 }}
            >
              Book a Free Inspection
            </button>
            <a
              href="#properties"
              onClick={(e) => { e.preventDefault(); document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors text-center"
              style={{ fontWeight: 500 }}
            >
              Browse Listings
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap gap-6 sm:gap-12">
          {[
            { value: "800+", label: "Homes Sold" },
            { value: "15 yrs", label: "Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-white" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem" }}>{s.value}</div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
