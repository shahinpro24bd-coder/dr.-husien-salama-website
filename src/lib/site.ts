import rootCanal from "@/assets/service-root-canal.jpg";
import retreatment from "@/assets/service-retreatment.jpg";
import emax from "@/assets/service-emax.jpg";
import rescue from "@/assets/service-rescue.jpg";
import fillings from "@/assets/service-fillings.jpg";
import xray from "@/assets/service-xray.jpg";

// Contact details from Dr. Husien Salama's Instagram profile (@dr.husien.salama).
export const company = {
  name: "Dr. Husien Salama — Dentist",
  short: "Dr. Husien Salama",
  phone: "0774 444 4992",
  phoneHref: "tel:+9647744444992",
  whatsappHref: "https://wa.me/9647744444992",
  email: "@clear_dentalcare",
  address: "Clear Dental Care, Al-Asal Building, 3rd Floor, 14 Ramadan St. (next to Royal Galaxy), Al-Mansour, Baghdad",
  hours: "Daily, 11:00 AM – 9:00 PM",
  facebook: "",
  instagram: "https://www.instagram.com/dr.husien.salama/",
  linkedin: "",
  mapQuery: "14 Ramadan Street, Al-Mansour, Baghdad, Iraq",
};

/** Link for the "email" contact field: an @handle opens Instagram, an address opens the mail app. */
export function contactLink(v: string) {
  const s = v.trim();
  if (s.startsWith("@")) return `https://www.instagram.com/${s.slice(1)}/`;
  if (/^https?:\/\//.test(s)) return s;
  return `mailto:${s}`;
}

export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  summary: string;
  items: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    icon: "fa-tooth",
    image: rootCanal,
    summary:
      "Careful root canal treatment that removes infection from deep inside the tooth so you can keep your natural tooth instead of losing it.",
    items: [
      "Diagnosis with dental X-rays before every treatment",
      "Rubber dam isolation for a clean, sterile field",
      "Cleaning and shaping of every canal",
      "Thorough irrigation and disinfection",
      "Sealed root filling (obturation)",
      "Follow-up X-ray to confirm the result",
    ],
    cta: "Book a Root Canal Visit",
  },
  {
    slug: "retreatment",
    title: "Root Canal Retreatment",
    icon: "fa-redo",
    image: retreatment,
    summary:
      "When an old root canal fails, we find the reason first — then re-clean the canals and treat the problem at its root to save the tooth.",
    items: [
      "Finding the cause of the old treatment's failure",
      "Removing old root filling material",
      "Bypassing ledges and separated (broken) instruments",
      "Treating curved and difficult canals",
      "Healing infection around the root tip",
      "New, well-sealed root filling",
    ],
    cta: "Get Your Tooth Checked",
  },
  {
    slug: "emax-restorations",
    title: "E.max Lab Restorations",
    icon: "fa-gem",
    image: emax,
    summary:
      "Strong, natural-looking IPS e.max ceramic restorations made in the dental lab to rebuild teeth after treatment and bring back a natural smile.",
    items: [
      "E.max inlays and onlays",
      "E.max crowns",
      "Natural tooth colour and shine",
      "Precise fit made in the dental lab",
      "Protection for root-treated teeth",
      "Fitting and cementation in a final visit",
    ],
    cta: "Ask About E.max",
  },
  {
    slug: "tooth-rescue",
    title: "Saving Broken Teeth",
    icon: "fa-first-aid",
    image: rescue,
    summary:
      "Badly broken or decayed teeth that others would extract can often be saved — with fibre posts, deep margin elevation and careful rebuilding.",
    items: [
      "Assessment: can this tooth be saved?",
      "Fibre post and core build-up",
      "Deep margin elevation",
      "Matrix band techniques for deep cavities",
      "Rebuilding the tooth before a final restoration",
      "Honest advice when extraction is truly needed",
    ],
    cta: "Save My Tooth",
  },
  {
    slug: "fillings",
    title: "Tooth-Coloured Fillings",
    icon: "fa-fill-drip",
    image: fillings,
    summary:
      "Natural-looking composite fillings — and the right decision about when a filling is really needed and when it is better to leave the tooth alone.",
    items: [
      "Composite (white) fillings",
      "Replacing old and failed fillings",
      "Treating decay between teeth",
      "Minimal-intervention approach",
      "Monitoring arrested (stopped) decay",
      "Polished, natural finish",
    ],
    cta: "Book a Filling",
  },
  {
    slug: "diagnosis",
    title: "Check-Up & X-Ray Diagnosis",
    icon: "fa-x-ray",
    image: xray,
    summary:
      "A full examination with dental X-rays to see what the eye cannot — hidden infection, bone loss and decay under old fillings — before any treatment.",
    items: [
      "Complete dental examination",
      "Digital dental X-rays",
      "Checking old fillings and root canals",
      "Clear explanation of what we found",
      "A written treatment plan",
      "Prevention and home-care advice",
    ],
    cta: "Book a Check-Up",
  },
];

