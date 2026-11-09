import type { SiteContent } from "@/lib/cms";

// Default search-engine title/description per page; admins can override them (keys seo.<page>.title / .description).
export const seoDefaults: Record<string, { name: string; title: string; description: string }> = {
  home: { name: "Home", title: "Dr. Husien Salama | Dentist in Baghdad — Saving Teeth", description: "Dr. Husien Salama (د. حسين سلامة), dentist in Al-Mansour, Baghdad: root canal treatment, retreatment, E.max restorations and saving broken teeth." },
  about: { name: "About", title: "About Dr. Husien Salama | Dentist, Baghdad", description: "Meet Dr. Husien Salama, a Baghdad dentist with a Diploma in Dental Treatment (ADA) whose mission is saving teeth." },
  services: { name: "Treatments", title: "Dental Treatments | Dr. Husien Salama, Baghdad", description: "Root canals, retreatment, E.max lab restorations, saving broken teeth, tooth-coloured fillings and X-ray check-ups in Baghdad." },
  amc: { name: "Treatment Plans", title: "Treatment Plans | Dr. Husien Salama, Dentist Baghdad", description: "From a check-up with X-rays to single tooth rescue and full mouth plans at Clear Dental Care, Al-Mansour." },
  projects: { name: "Cases", title: "Patient Cases & Videos | Dr. Husien Salama", description: "Real before-and-after X-rays, photos and videos of teeth saved by Dr. Husien Salama in Baghdad." },
  industries: { name: "Who We Treat", title: "Who We Treat | Dr. Husien Salama, Dentist Baghdad", description: "Toothache, failed root canals, broken teeth and second opinions — for patients from Baghdad and all over Iraq." },
  contact: { name: "Contact", title: "Book an Appointment | Dr. Husien Salama, Baghdad", description: "Call or WhatsApp 0774 444 4992. Clear Dental Care, 14 Ramadan St., Al-Mansour, Baghdad — open daily 11 AM to 9 PM." },
};

type MatchLike = { loaderData?: unknown };

/** Builds the head() meta for a page, using saved SEO texts from the root loader when present. */
export function seoMeta(matches: MatchLike[], page: string, title: string, description: string) {
  const texts = (matches[0]?.loaderData as SiteContent | undefined)?.texts ?? {};
  const t = texts[`seo.${page}.title`]?.trim() || title;
  const d = texts[`seo.${page}.description`]?.trim() || description;
  return {
    meta: [
      { title: t },
      { name: "description", content: d },
      { property: "og:title", content: t },
      { property: "og:description", content: d },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export const pageSeo = (page: keyof typeof seoDefaults) => ({ matches }: { matches: MatchLike[] }) =>
  seoMeta(matches, page, seoDefaults[page]!.title, seoDefaults[page]!.description);
