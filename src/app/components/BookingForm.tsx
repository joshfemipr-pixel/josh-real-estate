import { useState } from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  date: string;
  time: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  date: "",
  time: "",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.propertyType) e.propertyType = "Select a property type";
    if (!form.date) e.date = "Select a preferred date";
    if (!form.time) e.time = "Select a preferred time";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  const fieldClass = "w-full px-4 py-3 rounded-xl border outline-none transition-colors focus:ring-2 focus:ring-[var(--accent)] text-foreground";
  const fieldStyle = { backgroundColor: "var(--input-background)", borderColor: "var(--border)" };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm tracking-widest uppercase" style={{ color: "var(--accent)" }}>Schedule a Visit</span>
          <h2 className="mt-2" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--foreground)" }}>
            Book a Free Inspection
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
            Fill in your details and we'll confirm your inspection appointment within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center text-center gap-4 shadow-sm">
            <CheckCircle2 size={52} style={{ color: "var(--accent)" }} />
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", color: "var(--foreground)" }}>
              Booking Received!
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              Thank you, <strong>{form.name}</strong>! We'll contact you at{" "}
              <strong>{form.email}</strong> within 24 hours to confirm your inspection on{" "}
              <strong>{form.date}</strong> at <strong>{form.time}</strong>.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              className="mt-4 px-8 py-3 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Book Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-5"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Amara Johnson"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass}
                  style={fieldStyle}
                />
                {errors.name && <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                  style={fieldStyle}
                />
                {errors.email && <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.email}</span>}
              </div>
            </div>

            {/* Phone + Property Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={fieldClass}
                  style={fieldStyle}
                />
                {errors.phone && <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.phone}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="propertyType" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>Property Type *</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{ ...fieldStyle, color: form.propertyType ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  <option value="" disabled>Select type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Commercial">Commercial Space</option>
                  <option value="Land">Land / Plot</option>
                </select>
                {errors.propertyType && <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.propertyType}</span>}
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="date" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>
                  <span className="flex items-center gap-1.5"><CalendarDays size={14} /> Preferred Date *</span>
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={fieldClass}
                  style={fieldStyle}
                />
                {errors.date && <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.date}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="time" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>Preferred Time *</label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{ ...fieldStyle, color: form.time ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  <option value="" disabled>Select time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
                {errors.time && <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.time}</span>}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" style={{ color: "var(--foreground)", fontSize: "0.875rem" }}>Additional Notes (optional)</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Any specific property or location in mind? Let us know..."
                value={form.message}
                onChange={handleChange}
                className={fieldClass}
                style={{ ...fieldStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white transition-opacity hover:opacity-90 mt-1"
              style={{ backgroundColor: "var(--primary)", fontWeight: 600, fontSize: "1rem" }}
            >
              Confirm Inspection Booking
            </button>

            <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
              No payment needed. We'll reach out to confirm your appointment.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
