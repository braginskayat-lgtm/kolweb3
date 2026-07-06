import { FaWhatsapp } from "react-icons/fa";

const PHONE = "48730597599";
const MESSAGE = "Hi, I am interested in your crypto marketing services";

export function WhatsAppButton() {
  const href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform group-hover:scale-110">
        <FaWhatsapp className="h-8 w-8 text-white" />
      </span>
    </a>
  );
}