export const whyUs = [
  { icon: "fa-tooth", title: "Saving Teeth Is the Mission", text: "Our first goal is always to keep your natural tooth — extraction is the last option, not the first." },
  { icon: "fa-x-ray", title: "X-Rays Before Every Decision", text: "We look beneath the surface. Diagnosis is based on X-rays, not guesses, so the real problem gets treated." },
  { icon: "fa-shield-alt", title: "Rubber Dam & Sterilisation", text: "Rubber dam isolation and proper sterilisation protect the tooth from bacteria during treatment." },
  { icon: "fa-search-plus", title: "Attention to Every Detail", text: "Difficult cases are handled step by step, with careful work and the details that make treatment last." },
  { icon: "fa-comments", title: "Clear Explanation", text: "You see your X-rays and photos and understand your treatment before we begin." },
  { icon: "fa-clock", title: "Open Every Day", text: "We receive patients daily from 11:00 AM to 9:00 PM in Al-Mansour, Baghdad." },
];

export const processSteps = [
  { title: "Book Your Visit", text: "Call or WhatsApp 0774 444 4992 to book an appointment at Clear Dental Care in Al-Mansour." },
  { title: "Examination & X-Ray", text: "The doctor examines the tooth and takes X-rays to find the real cause of the problem." },
  { title: "Treatment Plan", text: "You get a clear explanation of the options, number of visits and the cost before starting." },
  { title: "Careful Treatment", text: "Treatment is done under rubber dam isolation with sterile instruments and attention to detail." },
  { title: "Follow-Up", text: "A final X-ray and follow-up visits make sure the tooth heals and the result lasts." },
];

export const faqs = [
  { q: "Can my tooth be saved instead of extracted?", a: "In many cases, yes. Saving teeth is Dr. Husien's main focus. After an examination and X-ray he will tell you honestly whether the tooth can be saved with root canal treatment, a fibre post or a lab restoration." },
  { q: "My old root canal still hurts. What can be done?", a: "A failed root canal can often be retreated. We first find the reason it failed — missed canals, poor sealing or a broken instrument — and then re-clean and re-fill the canals to save the tooth." },
  { q: "Is root canal treatment painful?", a: "Treatment is done under local anaesthesia, so most patients feel little or no pain. It actually removes the infection that causes the pain." },
  { q: "How many visits does treatment take?", a: "It depends on the case. Many root canals are finished in one or two visits; a lab E.max restoration usually needs one more visit to fit it." },
  { q: "What is an E.max restoration?", a: "E.max is a strong, tooth-coloured ceramic made in the dental lab. It is used for inlays, onlays and crowns to rebuild and protect a tooth with a natural look." },
  { q: "Where is the clinic?", a: "Clear Dental Care, Al-Asal Building, 3rd floor, 14 Ramadan Street, next to Royal Galaxy, Al-Mansour, Baghdad." },
  { q: "What are the working hours?", a: "We are open every day from 11:00 AM to 9:00 PM. Call or WhatsApp 0774 444 4992 or 0784 444 4992 to book." },
];
