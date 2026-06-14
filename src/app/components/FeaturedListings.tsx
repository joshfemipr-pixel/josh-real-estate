import { MapPin, Bed, Bath, Square } from "lucide-react";

const listings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&auto=format",
    price: "₦85,000,000",
    title: "Modern Family Villa",
    location: "Lekki Phase 1, Lagos",
    beds: 4,
    baths: 3,
    sqft: "320 m²",
    tag: "For Sale",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=600&h=400&fit=crop&auto=format",
    price: "₦2,500,000/yr",
    title: "Elegant 3-Bed Apartment",
    location: "Victoria Island, Lagos",
    beds: 3,
    baths: 2,
    sqft: "185 m²",
    tag: "For Rent",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=600&h=400&fit=crop&auto=format",
    price: "₦120,000,000",
    title: "Executive Smart Home",
    location: "Banana Island, Lagos",
    beds: 5,
    baths: 4,
    sqft: "450 m²",
    tag: "For Sale",
  },
];

export function FeaturedListings() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="properties" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm tracking-widest uppercase" style={{ color: "var(--accent)" }}>Our Listings</span>
          <h2 className="mt-2" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--foreground)" }}>
            Featured Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((l) => (
            <div
              key={l.id}
              className="bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="relative h-52 bg-muted overflow-hidden">
                <img
                  src={l.image}
                  alt={l.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-white"
                  style={{ backgroundColor: l.tag === "For Sale" ? "var(--primary)" : "var(--accent)" }}
                >
                  {l.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-1" style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.15rem" }}>{l.price}</div>
                <h3 className="mb-1" style={{ color: "var(--foreground)" }}>{l.title}</h3>
                <div className="flex items-center gap-1 mb-4" style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>
                  <MapPin size={13} />
                  <span>{l.location}</span>
                </div>

                <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid var(--border)", color: "var(--muted-foreground)", fontSize: "0.82rem" }}>
                  <span className="flex items-center gap-1"><Bed size={14} /> {l.beds} Beds</span>
                  <span className="flex items-center gap-1"><Bath size={14} /> {l.baths} Baths</span>
                  <span className="flex items-center gap-1"><Square size={14} /> {l.sqft}</span>
                </div>

                <button
                  onClick={scrollToBooking}
                  className="mt-4 w-full py-2.5 rounded-xl text-sm transition-colors hover:opacity-90"
                  style={{ backgroundColor: "var(--secondary)", color: "var(--primary)", fontWeight: 500 }}
                >
                  Book Inspection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
