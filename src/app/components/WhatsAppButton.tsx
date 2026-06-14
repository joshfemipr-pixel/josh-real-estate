import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2348000000000"; // Replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'm interested in a property inspection. Can you help me?");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-white transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={22} fill="white" strokeWidth={0} />
      <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>Chat on WhatsApp</span>
    </a>
  );
}
